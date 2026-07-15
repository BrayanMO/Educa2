// Tipos base de la plataforma Educa2.
// Se ampliarán conforme se implementen los módulos curriculares y de simulador.

export type NivelEducativo = "Inicial" | "Primaria" | "Secundaria";

export type TipoDocumento =
  | "planificacion_anual"
  | "unidad"
  | "sesion"
  | "rubrica"
  | "ficha"
  | "examen";

export interface DocumentoCurricular {
  id: string;
  nivel: NivelEducativo;
  grado: string;
  area: string;
  tipo: TipoDocumento;
  titulo: string;
  contenido: string;
  createdAt: string;
}