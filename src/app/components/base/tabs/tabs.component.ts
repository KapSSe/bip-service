import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  inputs: ['data','active'],
})

export class TabsComponent {

  public data: object;
  public active: number;

  protected isActiveTab(index: number): boolean {
    return index === this.active ? true : false; 
  }

  protected setActiveTab(index: number): number {
    return this.isActiveTab(index) ? index : this.active = index;
  }

  trackByFn(index, item){
    return index;
  }

}