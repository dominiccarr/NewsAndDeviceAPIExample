import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviesDetailsPageRoutingModule } from './news-story-routing.module';

import { NewsStoryPage } from './news-story.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoviesDetailsPageRoutingModule
  ],
  declarations: [NewsStoryPage]
})
export class NewsStoryModule {}
