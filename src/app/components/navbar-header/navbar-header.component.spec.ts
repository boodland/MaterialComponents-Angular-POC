import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialModule } from '../../shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarHeaderComponent } from './navbar-header.component';

describe('NavbarComponent', () => {
  let component: NavbarHeaderComponent;
  let fixture: ComponentFixture<NavbarHeaderComponent>;
  const title: String = 'Subject Hub';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarHeaderComponent ],
      imports: [
        MaterialModule,
        BrowserAnimationsModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title ${title}`, async(() => {
    fixture = TestBed.createComponent(NavbarHeaderComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.title).toEqual(title);
  }));

  it('should render title in a navbar-title class', async(() => {
    fixture = TestBed.createComponent(NavbarHeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.navbar-title').textContent).toContain(title);
  }));
});
