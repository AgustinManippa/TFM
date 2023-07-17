export interface GetCharacterResult {
  offset: number; // Desplazamiento de resultados
  limit: number; // Límite de resultados por página
  total: number; // Total de resultados disponibles
  count: number; // Cantidad de resultados devueltos en esta respuesta
  results: CharacterResult[]; // Lista de resultados de personajes
}

export interface CharacterResult {
  id: number; // ID del personaje
  name: string; // Nombre del personaje
  description: string; // Descripción del personaje
  thumbnail: Image; // Miniatura del personaje
}

export interface Image {
  path: string; // Ruta de la imagen
  extension: string; // Extensión de la imagen
}

export interface GetComicsResult {
  offset: number; // Desplazamiento de resultados
  limit: number; // Límite de resultados por página
  total: number; // Total de resultados disponibles
  count: number; // Cantidad de resultados devueltos en esta respuesta
  results: ComicsResult[]; // Lista de resultados de cómics
}

export interface ComicsResult {
  title: string; // Título del cómic
  description: string; // Descripción del cómic
  isbn: string; // ISBN del cómic
  format: string; // Formato del cómic
  pageCount: number; // Número de páginas del cómic
}

export interface GetSeriesResult {
  offset: number; // Desplazamiento de resultados
  limit: number; // Límite de resultados por página
  total: number; // Total de resultados disponibles
  count: number; // Cantidad de resultados devueltos en esta respuesta
  results: SeriesResult[]; // Lista de resultados de series
}

export interface SeriesResult {
  title: string; // Título de la serie
  description: string; // Descripción de la serie
  thumbnail: Image; // Miniatura de la serie
}

//Esta es la interfaz en comun para la busqueda por Id de personajes 
//en los comics,events,series y stories

export interface GetExtrasResult {
  offset: number; // Desplazamiento de resultados
  limit: number; // Límite de resultados por página
  total: number; // Total de resultados disponibles
  count: number; // Cantidad de resultados devueltos en esta respuesta
  results: ExtrasResult[]; // Lista de resultados extras
}

export interface ExtrasResult {
  title: string; // Título extra
  description: string; // Descripción extra
}