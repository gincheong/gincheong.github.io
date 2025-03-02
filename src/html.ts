import fs from 'fs';
import path from 'path';
import { DOMParser } from 'xmldom';
import { filterFileWithExt, readDirectory } from './files';
import { makeHtml } from './markdown';

function mdToHtml() {
  const { files } = readDirectory('./articles');
  const markdownFiles = files.filter((file) => filterFileWithExt(file, '.md'));

  markdownFiles.forEach((markdownFilePath) => {
    const file = fs.readFileSync(markdownFilePath);
    const texts = file.toString();

    const html = makeHtml(path.parse(markdownFilePath).name, texts);

    const htmlFilePath = markdownFilePath.replace(/\.md$/, '.html');

    fs.writeFileSync(htmlFilePath, html, { flag: 'w' });
  });
}

function makeArticleListHtml() {
  const ARTICLE_INDEX_HTML_PATH = './articles/index.html';

  const { files } = readDirectory('./articles');
  const htmlFiles = files.filter((file) => filterFileWithExt(file, '.html'));
  htmlFiles.reverse();

  const articleIndex = fs.readFileSync(ARTICLE_INDEX_HTML_PATH).toString();
  const articleDom = new DOMParser().parseFromString(articleIndex, 'text/html');

  const links = htmlFiles.map((htmlFilePath) => {
    const filePathWithoutExtension = path.parse(htmlFilePath).name;

    const anchor = articleDom.createElement('a');
    anchor.setAttribute('href', `/${filePathWithoutExtension}`);
    anchor.textContent = filePathWithoutExtension;

    const li = articleDom.createElement('li');
    li.appendChild(anchor);

    return li;
  });

  const ulElement = articleDom.getElementById('articles');
  if (!ulElement) {
    return;
  }
  ulElement.textContent = '';
  links.forEach((anchor) => ulElement.appendChild(anchor));

  fs.writeFileSync(ARTICLE_INDEX_HTML_PATH, String(articleDom), { flag: 'w' });
}

function makeHTML() {
  mdToHtml();
  console.log(`✅ articles/**/*.html 생성 완료!`);
  makeArticleListHtml();
  console.log(`✅ articles/index.html 업데이트 완료!`);
}

makeHTML();
