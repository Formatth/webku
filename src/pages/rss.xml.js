import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const notes = await getCollection('notes');
  return rss({
    title: 'YukinoSec — Personal Notes',
    description: 'Catatan pribadi tentang coding, web, security, anime, project, dan eksperimen.',
    site: context.site,
    items: notes.map((note) => ({
      title: note.data.title,
      description: note.data.description,
      pubDate: note.data.pubDate,
      link: `/notes/${note.id}/`,
    })),
  });
}
