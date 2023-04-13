// location: pages/api/testqp.ts
import type { APIContext } from 'astro';
import { getRuntime } from "@astrojs/cloudflare/runtime";
import type { KVNamespace } from '@cloudflare/workers-types';

export async function get({request}: APIContext) {

  const runtime = getRuntime(request)
  const { MY_KV } = (runtime.env as { MY_KV: KVNamespace });
  const value = await MY_KV.get('HELLO')
  return new Response(JSON.stringify({ value: value }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
