import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMaterialModule } from '../../../app-material.module';

import { LoaderProgressBarComponent } from './loader-progress-bar.component';
import { LoaderService } from '../../services/loader.service';

describe('LoaderProgressBarComponent', () => {
  let component: LoaderProgressBarComponent;
  let fixture: ComponentFixture<LoaderProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppMaterialModule],
      declarations: [LoaderProgressBarComponent],
      providers: [LoaderService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
