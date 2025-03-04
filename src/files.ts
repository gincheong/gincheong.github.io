import fs from 'fs';
import path from 'path';

export function readDirectory(dirPath: string) {
  let files: string[] = [];

  function traverseDirectory(currentPath: string) {
    const items = fs.readdirSync(currentPath);
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      if (fs.statSync(fullPath).isDirectory()) {
        traverseDirectory(fullPath);
      } else {
        if (path.parse(fullPath).name !== '.DS_Store') {
          files.push(fullPath);
        }
      }
    }
  }

  traverseDirectory(dirPath);
  return { files };
}

export function filterFileWithExt(fileName: string, ext: string) {
  const name = path.parse(fileName).name;
  if (name === 'index') {
    return false;
  }
  return path.extname(fileName) === ext;
}
