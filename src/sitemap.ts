import * as fs from 'fs';
import * as path from 'path';

const BASE_URL = 'https://gincheong.github.io';
const TARGET_DIR = './'; // 사이트 파일이 저장된 폴더
const SPECIAL_DIRS = ['articles']; // 이 디렉토리 내 파일은 모두 포함
const EXCLUDED_DIRS: string[] = []; // 제외할 디렉토리 목록

/**
 * 특정 디렉토리가 제외 목록(EXCLUDED_DIRS)에 포함되는지 확인
 * @param filePath 검사할 파일 경로
 * @returns 제외 대상 여부 (true = 제외)
 */
function isExcluded(filePath: string): boolean {
  return EXCLUDED_DIRS.some((excludedDir) => filePath.startsWith(excludedDir + path.sep));
}

/**
 * HTML 파일을 필터링하는 조건:
 * 1. `index.html` 파일만 포함 (기본 규칙)
 * 2. `SPECIAL_DIRS` 폴더 내부의 모든 HTML 파일은 예외적으로 포함
 * 3. 제외 디렉토리 목록에 있는 경우 포함하지 않음
 * @param filePath 검사할 파일 경로
 * @returns 포함 대상 여부 (true = 포함됨)
 */
function isValidFile(filePath: string): boolean {
  if (isExcluded(filePath)) return false;

  const relativePath = path.relative(TARGET_DIR, filePath);
  const parsedPath = path.parse(filePath);

  // SPECIAL_DIRS 내부면 모든 HTML 파일 포함
  if (SPECIAL_DIRS.some((dir) => relativePath.startsWith(dir))) {
    return true;
  }

  // 기본적으로 index.html 파일만 포함
  return parsedPath.base === 'index.html';
}

/**
 * 주어진 디렉토리를 재귀적으로 탐색하여 HTML 파일을 찾음 (필터링 적용)
 * @param dir 탐색할 디렉토리 경로
 * @returns 필터링된 HTML 파일들의 상대 경로 배열
 */
function getHtmlFiles(dir: string): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);

  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(filePath));
    } else if (file.endsWith('.html') && isValidFile(filePath)) {
      results.push(filePath);
    }
  }
  return results;
}

/**
 * HTML 파일 리스트를 기반으로 사이트맵 XML을 생성
 * @param files HTML 파일 리스트
 * @returns XML 형식의 사이트맵 문자열
 */
function generateSitemapXml(files: string[]): string {
  const urls = files.map((file) => {
    let relativePath = path.relative(TARGET_DIR, file).replace(/\\/g, '/');
    relativePath = relativePath.replace(/index\.html$/, ''); // index.html 제거
    relativePath = relativePath.replace(/\.html$/, ''); // 다른 HTML 파일도 .html 제거

    const lastMod = fs.statSync(file).mtime.toISOString().split('T')[0];

    // URL 인코딩 적용 (한글 및 특수문자 처리)
    const encodedPath = encodeURI(relativePath);

    return `  <url>
    <loc>${BASE_URL}/${encodedPath}</loc>
    <lastmod>${lastMod}</lastmod>
  </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;
}

/**
 * 사이트맵을 생성하고 파일로 저장
 */
function makeSitemap() {
  const htmlFiles = getHtmlFiles(TARGET_DIR);
  const sitemapXml = generateSitemapXml(htmlFiles);

  fs.writeFileSync(path.join(TARGET_DIR, 'sitemap.xml'), sitemapXml, 'utf8');
  console.log('✅ sitemap.xml 생성 완료!');
}

// 실행
makeSitemap();
