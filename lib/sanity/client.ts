import { createClient, type ClientConfig } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const config: ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  useCdn: true,
  perspective: 'published',
};

export const client = createClient(config);

// Helper for building image URLs
export const imageBuilder = imageUrlBuilder(client);

// Simplified fetch helper
export async function fetchSanity<T = any>(
  query: string,
  params?: Record<string, any>
): Promise<T> {
  return client.fetch(query, params);
}