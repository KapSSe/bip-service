import { Component, OnInit } from '@angular/core';
import { BasicComponent } from '../../base/basic/basic.component';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent extends BasicComponent implements OnInit {

  constructor(ds: DataService) { 
    super(ds);
  }

  ngOnInit() {
  }

}
