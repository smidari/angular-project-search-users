import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfWithTimer]',
})
export class IfWithTimerDirective {
  @Input('appIfWithTimer') set ifWithTimer(condition: boolean) {
    if (condition) {
      // показать
      this.viewContainer.createEmbeddedView(this.templateRef);
      setTimeout(() => {
        this.viewContainer.clear();
      }, 5000);
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
}
