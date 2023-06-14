
export interface LaureatInfo {
    name: string;
    ageCategories: string;
    image: string;
    description: string;
    instrument: string;
    place: string;
  }
export interface CompetitionsInform {
  titleName: string;
  video: string;
  laureatInfo: LaureatInfo[];
}
