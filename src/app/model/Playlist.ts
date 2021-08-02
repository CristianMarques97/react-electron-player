export default interface Playlist {
  name: string;
  description: string;
  musics: Music[];
}

export interface Music {
  file: string;
  name: string;
  duration: string;
  author: string;
  album: string;
  year: string;
  thumbnail: string;
}
