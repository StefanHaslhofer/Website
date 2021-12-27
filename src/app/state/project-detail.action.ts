import {ProjectDetailStateModel} from './project-detail-state';

export class PatchProjectDetail {
  static readonly type = '[ProjectDetail] Patch Project Detail';
  constructor(public projectDetailModel: ProjectDetailStateModel) {}
}
