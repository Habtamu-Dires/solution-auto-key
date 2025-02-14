import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DrawerItemComponent } from "../drawer-item/drawer-item.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drawer',
  imports: [DrawerItemComponent,CommonModule],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.css'
})
export class DrawerComponent{

  @Input() selectedComponent:string = 'home';
  @Output() onComponentSelect = new EventEmitter<string>();

  constructor(){}

  selectComponent(component:string){
    this.onComponentSelect.emit(component);
  }

}
