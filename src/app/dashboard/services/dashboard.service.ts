import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { DashboardItem } from '../models/dashboard-item';

@Injectable()
export class DashboardService {

  dashboard: DashboardItem[] = [
    {
      subjectId: 1, title: 'History', assessmentDate: new Date(2018, 4),
      numOfSeats: 680, numOfTutors: 345, numOfTests: 390, image: 'history'
    },
    {
      subjectId: 2, title: 'Bakery', assessmentDate: new Date(2018, 0),
      numOfSeats: 80, numOfTutors: 45, numOfTests: 250, image: 'bakery'
    },
    {
      subjectId: 3, title: 'Law', assessmentDate: new Date(2017, 9),
      numOfSeats: 320, numOfTutors: 645, numOfTests: 850, image: 'law'
    },
    {
      subjectId: 4, title: 'Science', assessmentDate: new Date(2018, 10),
      numOfSeats: 430, numOfTutors: 35, numOfTests: 177, image: 'science'
    },
    {
      subjectId: 5, title: 'Veggie Cuisine', assessmentDate: new Date(2018, 2),
      numOfSeats: 75, numOfTutors: 54, numOfTests: 285, image: 'vegetables'
    },
    {
      subjectId: 6, title: 'Geography', assessmentDate: new Date(2018, 6),
      numOfSeats: 430, numOfTutors: 35, numOfTests: 177, image: 'geography'
    },
    {
      subjectId: 7, title: 'Algebra', assessmentDate: new Date(2018, 3),
      numOfSeats: 930, numOfTutors: 155, numOfTests: 763, image: 'algebra'
    },
    {
      subjectId: 8, title: 'Music', assessmentDate: new Date(2018, 8),
      numOfSeats: 30, numOfTutors: 15, numOfTests: 73, image: 'music'
    }
  ];

  constructor() { }

  getDashboard(): Observable<DashboardItem[]> {
    return of(this.dashboard);
  }
}
