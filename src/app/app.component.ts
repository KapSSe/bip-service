
import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { Title } from '@angular/platform-browser';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public data: Observable<any>;

  constructor(private titleService: Title, ds: DataService){
    this.data = ds.data;
    titleService.setTitle(environment.projectName);
    this.data.subscribe((data) => {
    })
  }
}
