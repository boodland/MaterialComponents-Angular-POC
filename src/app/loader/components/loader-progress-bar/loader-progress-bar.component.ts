import { Component } from '@angular/core';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loader-progress-bar',
  templateUrl: './loader-progress-bar.component.html',
  styleUrls: ['./loader-progress-bar.component.scss']
})
export class LoaderProgressBarComponent {

  show = false;

  constructor(private loaderService: LoaderService) {
    loaderService
    .onLoadingChanged
    .subscribe(isLoading => this.show = isLoading);
  }

}
