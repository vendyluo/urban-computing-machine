// trains.json.ts


import type { APIRoute } from "astro";

export const get: APIRoute = () => {
  return {

    body: JSON.stringify({ param: "Trains" })
  };
};