import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[scrollAnchor]'
})
export class ScrollToTopDirective {
  
  @Input('scrollAnchor') scrollTopBtn;

  initialTop : number = 0

  constructor(private eleRef : ElementRef) {
    this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top
  }

  @HostListener("window:scroll", ["$event"])

    onWindowScroll(event){
      let currentPos = this.eleRef.nativeElement.getBoundingClientRect().top;
      if(currentPos < this.initialTop){
        this.scrollTopBtn.classList.add('scrollTop_active');
      }else{
        this.scrollTopBtn.classList.remove('scrollTop_active');
      }
    }

 
}