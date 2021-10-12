import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { JsonFormComponent } from '../components/json-form/json-form.component';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule,
    NgxJsonViewerModule,
  ],
  declarations: [HomePage, JsonFormComponent],
})
export class HomePageModule {}
