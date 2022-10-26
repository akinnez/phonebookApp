import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcontactsComponent } from './addcontacts/addcontacts.component';
import { AllcontactsComponent } from './allcontacts/allcontacts.component';
import { ContentlandComponent } from './contentland/contentland.component';
import { EditcontactsComponent } from './editcontacts/editcontacts.component';
import { LandingPhoneComponent } from './landing-phone/landing-phone.component';
import { ViewcontactsComponent } from './viewcontacts/viewcontacts.component';

const routes: Routes = [
  {path: "", component:LandingPhoneComponent},
  {path:"contacts", component:ContentlandComponent, children:[
    {path:"", component:AllcontactsComponent},
    {path:"addcontact", component:AddcontactsComponent},
    {path:":name",component:ViewcontactsComponent},
    {path:"edit/:id",component:EditcontactsComponent} 
  ]},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
