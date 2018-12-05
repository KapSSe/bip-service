import { Component, OnInit } from '@angular/core';
import { BasicComponent } from '../../base/basic/basic.component';
import { DataService } from '../../../services/data.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ParallaxConfig } from 'ngx-parallax';
import { staggered } from '../../../animations/animations';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss'],
  animations: [
    staggered
  ]
})
export class CoverComponent extends BasicComponent implements OnInit {

  isMobile;
  
  parallaxConfig: ParallaxConfig = {
    ratio: 0
  };

  constructor(ds: DataService, private deviceService: DeviceDetectorService) { 
    super(ds)
    this.isMobile = deviceService.isMobile();
  }

  ngOnInit() {
    if(!this.isMobile){
      this.parallaxConfig = {
        ratio: 0.25
      }
    }
  }

}
