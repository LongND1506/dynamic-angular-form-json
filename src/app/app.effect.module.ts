import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    EffectsModule.forRoot([]),
  ],
  exports: [
    EffectsModule,
  ]
})
export class AppEffectsModule {}
