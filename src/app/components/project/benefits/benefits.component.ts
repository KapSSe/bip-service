import { Component, OnInit } from '@angular/core';
import { BasicComponent } from '../../base/basic/basic.component';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent extends BasicComponent implements OnInit {

  constructor(ds: DataService) { 
    super(ds);
  }

  ngOnInit() {
    
  }

}
