import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componets/page/home/home.component';
import { ContentComponent } from './componets/page/content/content/content.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'content',
    component:ContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
