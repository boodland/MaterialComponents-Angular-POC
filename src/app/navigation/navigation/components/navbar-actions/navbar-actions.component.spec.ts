import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialModule } from '../../shared/material.module';

import { NavbarActionsComponent } from './navbar-actions.component';

describe('NavbarActionsComponent', () => {
  let component: NavbarActionsComponent;
  let fixture: ComponentFixture<NavbarActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarActionsComponent ],
      imports: [ MaterialModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
