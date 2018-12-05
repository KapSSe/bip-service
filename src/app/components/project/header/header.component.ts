import { Component, OnInit } from '@angular/core';
import { BasicComponent } from '../../base/basic/basic.component';
import { DataService } from '../../../services/data.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent extends BasicComponent implements OnInit {

  public isMobile;

  constructor(ds: DataService, private deviceService: DeviceDetectorService, public ngxSmartModalService: NgxSmartModalService) {
    super(ds);
    this.isMobile = deviceService.isMobile();
    this.data.subscribe((data) => {
      ngxSmartModalService.setModalData(data,'myModal');
    })
  }

  ngOnInit() {
    
  }

}
