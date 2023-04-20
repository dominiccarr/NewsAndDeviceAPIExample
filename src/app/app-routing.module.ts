import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
 
const routes: Routes = [
  {
    path: '',
    redirectTo: 'news',
    pathMatch: 'full',
  },
  {
    path: 'news',
    loadChildren: () =>
      import('./pages/news/news.module').then((m) => m.NewsModule),
  },
  {
    path: 'news/:id',
    loadChildren: () =>
      import('./pages/news-story/news-story.module').then(
        (m) => m.NewsStoryModule
      ),
  },
  {
    path: 'device',
    loadChildren: () => import('./device/device.module').then( m => m.DeviceModule)
  },
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}