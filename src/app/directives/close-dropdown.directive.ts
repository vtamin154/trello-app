import {
  Directive,
  EventEmitter,
  Output,
  ElementRef,
  Renderer2,
  Input,
  OnInit,
  OnDestroy,
} from '@angular/core';

@Directive({
  selector: '[appCloseDropdown]',
  standalone: true,
})
export class CloseDropdownDirective implements OnInit, OnDestroy {
  @Input() appOutSideClick!: boolean;
  @Output() outSideClick = new EventEmitter<void>();
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  private listener: (() => void) | undefined;

  // Execute this function when click outside of the dropdown-container
  onDocumentClick = (event: Event) => {
    if (!this.element.nativeElement.parentElement.contains(event.target)) {
      this.outSideClick.emit();
    }
  };

  // Add the listener when the dropdown component is rendered
  ngOnInit(): void {
    this.listener = this.renderer.listen(
      'document',
      'click',
      this.onDocumentClick
    );
  }

  // Clean up to prevent memory leaks
  ngOnDestroy(): void {
    if (this.listener) {
      this.listener();
    }
  }
}
