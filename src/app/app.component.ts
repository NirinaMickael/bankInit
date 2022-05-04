import { Component } from '@angular/core';
import { faFile } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bank-init';
  filmIcon = faFile;
}
