import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { SubjectItem } from '../models/subject-item';

@Injectable()
export class SubjectService {

  subjects: SubjectItem[] = [
    {
      subjectId: 1, title: 'History', assessmentDate: new Date(2018, 4),
      numOfSeats: 680, type: 'A', color: 'red', image: 'history'
    },
    {
      subjectId: 2, title: 'Bakery', assessmentDate: new Date(2018, 0),
      numOfSeats: 80, type: 'B', color: 'blue', image: 'bakery'
    },
    {
      subjectId: 3, title: 'Law', assessmentDate: new Date(2017, 9),
      numOfSeats: 320, type: 'C', color: 'gold', image: 'law'
    },
    {
      subjectId: 4, title: 'Science', assessmentDate: new Date(2018, 10),
      numOfSeats: 430, type: 'D', color: 'green', image: 'science'
    },
    {
      subjectId: 5, title: 'Veggie Cuisine', assessmentDate: new Date(2018, 2),
      numOfSeats: 75, type: 'B', color: 'blue', image: 'vegetables'
    },
    {
      subjectId: 6, title: 'Geography', assessmentDate: new Date(2018, 6),
      numOfSeats: 430, type: 'A', color: 'red', image: 'geography'
    },
    {
      subjectId: 7, title: 'Algebra', assessmentDate: new Date(2018, 3),
      numOfSeats: 930, type: 'D', color: 'green', image: 'algebra'
    },
    {
      subjectId: 8, title: 'Music', assessmentDate: new Date(2018, 8),
      numOfSeats: 30, type: 'A', color: 'red', image: 'music'
    }
  ];

  constructor() { }

  getSubjects(): Observable<SubjectItem[]> {
    return of(this.subjects);
  }

  getSubject(subjectId: number) {
    return of(this.subjects.find(subject => subject.subjectId === subjectId));
  }

}
