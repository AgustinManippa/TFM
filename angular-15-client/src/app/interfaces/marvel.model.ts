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

