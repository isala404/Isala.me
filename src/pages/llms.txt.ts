import type { APIRoute } from 'astro';
import { generateLLMText } from '../lib/profile';

export const GET: APIRoute = () => {
  return new Response(generateLLMText(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
