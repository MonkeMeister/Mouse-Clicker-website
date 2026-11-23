/**
 * OpenNext configuration for the Cloudflare Workers adapter.
 *
 * MouseLab is a fully prerendered site: every page is static, and nothing is
 * revalidated at runtime. The adapter's own note on this cache is that it is
 * for apps that want to serve prerendered data only, which is exactly this
 * one — so the site needs no R2 bucket, no Queue and no Tag Cache.
 */
import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
});
