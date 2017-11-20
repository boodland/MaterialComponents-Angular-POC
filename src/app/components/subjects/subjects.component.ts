import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  tiles = [
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

  ngOnInit() {
  }

}
