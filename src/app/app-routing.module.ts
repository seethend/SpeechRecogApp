import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoogleApiComponent } from './google-api/google-api.component';


const routes: Routes = [

  {path: '', pathMatch: 'full', redirectTo: 'g'},
  {path: 'g', component: GoogleApiComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
