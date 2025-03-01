import Showdown from 'showdown';

const converter = new Showdown.Converter();
converter.setOption('noHeaderId', true);
converter.setOption('simpleLineBreaks', true);
converter.setOption('tables', true);
converter.setOption('strikethrough', true);

const Routes = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'articles',
    path: '/articles',
  },
  {
    name: 'about',
    path: '/about',
  },
];

export function makeHtml(fileName: string, contents: string) {
  const html = converter.makeHtml(contents);

  const title = `<title>2-19 / articles / ${fileName}</title>`;
  const anchors = Routes.map(({ name, path }) => `<a href="${path}">${name}</a>`).join('\n');
  const nav = `<header><nav>\n${anchors}\n</nav></header>`;

  return [title, nav, html].join('\n');
}
