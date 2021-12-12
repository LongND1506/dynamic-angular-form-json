import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { HomeEffect } from './home.effects';
import { reducer } from './home.reducer';
@NgModule({
  imports: [
    StoreModule.forFeature('home', reducer),
    EffectsModule.forFeature([HomeEffect]),
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ]
})
export class HomeStoreModule {}
