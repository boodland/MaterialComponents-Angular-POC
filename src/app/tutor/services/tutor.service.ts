import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ITutorItem } from '../models/tutor-item.interface';

@Injectable()
export class TutorService {

  WEB_API_ADRESS = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) { }

  getTutors(): Observable<ITutorItem[]> {
    return this.http.get(this.WEB_API_ADRESS, {
      params: new HttpParams().set('results', '30'),
    })
      .map(res => res['results']
        .map(randomUser => this.convertToTutorItem(randomUser)));
  }

  convertToTutorItem(randomUser): ITutorItem {
    return {
      fullName: `${randomUser.name.first} ${randomUser.name.last}`,
      thumbnail: randomUser.picture.thumbnail,
      rating: Math.floor(Math.random() * 5) + 1
    };
  }

}
