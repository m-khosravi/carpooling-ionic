import { Injectable } from '@angular/core';
import { AutoCompleteService } from 'ionic4-auto-complete';
import { NsSearchItem, NeshanService, NsLocation, NsSearchResult } from 'ngx-neshan';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService implements AutoCompleteService {

  constructor(private http: HttpClient, private neshan: NeshanService) { }
  private search: NsSearchItem[] = [];
  labelAttribute?: string = 'title';
  formValueAttribute?: any = 'location';

  getResults(keyword: string): Observable<NsSearchItem[]> {
    let observable: Observable<NsSearchResult>;

    if (keyword.length < 3)
      return of([]);

    observable = this.neshan.search(keyword, new NsLocation());

    return observable.pipe(
      map(
        (result) => result.items
      )
    );
  }

  getItemLabel?(item: NsSearchItem) {
    return item.title;
  }
}
