import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FirstComponent } from './first/first.component';


const routes: Routes = [
  { path: '', redirectTo:'main', pathMatch:'full'},
  {path:'main', component:MainComponent},
  { path: 'user/:id', component: FirstComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
