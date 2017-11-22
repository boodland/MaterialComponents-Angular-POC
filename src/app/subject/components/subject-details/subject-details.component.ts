import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.scss']
})
export class SubjectDetailsComponent implements OnInit {

  selectedSubject: number;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.selectedSubject = +this.route.snapshot.paramMap.get('id');
  }

}
