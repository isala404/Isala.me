import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    readingTime: z.number().optional(), // in minutes
    cover: z.string().optional(),
    externalUrl: z.string().optional(), // for external blog posts (e.g., Medium)
  }),
});

const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishedAt: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

// Position schema for experience
const positionSchema = z.object({
  title: z.string(),
  type: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  location: z.string().optional(),
  description: z.string().optional(),
  skills: z.array(z.string()).optional(),
  link: z.string().optional(),
});

// Profile schema - single MDX file containing all personal information
const profileSchema = z.object({
  // Personal info
  name: z.string(),
  title: z.string(),
  tagline: z.string(),
  location: z.string(),

  // Contact
  contact: z.object({
    email: z.string(),
    github: z.string(),
    twitter: z.string(),
    linkedin: z.string(),
  }),

  // Bio
  bio: z.string(),
  longBio: z.string(),
  topSkills: z.array(z.string()),

  // Experience
  experience: z.array(
    z.object({
      company: z.string(),
      logo: z.string(),
      positions: z.array(positionSchema),
    })
  ),

  // Education
  education: z.array(
    z.object({
      institution: z.string(),
      degree: z.string(),
      startDate: z.string(),
      endDate: z.string(),
      grade: z.string().optional(),
      rank: z.string().optional(),
      highlights: z.array(z.string()),
    })
  ),

  // Certifications
  certifications: z.array(
    z.object({
      name: z.string(),
      issuer: z.string(),
      date: z.string(),
      expires: z.string(),
      url: z.string().optional(),
    })
  ),

  // Projects
  projects: z.array(
    z.object({
      name: z.string(),
      description: z.string(),
      url: z.string().optional(),
      stars: z.number().optional(),
      tech: z.array(z.string()),
      publication: z.string().optional(),
      featured: z.boolean().optional(),
    })
  ),

  // Speaking
  speaking: z.array(
    z.object({
      title: z.string(),
      event: z.string(),
      type: z.string(),
      date: z.string().optional(),
      link: z.string().optional(),
      featured: z.boolean().optional(),
    })
  ),

  // Publications
  publications: z.array(
    z.object({
      title: z.string(),
      publisher: z.string(),
      date: z.string(),
      url: z.string(),
    })
  ),

  // Now tiles
  now: z.array(
    z.object({
      id: z.string(),
      icon: z.string(),
      label: z.string(),
      title: z.string(),
      subtitle: z.string(),
      link: z.string().optional(),
    })
  ),

  // Quotes
  quotes: z.array(
    z.object({
      text: z.string(),
      author: z.string(),
      hidden: z.boolean().optional(),
    })
  ),

  // Footer jokes
  footerJokes: z.array(z.string()),
});

export type Profile = z.infer<typeof profileSchema>;

export const collections = {
  blog,
  notes,
};
