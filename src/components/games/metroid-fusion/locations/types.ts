export type LocationId = string;

export interface Location {
  id: LocationId;
  sector: Sector;
  depends?: LocationId;
  name: string;
  status?: 'important' | 'urgent' | 'hard' | 'careful';
  x: number;
  y: number;
  avoid?: number[];
}
export type Locations<V extends Location> = Record<string, V>;

export const sectors = ['main-0', 'srx-1', 'tro-2', 'pyr-3', 'aqa-4', 'arc-5', 'noc-6'] as const;
export type Sector = typeof sectors[number];
