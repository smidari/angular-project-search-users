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
        // condition = !condition;
        this.viewContainer.clear();
      }, 1000);
    }
  }



  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
}
