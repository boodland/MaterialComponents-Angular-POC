import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectRoutingModule } from '../../subject-routing.module';
import { AppRoutingModule } from '../../../app-routing.module';

import { SubjectDetailsComponent } from './subject-details.component';

import { APP_BASE_HREF } from '@angular/common';

describe('SubjectDetailsComponent', () => {
  let component: SubjectDetailsComponent;
  let fixture: ComponentFixture<SubjectDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SubjectRoutingModule,
        AppRoutingModule
      ],
      declarations: [ SubjectDetailsComponent ],
      providers: [ { provide: APP_BASE_HREF, useValue: '/' } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
