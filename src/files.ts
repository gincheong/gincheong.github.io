import fs from 'fs';
import path from 'path';

export function readDirectory(dirPath: string) {
  let files: string[] = [];
  let folders: string[] = [];

  function traverseDirectory(currentPath: string) {
    const items = fs.readdirSync(currentPath);
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      if (fs.statSync(fullPath).isDirectory()) {
        folders.push(fullPath);
        traverseDirectory(fullPath);
      } else {
        files.push(fullPath);
      }
    }
  }

  traverseDirectory(dirPath);
  return { files, folders };
}

export function filterFileWithExt(fileName: string, ext: string) {
  const name = path.parse(fileName).name;
  if (name === 'index') {
    return false;
  }
  return path.extname(fileName) === ext;
}
