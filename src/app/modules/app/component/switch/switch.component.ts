import { Component, forwardRef, OnInit, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SwitchComponent),
  multi: true,
};
@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
  providers: [VALUE_ACCESSOR],
})
export class SwitchComponent implements ControlValueAccessor {
  state = 'off';
  private onChange = (value: any) => {};

  setState(state: string): void {
    this.state = state;
    this.onChange(this.state);
  }
  // принимает ф-ю которая следит за изменениями
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  //
  registerOnTouched(fn: any): void {}
  // заблокировать модель
  setDisabledState(isDisabled: boolean): void {}
  // позволяет принять значение и записать
  writeValue(state: string): void {
    this.state = state;
  }
}
