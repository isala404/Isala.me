import fs from 'node:fs';
import path from 'node:path';

const GLOBAL_CSS_PATH = path.join(process.cwd(), 'src/styles/global.css');

interface ThemeColors {
  bg: string;
  card: string;
  text: string;
  textSecondary: string;
  accent: string;
  badge: string;
  highlight: string;
}

function parseRootVariables(css: string): Map<string, string> {
  const variables = new Map<string, string>();
  const rootMatch = css.match(/:root\s*\{([^}]+)\}/);
  if (!rootMatch) return variables;

  const rootBlock = rootMatch[1];
  const varRegex = /--([\w-]+)\s*:\s*([^;]+);/g;
  let match;

  while ((match = varRegex.exec(rootBlock)) !== null) {
    const [, name, value] = match;
    variables.set(name, value.trim());
  }

  return variables;
}

export function getThemeColors(): ThemeColors {
  const css = fs.readFileSync(GLOBAL_CSS_PATH, 'utf-8');
  const vars = parseRootVariables(css);

  return {
    bg: vars.get('theme-bg') ?? '#ffffff',
    card: vars.get('theme-card') ?? '#ffffff',
    text: vars.get('theme-text') ?? '#000000',
    textSecondary: vars.get('theme-text-secondary') ?? '#666666',
    accent: vars.get('theme-accent') ?? '#000000',
    badge: vars.get('theme-badge') ?? '#eeeeee',
    highlight: vars.get('theme-highlight') ?? '#ffff00',
  };
}

export function darkenHex(hex: string, factor: number): string {
  const clean = hex.replace('#', '');
  const r = Math.round(parseInt(clean.slice(0, 2), 16) * factor);
  const g = Math.round(parseInt(clean.slice(2, 4), 16) * factor);
  const b = Math.round(parseInt(clean.slice(4, 6), 16) * factor);
  return [r, g, b].map((c) => c.toString(16).padStart(2, '0')).join('');
}

export function urlEncodeColor(hex: string): string {
  return hex.replace('#', '%23');
}
