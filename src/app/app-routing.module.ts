import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckCodeComponent } from './pages/check-code/check-code.component';
import { GenerateCodeComponent } from './pages/generate-code/generate-code.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'generate-code',
    component:GenerateCodeComponent
  },
  {
    path:'check-code',
    component:CheckCodeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
