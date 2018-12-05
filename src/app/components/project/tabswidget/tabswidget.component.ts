import { Component, OnInit } from '@angular/core';
import { TabsComponent } from '../../base/tabs/tabs.component';
import { fade, listAnimation } from '../../../animations/animations';

@Component({
  selector: 'app-tabswidget',
  templateUrl: './tabswidget.component.html',
  styleUrls: ['./tabswidget.component.scss'],
  inputs: ['data','active'],
  animations:[ fade,listAnimation ]
})

export class TabswidgetComponent extends TabsComponent implements OnInit {

  ngOnInit() {
  }

}
