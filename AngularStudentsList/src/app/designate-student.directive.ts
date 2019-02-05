import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDesignateStudent]'
})
export class DesignateStudentDirective {
  private _renderer: Renderer2;
  private _el: ElementRef;

  constructor(renderer: Renderer2, el: ElementRef) {
    this._renderer = renderer;
    this._el = el;
  }
  @Input('appDesignateStudent') designateStudentMark: number;
  @HostListener('mouseenter') onMouseEnter() {
    this.designate(this.designateStudentMark);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.designate(null);
  }

  private designate(mark: Number): void {
    if(mark === null){
      this._renderer.setStyle(
        this._el.nativeElement,
        'textShadow',
        null
      );
      this._renderer.setStyle(this._el.nativeElement, 'fontStyle', null);
      this._renderer.setStyle(this._el.nativeElement, 'color', null);
      return;
    }
    if (mark < 3) {
      this._renderer.setStyle(
        this._el.nativeElement,
        'textShadow',
        '2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000,' +
        ' 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000'
      );
      this._renderer.setStyle(this._el.nativeElement, 'fontStyle', 'italic');
      this._renderer.setStyle(this._el.nativeElement, 'color', 'red');
    } else if (mark >= 3 && mark < 4) {
      this._renderer.setStyle(
        this._el.nativeElement,
        'textShadow',
        '2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000,' +
        ' 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000'
      );
      this._renderer.setStyle(this._el.nativeElement, 'fontWeight', 'Bold');
      this._renderer.setStyle(this._el.nativeElement, 'color', 'yellow');
    } else if (mark >= 4) {
      this._renderer.setStyle(
        this._el.nativeElement,
        'textShadow',
        '2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000,' +
        ' 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000'
      );
      this._renderer.setStyle(this._el.nativeElement, 'fontWeight', 'Bolder');
      this._renderer.setStyle(this._el.nativeElement, 'color', 'green');
    }
  }
}




