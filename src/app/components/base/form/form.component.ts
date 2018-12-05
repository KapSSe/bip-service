import { Component, OnInit, Input } from '@angular/core';
import { SenderService } from '../../../services/sender.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  @Input('formData') data;
  submitting = false;

  constructor(private sender: SenderService) { 
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    if(form.valid){
      this.sender.sendUserData(form.value)
      this.submitting = true;
      setTimeout(() => {
        this.submitting = false;
        form.reset();
      },3000)
    }
  }

  updateCheckbox(ev,el){
    el.control.setValue(ev.target.checked);
  }

}
