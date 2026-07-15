import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

/**
 * Cliente Supabase singleton.
 * Se crea solo si las variables de entorno están presentes; de lo contrario es null,
 * para no romper el build cuando las credenciales aún no están configuradas.
 */
let _client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  if (!supabaseUrl || !supabasePublishableKey) {
    return null;
  }
  if (!_client) {
    _client = createClient(supabaseUrl, supabasePublishableKey);
  }
  return _client;
}

export function isSupabaseConfigured(): boolean {
  return Boolean(supabaseUrl && supabasePublishableKey);
}