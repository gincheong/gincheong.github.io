import Showdown from 'showdown';

const converter = new Showdown.Converter();
converter.setOption('noHeaderId', true);

export function makeHtml(fileName: string, contents: string) {
  const html = converter.makeHtml(contents);

  return `<title>2-19 / articles / ${fileName}</title>\n${html}`;
}
