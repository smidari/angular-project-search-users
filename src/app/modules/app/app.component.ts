import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(private store: Store<IAppState>) {}
  ngOnInit(): void {}
}
