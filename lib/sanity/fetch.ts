import { client } from "./client";
import { isSanityConfigured } from "./env";

export async function safeFetch<T>(query: string, fallback: T): Promise<T> {
  if (!isSanityConfigured) return fallback;
  try {
    const result = await client.fetch<T>(query, {}, { cache: "no-store" });
    if (result === null || result === undefined) return fallback;
    if (Array.isArray(result) && result.length === 0) return fallback;
    return result;
  } catch (err) {
    console.error("[sanity] query failed, using static fallback", err);
    return fallback;
  }
}
