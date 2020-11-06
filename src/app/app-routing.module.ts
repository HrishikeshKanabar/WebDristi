import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    //redirectTo: 'home',  
    // previously was home we changed to our app log in  page
    redirectTo: 'login-page', 
    pathMatch: 'full'
  },
  {
    path: 'login-page',
    loadChildren: () => import('./login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: 'register-page',
    loadChildren: () => import('./register-page/register-page.module').then( m => m.RegisterPagePageModule)
  },
  {
    path: 'signin-page',
    loadChildren: () => import('./signin-page/signin-page.module').then( m => m.SigninPagePageModule)
  },
  {
    path: 'forgotpassword-page',
    loadChildren: () => import('./forgotpassword-page/forgotpassword-page.module').then( m => m.ForgotpasswordPagePageModule)
  },  {
    path: 'verifyemail-page',
    loadChildren: () => import('./verifyemail-page/verifyemail-page.module').then( m => m.VerifyemailPagePageModule)
  },
  {
    path: 'dashboard-page',
    loadChildren: () => import('./dashboard-page/dashboard-page.module').then( m => m.DashboardPagePageModule)
  },
  {
    path: 'create-room',
    loadChildren: () => import('./create-room/create-room.module').then( m => m.CreateRoomPageModule)
  },
  {
    path: 'join-room',
    loadChildren: () => import('./join-room/join-room.module').then( m => m.JoinRoomPageModule)
  },
  {
    path: 'dashboard-cards',
    loadChildren: () => import('./dashboard-cards/dashboard-cards.module').then( m => m.DashboardCardsPageModule)
  },
  {
    path: 'meeting-page',
    loadChildren: () => import('./meeting-page/meeting-page.module').then( m => m.MeetingPagePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
