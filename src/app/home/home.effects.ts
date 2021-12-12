import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { homeAction } from './home.actions';
import { HomeService } from './home.service';

@Injectable()
export class HomeEffect {
  getListCountry$ = createEffect(() =>
    // eslint-disable-next-line no-underscore-dangle
    this._action$.pipe(
      ofType(homeAction.getCountry),
      switchMap((action) =>
        // eslint-disable-next-line no-underscore-dangle
        this._homeService.getCountryAPI(action.keyword).pipe(
          map((res) =>
            !res?.error
              ? homeAction.getCountrySuccess(res?.data)
              : homeAction.getCountrySuccess(null)
          ),
          catchError((_) => of(homeAction.getCountryFailed()))
        )
      )
    )
  );

  constructor(private _action$: Actions, private _homeService: HomeService) {}
}
