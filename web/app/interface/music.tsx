export interface Music {
  id: number;
  song: string;
  artist: string;
}

export enum MusicType {
  BandList = "bandList",
  SingleList = "singleList",
  EmptyList = "emptyList",
}

export interface MusicAction {
  id: number;
  music: Music;
  type: MusicType;
}
