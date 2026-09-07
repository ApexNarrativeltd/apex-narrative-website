// Shared constants used across multiple pages/components.
// Update this file when adding/modifying service types or client segments.

export const SERVICE_TYPES = [
  'Real Estate Media',
  'Brand & Marketing Films',
  'Event Coverage',
  'Social Media Content Packages',
] as const;

export type ServiceType = typeof SERVICE_TYPES[number];