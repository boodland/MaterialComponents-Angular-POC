import { Injectable } from '@angular/core';

@Injectable()
export class SubjectSummaryService {

  subjectsSummary = [
    {text: 'One', color: 'lightblue'},
    {text: 'Two', color: 'lightgreen'},
    {text: 'Three', color: 'lightpink'},
    {text: 'Four', color: '#DDBDF1' },
    {text: 'Five', color: 'red'},
    {text: 'Six', color: 'orange' },
    {text: 'Seven', color: 'lightblue'},
    {text: 'Eight', color: 'lightgreen'},
  ];

  constructor() { }

  getSubjectsSummary(): any[] {
    return this.subjectsSummary;
  }
}
