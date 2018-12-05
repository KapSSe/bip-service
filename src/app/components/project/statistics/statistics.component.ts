import { Component, OnInit } from '@angular/core';
import { BasicComponent } from '../../base/basic/basic.component';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent extends BasicComponent implements OnInit {

  constructor(ds: DataService) { 
    super(ds);
  }

  ngOnInit() {
  }

}
