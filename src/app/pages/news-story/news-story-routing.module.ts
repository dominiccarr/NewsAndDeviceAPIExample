import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsStoryPage } from './news-story.page';

const routes: Routes = [
  {
    path: '',
    component: NewsStoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesDetailsPageRoutingModule {}
