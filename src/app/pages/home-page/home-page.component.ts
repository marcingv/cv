import { Component } from '@angular/core';
import { CvDataApiService } from '../../data-access/api/services';
import { Observable } from 'rxjs';
import { CvData } from '../../domain/models/cv-data';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  public cvData$: Observable<CvData> = this.cvDataApi.fetchData();

  public constructor(private cvDataApi: CvDataApiService) {}
}
