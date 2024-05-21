import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']

})
export class TemplateComponent {

}
