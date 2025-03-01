import Showdown from 'showdown';

const converter = new Showdown.Converter();
converter.setOption('noHeaderId', true);

const routes = ['articles', 'about'];

export function makeHtml(fileName: string, contents: string) {
  const html = converter.makeHtml(contents);

  const title = `<title>2-19 / articles / ${fileName}</title>`;
  const anchors = routes.map((route) => `<a href="/${route}">${route}</a>`).join('\n');
  const nav = `<header><nav>\n${anchors}\n</nav></header>`;

  return [title, nav, html].join('\n');
}
