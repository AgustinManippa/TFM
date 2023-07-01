export interface GetCharacterResult {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: CharacterResult[];
}

export interface CharacterResult {
  id: number;
  name: string;
  description: string;
  thumbnail: Image;
}

export interface Image {
  path: string;
  extension: string;
}

export interface GetComicsResult {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: ComicsResult[];
}

export interface ComicsResult {
  title: string;
  description: string;
  isbn: string;
  format: string;
  pageCount: number;
}

export interface GetSeriesResult {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: SeriesResult[];
}

export interface SeriesResult {
  title: string;
  description: string;
  thumbnail: Image;
}

export interface GetExtrasResult {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: ExtrasResult[];
}

export interface ExtrasResult {
  title: string;
  description: string;
}