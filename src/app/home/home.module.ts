import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { JsonFormComponent } from '../components/json-form/json-form.component';
import { HomeService } from './home.service';
import { HomeStoreModule } from './home-store.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule,
    HomeStoreModule
  ],
  declarations: [HomePage, JsonFormComponent],
  providers: [HomeService]
})
export class HomePageModule {}
