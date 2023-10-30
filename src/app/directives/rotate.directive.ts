import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: 'img[rotate]'
})
export class RotateDirective implements OnInit {
  @Input() step: number = 10;

  private currentRotation: number = 0;

  constructor(private el: ElementRef) {}

  resetRotation() {
    this.currentRotation = 0;
  }

  ngOnInit() {
    if (this.step) {
      this.el.nativeElement.style.transform = `rotate(${this.currentRotation}deg)`;
    }
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    const shiftKey = event.shiftKey;
    this.currentRotation += shiftKey ? -this.step : this.step;
    this.el.nativeElement.style.transform = `rotate(${this.currentRotation}deg)`;
  }
}

