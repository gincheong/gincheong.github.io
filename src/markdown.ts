import { readFileSync } from 'fs';
import Showdown from 'showdown';
import { DOMParser } from 'xmldom';

const converter = new Showdown.Converter();
converter.setOption('noHeaderId', true);
converter.setOption('simpleLineBreaks', true);
converter.setOption('tables', true);
converter.setOption('strikethrough', true);

export function makeHtml(fileName: string, contents: string) {
  const template = readFileSync('src/templates/articles.html').toString();

  const dom = new DOMParser().parseFromString(template, 'text/html');

  const $title = dom.getElementsByTagName('title')[0];
  $title && ($title.textContent = `2-19 / articles / ${fileName}`);

  const htmlText = converter.makeHtml(contents);
  const html = new DOMParser({
    errorHandler: {
      warning: undefined,
      error: console.error,
      fatalError: console.error,
    },
  }).parseFromString(htmlText, 'text/html');

  const $section = dom.getElementsByTagName('section')[0];
  $section.appendChild(html ?? '');

  return dom.toString();
}
