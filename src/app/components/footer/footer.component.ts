import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  email:string = 'something'
  @Input() showDrawer:boolean = false;

  address:string = 'DMV Area, USA';
  phoneNumber1:string = '+1 (202) 660-8621';
  phoneNumber2:string = '+1 (571) 622-9441';

}
