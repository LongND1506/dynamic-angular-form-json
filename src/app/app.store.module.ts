import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';


@NgModule({
  imports: [
    StoreModule.forRoot({}),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
  ],
  exports: [
    StoreModule,
    environment.production ? [] : StoreDevtoolsModule,
  ]
})
export class AppStoreModule {}