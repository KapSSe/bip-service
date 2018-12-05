import { Component, OnInit } from '@angular/core';
import { BasicComponent } from '../../base/basic/basic.component';
import { DataService } from '../../../services/data.service';
import { staggered } from '../../../animations/animations';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    staggered
  ]
})
export class AboutComponent extends BasicComponent implements OnInit {

  public startStagger = false;

  constructor(ds: DataService) { 
    super(ds)
  }

  onIntersection(e){
    if(!this.startStagger){
      return this.startStagger = e.visible;
    }
  }

  ngOnInit() {
    
  }

}
