import {
  Component,
  OnInit,
  ElementRef,
  Output,
  EventEmitter,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter();

  useDefaultAction: boolean = true;

  @ContentChild('footer') customAction: ElementRef = {
    nativeElement: undefined
  };

  constructor(private el: ElementRef) {}

  ngOnInit() {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.el.nativeElement.remove();
  }

  onCloseClick() {
    this.close.emit();
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
    console.log(this.customAction);
    this.useDefaultAction = (this.customAction === undefined);
  }

}
