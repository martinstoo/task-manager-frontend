import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { AppRoles } from '../app.roles';
import { appCanActivate } from './guard/app.auth.guard';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {
    path: '', component: LoginpageComponent
  },
  {
    path: 'boards', component: BoardComponent
  },
  {
    path: 'boards', component: BoardComponent, pathMatch: 'full', canActivate: [appCanActivate], data: {roles: [AppRoles.Admin]}
  },
  {
    path: 'boards/:id', component: BoardComponent, pathMatch: 'full', canActivate: [appCanActivate], data: {roles: [AppRoles.Admin]}
  },
  {
    path: 'login', component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }