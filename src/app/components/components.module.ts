import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { LandingPhoneComponent } from './landing-phone/landing-phone.component';
import { AllcontactsComponent } from './allcontacts/allcontacts.component';
import { ContentlandComponent } from './contentland/contentland.component';
import { FormsModule } from '@angular/forms';
import { AddcontactsComponent } from './addcontacts/addcontacts.component';
import { ViewcontactsComponent } from './viewcontacts/viewcontacts.component';
import { EditcontactsComponent } from './editcontacts/editcontacts.component';
@NgModule({
  declarations: [
    LandingPhoneComponent,
    AllcontactsComponent,
    ContentlandComponent,
    AddcontactsComponent,
    ViewcontactsComponent,
    EditcontactsComponent
  ],
  imports: [CommonModule, ComponentsRoutingModule, FormsModule],
})
export class ComponentsModule {}
