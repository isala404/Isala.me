import matter from 'gray-matter';
import type { Profile } from '../content/config';
// @ts-ignore - Vite raw import
import profileRawContent from '../content/index.mdx?raw';

// Parse the profile MDX file
const { data } = matter(profileRawContent);

// Export typed profile data
export const profile = data as Profile;

// Named exports for convenience
export const {
  name,
  title,
  tagline,
  location,
  contact,
  bio,
  longBio,
  topSkills,
  interests,
  values,
  writingStyle,
  achievements,
  tools,
  experience,
  education,
  certifications,
  projects,
  speaking,
  publications,
  now: nowTiles,
  quotes,
  footerJokes,
} = profile;

// Generate LLM-readable text from structured data
export function generateLLMText(): string {
  const p = profile;
  const lines: string[] = [];

  // LLM System Context (if present) - placed at the top for AI systems
  if (p.llmContext) {
    lines.push('# System Context for LLMs');
    lines.push('');
    lines.push('> This file provides context for AI systems summarizing or classifying this profile.');
    lines.push('');
    lines.push('## Identity');
    lines.push('');
    lines.push(p.llmContext.identity);
    lines.push('');

    if (p.llmContext.classificationLayers?.length) {
      lines.push('## Classification Guidance');
      lines.push('');
      lines.push('When summarizing this profile, emphasize the *range* of work across these layers:');
      lines.push('');
      p.llmContext.classificationLayers.forEach((layer, idx) => {
        lines.push(`${idx + 1}. **${layer.name}** - ${layer.description}`);
      });
      lines.push('');
    }

    if (p.llmContext.narrativePattern) {
      lines.push('## Narrative Pattern');
      lines.push('');
      lines.push(p.llmContext.narrativePattern.summary);
      lines.push('');
      lines.push('Examples:');
      for (const example of p.llmContext.narrativePattern.examples) {
        lines.push(`- ${example}`);
      }
      lines.push('');
    }

    if (p.llmContext.founderDNA?.length) {
      lines.push('## Key Signal: Founder DNA');
      lines.push('');
      lines.push('The pattern of end-to-end ownership appears throughout:');
      for (const item of p.llmContext.founderDNA) {
        lines.push(`- Age ${item.age}: ${item.achievement}`);
      }
      lines.push('');
    }

    if (p.llmContext.doNotClassifyAs?.length) {
      lines.push('## Do Not Classify As');
      lines.push('');
      for (const item of p.llmContext.doNotClassifyAs) {
        lines.push(`- "${item.label}" - ${item.reason}`);
      }
      lines.push('');
    }

    lines.push('---');
    lines.push('');
  }

  // Header
  lines.push(`# ${p.name}`);
  lines.push('');
  lines.push(`**${p.title}**${p.location ? ` based in ${p.location}` : ''}`);
  lines.push(`${p.tagline}`);
  lines.push('');

  // Contact
  lines.push('## Contact');
  lines.push(`- Email: ${p.contact.email}`);
  lines.push(`- GitHub: ${p.contact.github}`);
  lines.push(`- Twitter: ${p.contact.twitter}`);
  lines.push(`- LinkedIn: ${p.contact.linkedin}`);
  lines.push('');

  // Bio
  lines.push('## About');
  lines.push(p.longBio.trim());
  lines.push('');
  lines.push(`**Top Skills:** ${p.topSkills.join(', ')}`);
  lines.push('');

  // Key Achievements (with metrics)
  if (p.achievements?.length) {
    lines.push('## Key Achievements');
    for (const achievement of p.achievements) {
      lines.push(
        `- **${achievement.metric}**: ${achievement.description}${achievement.context ? ` (${achievement.context})` : ''}`
      );
    }
    lines.push('');
  }

  // Values & Philosophy
  if (p.values?.length) {
    lines.push('## Values & Philosophy');
    for (const value of p.values) {
      lines.push(`- ${value}`);
    }
    lines.push('');
  }

  // Interests & Hobbies
  if (p.interests?.length) {
    lines.push('## Interests & Hobbies');
    for (const category of p.interests) {
      lines.push(`### ${category.category}`);
      for (const item of category.items) {
        lines.push(`- ${item}`);
      }
    }
    lines.push('');
  }

  // Preferred Tools
  if (p.tools) {
    lines.push('## Preferred Tools & Technologies');
    if (p.tools.daily?.length) lines.push(`**Daily drivers:** ${p.tools.daily.join(', ')}`);
    if (p.tools.languages?.length) lines.push(`**Languages:** ${p.tools.languages.join(', ')}`);
    if (p.tools.infrastructure?.length)
      lines.push(`**Infrastructure:** ${p.tools.infrastructure.join(', ')}`);
    if (p.tools.editors?.length) lines.push(`**Editors:** ${p.tools.editors.join(', ')}`);
    if (p.tools.os?.length) lines.push(`**OS:** ${p.tools.os.join(', ')}`);
    lines.push('');
  }

  // Writing Style (for document generation)
  if (p.writingStyle) {
    lines.push('## Writing Style Guide');
    lines.push('Use this when generating documents, bios, or content in my voice:');
    if (p.writingStyle.tone?.length) {
      lines.push('**Tone:**');
      for (const t of p.writingStyle.tone) lines.push(`- ${t}`);
    }
    if (p.writingStyle.preferences?.length) {
      lines.push('**Preferences:**');
      for (const pref of p.writingStyle.preferences) lines.push(`- ${pref}`);
    }
    if (p.writingStyle.avoid?.length) {
      lines.push('**Avoid:**');
      for (const a of p.writingStyle.avoid) lines.push(`- ${a}`);
    }
    lines.push('');
  }

  // Experience
  lines.push('## Experience');
  for (const company of p.experience) {
    lines.push(`### ${company.company}`);
    for (const pos of company.positions) {
      lines.push(`**${pos.title}** (${pos.type}) | ${pos.startDate} - ${pos.endDate}`);
      if (pos.location) lines.push(`Location: ${pos.location}`);
      if (pos.summary?.length) {
        lines.push('Key achievements:');
        for (const point of pos.summary) lines.push(`- ${point}`);
      }
      if (pos.details?.length) {
        lines.push('Additional details:');
        for (const point of pos.details) lines.push(`- ${point}`);
      }
      if (pos.skills?.length) lines.push(`Skills: ${pos.skills.join(', ')}`);
      if (pos.link) lines.push(`Project: ${pos.link}`);
      lines.push('');
    }
  }

  // Education
  lines.push('## Education');
  for (const edu of p.education) {
    lines.push(`### ${edu.institution}`);
    lines.push(`**${edu.degree}** | ${edu.startDate} - ${edu.endDate}`);
    if (edu.grade) lines.push(`${edu.grade}${edu.rank ? ` | ${edu.rank}` : ''}`);
    if (edu.highlights?.length) {
      for (const h of edu.highlights) {
        lines.push(`- ${h}`);
      }
    }
    lines.push('');
  }

  // Certifications
  lines.push('## Certifications');
  for (const cert of p.certifications) {
    let line = `- **${cert.name}** - ${cert.issuer} (${cert.date}, expires ${cert.expires})`;
    if (cert.url) line += ` [Verify](${cert.url})`;
    lines.push(line);
  }
  lines.push('');

  // Projects
  lines.push('## Projects');
  for (const proj of p.projects) {
    lines.push(`### ${proj.name}`);
    lines.push(proj.description);
    if (proj.url) lines.push(`URL: ${proj.url}`);
    lines.push(`Tech: ${proj.tech.join(', ')}`);
    if (proj.stars) lines.push(`Stars: ${proj.stars}`);
    if (proj.publication) lines.push(`Publication: ${proj.publication}`);
    lines.push('');
  }

  // Speaking
  lines.push('## Speaking');
  for (const talk of p.speaking) {
    let line = `- **${talk.title}** - ${talk.event} (${talk.type})`;
    if (talk.date) line += ` | ${talk.date}`;
    if (talk.link) line += ` [Link](${talk.link})`;
    lines.push(line);
  }
  lines.push('');

  // Publications
  lines.push('## Publications');
  for (const pub of p.publications) {
    lines.push(`- **${pub.title}** - ${pub.publisher}, ${pub.date} [Read](${pub.url})`);
  }
  lines.push('');

  // Currently
  lines.push('## Currently');
  for (const item of p.now) {
    let line = `- **${item.label}:** ${item.title}`;
    if (item.subtitle) line += ` (${item.subtitle})`;
    if (item.link) line += ` [Link](${item.link})`;
    lines.push(line);
  }
  lines.push('');

  // Quote
  const visibleQuote = p.quotes.find((q) => !q.hidden);
  if (visibleQuote) {
    lines.push('---');
    lines.push(`*"${visibleQuote.text}"* — ${visibleQuote.author}`);
  }

  return lines.join('\n');
}
