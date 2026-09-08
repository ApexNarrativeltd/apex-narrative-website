import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

export default defineConfig({
  name: 'apex-narrative-studio',
  title: 'Apex Narrative Studio',

  projectId: 'shuilc3q',
  dataset: 'production',

  plugins: [
    structureTool({
      name: 'studio',
      title: 'Studio',
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.documentTypeListItem('portfolioItem').title('Portfolio Items'),
          ]),
    }),
    // Comment out visionTool if you don't need it
    // visionTool(),
  ],

  schema: {
    types: [
      {
        name: 'portfolioItem',
        title: 'Portfolio Item',
        type: 'document',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'The main title of this project. E.g. "Horizon Properties"',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'client',
            title: 'Client',
            type: 'string',
            description: 'Client/company name (if different from title)',
          },
          {
            name: 'serviceType',
            title: 'Service Type',
            type: 'string',
            description: 'Which of our 4 services does this project belong to?',
            options: {
              list: [
                { title: 'Real Estate Media', value: 'Real Estate Media' },
                { title: 'Brand & Marketing Films', value: 'Brand & Marketing Films' },
                { title: 'Event Coverage', value: 'Event Coverage' },
                { title: 'Social Media Content Packages', value: 'Social Media Content Packages' },
              ],
            },
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'mediaType',
            title: 'Media Type',
            type: 'string',
            description: 'Is this a video or a photo?',
            options: {
              list: [
                { title: 'Video', value: 'video' },
                { title: 'Photo', value: 'photo' },
              ],
            },
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'videoUrl',
            title: 'Video URL',
            type: 'url',
            description: 'Only for video items – paste the video URL (YouTube, Vimeo, or Cloudinary)',
          },
          {
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'image',
            description: 'The main image shown on the Portfolio page. Required for all items.',
            options: {
              hotspot: true,
            },
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Short one-line caption. E.g. "Social Media Content Production"',
          },
          {
            name: 'featured',
            title: 'Featured',
            type: 'boolean',
            description: 'Check this to show the item on the homepage "Stories We\'ve Helped Tell" section',
            initialValue: false,
          },
          {
            name: 'duration',
            title: 'Duration',
            type: 'string',
            description: 'For video items only – e.g. "02:45"',
          },
          {
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
            description: 'Date for sorting. Auto-set to today when created.',
            initialValue: () => new Date().toISOString(),
          },
        ],
        preview: {
          select: {
            title: 'title',
            subtitle: 'serviceType',
            media: 'thumbnail',
          },
        },
        orderings: [
          {
            title: 'Published Date, Newest First',
            name: 'publishedAtDesc',
            by: [{ field: 'publishedAt', direction: 'desc' }],
          },
        ],
      },
    ],
  },
});