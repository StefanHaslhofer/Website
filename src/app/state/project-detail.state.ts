import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {PatchProjectDetail} from './project-detail.action';
import produce from 'immer';

export interface ProjectDetailStateModel {
  contentFile: string;
}

@State<ProjectDetailStateModel>({
  name: 'projectDetail',
  defaults: {
    contentFile: ''
  }
})
@Injectable()
export class ProjectDetailState {
  @Selector()
  static contentFile(state: ProjectDetailStateModel) {
    return state.contentFile;
  }


  @Action(PatchProjectDetail)
  patchProjectDetail(ctx: StateContext<ProjectDetailStateModel>, action: PatchProjectDetail) {
    ctx.setState(
      produce(ctx.getState(), (draft) => {
        draft.contentFile = action.projectDetail.contentFile;
      })
    );
  }
}
