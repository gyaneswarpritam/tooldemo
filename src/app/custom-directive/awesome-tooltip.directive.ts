import { TooltipComponent } from './../component/tooltip/tooltip.component';
import {
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import {
  Overlay,
  OverlayPositionBuilder,
  OverlayRef,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

@Directive({ selector: '[awesomeTooltip]' })
export class AwesomeTooltipDirective {
  @Input('awesomeTooltip') text = '';
  private overlayRef: OverlayRef;

  constructor(
    private overlay: Overlay,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([
        {
          originX: 'center',
          originY: 'top',
          overlayX: 'center',
          overlayY: 'bottom',
          offsetY: -8,
        },
      ]);

    this.overlayRef = this.overlay.create({ positionStrategy });
  }

  @HostListener('click')
  show() {
    this.overlayRef.detach();
    const tooltipRef: ComponentRef<TooltipComponent> = this.overlayRef.attach(
      new ComponentPortal(TooltipComponent)
    );
    tooltipRef.instance.text = this.text;
  }

  // @HostListener('click')
  // hide() {
  //   this.overlayRef.detach();
  // }
}
