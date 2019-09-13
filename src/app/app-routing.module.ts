import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'programs', loadChildren: './pages/programs/programs.module#ProgramsPageModule' },
  { path: 'bmi-cal', loadChildren: './pages/bmi-cal/bmi-cal.module#BMICalPageModule' },
  { path: 'bmr-cal', loadChildren: './pages/bmr-cal/bmr-cal.module#BMRCalPageModule' },
  { path: 'health-blogs', loadChildren: './pages/health-blogs/health-blogs.module#HealthBlogsPageModule' },
  { path: 'health-tips', loadChildren: './pages/health-tips/health-tips.module#HealthTipsPageModule' },
  { path: 'contact-us', loadChildren: './pages/contact-us/contact-us.module#ContactUsPageModule' },
  // { path: 'result-page', loadChildren: './pages/result-page/result-page.module#ResultPagePageModule' },
  { path: 'playlist-page', loadChildren: './pages/playlist-page/playlist-page.module#PlaylistPagePageModule' },
  { path: 'core-blog', loadChildren: './pages/core-blog/core-blog.module#CoreBlogPageModule' },
  { path: 'strength-blog', loadChildren: './pages/strength-blog/strength-blog.module#StrengthBlogPageModule' },
  { path: 'muscle-blog', loadChildren: './pages/muscle-blog/muscle-blog.module#MuscleBlogPageModule' },
  { path: 'fatburn-blog', loadChildren: './pages/fatburn-blog/fatburn-blog.module#FatburnBlogPageModule' },
  { path: 'yoga-blog', loadChildren: './pages/yoga-blog/yoga-blog.module#YogaBlogPageModule' },
  // { path: 'modal', loadChildren: './bmr-modal/modal/modal.module#ModalPageModule' },
  // { path: 'modals', loadChildren: './bmi-modal/modals/modals.module#ModalsPageModule' },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
