import {
  Component,
  OnInit,
  ElementRef,
  Output,
  EventEmitter,
  ContentChild,
  AfterContentInit
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, AfterContentInit {
  @Output() close = new EventEmitter();
  @ContentChild('footer') modalFooter!: ElementRef;
  customFooter = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    document.body.appendChild(this.el.nativeElement);
  }

  ngAfterContentInit(): void {
    this.customFooter = this.modalFooter && this.modalFooter.nativeElement.hasChildNodes();
  }

  ngOnDestroy() {
    this.el.nativeElement.remove();
  }

  onCloseClick() {
    this.close.emit();
  }
}
