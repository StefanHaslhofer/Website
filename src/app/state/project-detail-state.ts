import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';

export class ProjectDetailStateModel {
  contentFile: string;
}

@State<ProjectDetailStateModel>({
  name: 'projectDetail',
  defaults: {
    contentFile: ''
  }
})
@Injectable()
export class ProjectDetailState {}
