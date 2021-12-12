import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { EMPTY, Observable, ReplaySubject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { homeAction } from './home.actions';
import * as fromHome from './home.reducer';

@Injectable({ providedIn: 'root' })
export class HomeService {

  private _historySearchKeyword$ = new ReplaySubject<string>(10);

  constructor(
      private _httpRequest$: HttpClient,
      private _store: Store
  ) {}

  public setHistorySearchKeyword(value: string): void {
    // eslint-disable-next-line no-underscore-dangle
    this._historySearchKeyword$.next(value);
  }

  get historySearchKeyword$(): Observable<string> {
      // eslint-disable-next-line no-underscore-dangle
      return this._historySearchKeyword$.asObservable();
  }

  get country$(): Observable<any[]> {
    // eslint-disable-next-line no-underscore-dangle
    return this._store.select((state: any) => state.home.result);
  }

  public dispacthGetCountry(keyword: string): void {
    // eslint-disable-next-line no-underscore-dangle
    this._store.dispatch(homeAction.getCountry({ keyword }));
  }

  public getCountryAPI(keyword: string): Observable<any> {
      const url = 'https://countriesnow.space/api/v0.1/countries/population/cities';
      // eslint-disable-next-line no-underscore-dangle
      return this._httpRequest$.post(url, {
          city: keyword
      }).pipe(catchError(err => EMPTY));
  }
}
