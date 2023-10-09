import { Component, Input } from '@angular/core';
import { Currency } from '../currency-app/app.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() item!: Currency[];
}
