import { checkDatabase } from "@/lib/db";

export default async function Home() {
  const dbStatus = await checkDatabase();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        Plataforma Docente IA - En construcción
      </h1>
      <p className="text-sm md:text-base text-gray-600 max-w-md text-center">
        Generador curricular CNEB y simulador de ascenso docente.
      </p>

      <div className="mt-4 w-full max-w-sm border rounded-lg divide-y">
        <StatusRow label="Aplicación (Vercel)" ok />
        <StatusRow label="Base de datos (Supabase)" ok={dbStatus.ok} detail={dbStatus.message} />
      </div>

      <p className="text-xs text-gray-400">
        Pipeline de deploy funcionando: código → build → producción
      </p>
    </main>
  );
}

function StatusRow({
  label,
  ok,
  detail,
}: {
  label: string;
  ok: boolean | null;
  detail?: string;
}) {
  const dot =
    ok === null
      ? "bg-gray-400"
      : ok
      ? "bg-emerald-500"
      : "bg-red-500";
  return (
    <div className="flex items-center justify-between p-3">
      <span className="text-sm">{label}</span>
      <div className="flex items-center gap-2">
 {ok === false && detail ? (
        <span className="text-xs text-red-600 max-w-[180px] truncate text-right" title={detail}>
            {detail}
          </span>
        ) : null}
        <span className={`inline-block h-3 w-3 rounded-full ${dot}`} />
      </div>
    </div>
  );
}