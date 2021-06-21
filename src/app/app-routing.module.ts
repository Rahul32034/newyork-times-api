import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtComponent } from './art/art.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { PostlistComponent } from './postlist/postlist.component';
import { ScienceComponent } from './science/science.component';
import { UsComponent } from './us/us.component';
import { WorldComponent } from './world/world.component';

const routes: Routes = [
  {
    path:"",
    component:PostlistComponent
  },
  {
    path:"blogpost/:id",
    component:PostdetailsComponent
  },
  {
    path:"world",
    component:WorldComponent
  },
  {
    path:"art",
    component:ArtComponent
  },
  {
    path:"science",
    component:ScienceComponent
  },
  {
    path:"us",
    component:UsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
