import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: 'shuilc3q',
    dataset: 'production',
  },
  studioHost: 'localhost', // only for local dev – remove for production
  autoUpdates: true,
});