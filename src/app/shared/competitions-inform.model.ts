import { LaureatInfo } from './laureatInfo.model';

export class CompetitionsInform {
  constructor(
    public titleName: string,
    public video: string,
    public laureatInfo: LaureatInfo[]
  ) {}
}
