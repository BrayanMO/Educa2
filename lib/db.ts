import { getSupabase, isSupabaseConfigured } from "./supabase";

export type DatabaseStatus = {
  ok: boolean | null;
  message: string;
};

/**
 * Verifica la conexión a la base de datos Supabase.
 * Se ejecuta en el servidor (Server Component) para no exponer claves.
 * Tolerante a configuración ausente para no romper el build.
 */
export async function checkDatabase(): Promise<DatabaseStatus> {
  if (!isSupabaseConfigured()) {
    return {
      ok: null,
      message: "Credenciales pendientes de configurar",
    };
  }

  try {
    const client = getSupabase();
    if (!client) {
      return { ok: false, message: "Cliente no inicializado" };
    }

    const { error } = await client
      .from("health_check")
      .select("*")
      .limit(1)
      .maybeSingle();

    if (error) {
      // Si la tabla no existe pero la conexión responde, consideramos conexión OK.
      const code = (error as { code?: string }).code;
      if (code === "42P01" || code === "PGRST205") {
        return {
          ok: true,
          message: "Conexión OK (tabla pendiente de crear)",
        };
      }
      return { ok: false, message: error.message };
    }

    return { ok: true, message: "Conexión OK" };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Error desconocido";
    return { ok: false, message };
  }
}