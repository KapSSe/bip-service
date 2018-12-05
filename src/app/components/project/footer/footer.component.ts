import { Component, OnInit } from '@angular/core';
import { BasicComponent } from '../../base/basic/basic.component';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent extends BasicComponent implements OnInit {

  constructor(ds: DataService) { 
    super(ds);
  }

  ngOnInit() {
  }

}
