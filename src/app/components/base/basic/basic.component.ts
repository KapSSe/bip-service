import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicComponent implements OnInit {

  public data: Observable<any>;

  constructor(ds: DataService){
    this.data = ds.data;
  } 

  ngOnInit() {
    
  }

  trackByFn(index, item){
    return index;
  }

}
