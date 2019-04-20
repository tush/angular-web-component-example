import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ng-button',
  template: `
    <button (click)="onClick()">
      {{ label }}
    </button>
  `,
  styles: [],
  // encapsulation: ViewEncapsulation.Native
  encapsulation: ViewEncapsulation.ShadowDom
})
export class NgButtonComponent implements OnInit {

  @Input() label: string;
  @Output() action  = new EventEmitter();
  private numClicks = 0;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.numClicks++;
    this.action.emit(this.numClicks);
  }

}
