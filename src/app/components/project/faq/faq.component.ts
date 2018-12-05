import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { BasicComponent } from '../../base/basic/basic.component';
import { accordion } from '../../../animations/animations';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  animations:[ accordion ]
})
export class FaqComponent extends BasicComponent implements OnInit {

  accordion = [];

  constructor(ds:DataService) { 
      super(ds);
  }

  ngOnInit() {
    this.generateAccordion();
  }

  generateAccordion(){
    this.data.subscribe((data) => {
     data.faq.blocks.forEach((el) => {
        this.accordion.push(false);
     });
    })
  }

  toggleAccordion(i){
    this.accordion[i] = !this.accordion[i];
  }

}
