import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounceTime, distinctUntilChanged, map, scan, tap, toArray } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  searchTerm$ = new Subject<string>();
  result$: Observable<any>;
  listKeywordHistory$: Observable<string[]>;
  ishowHistory = false;

  constructor(private _homeService: HomeService) {}

  ngOnInit() {
    // eslint-disable-next-line no-underscore-dangle
    this.result$ = this._homeService.country$;
    // eslint-disable-next-line no-underscore-dangle
    this.listKeywordHistory$ = this._homeService.historySearchKeyword$.pipe(
      scan((acc, value) => [...acc, value], []),
      map(value => {
        console.log(value);
        return value;
      })
    );

    this.searchTerm$
      .asObservable()
      .pipe(distinctUntilChanged(), debounceTime(500))
      .subscribe((value) => {
        // eslint-disable-next-line no-underscore-dangle
        this._homeService.dispacthGetCountry(value);
        // eslint-disable-next-line no-underscore-dangle
        this._homeService.setHistorySearchKeyword(value);
      });
  }

  onSearch(event: Event) {
    this.searchTerm$.next((event.target as HTMLInputElement).value);
  }

  showHistorySearch(): void {
    this.ishowHistory = !this.ishowHistory;
  }
}
