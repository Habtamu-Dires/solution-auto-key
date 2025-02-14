import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { DrawerItemComponent } from "../drawer-item/drawer-item.component";
import { CommonModule } from '@angular/common';
import { DrawerComponent } from "../drawer/drawer.component";

@Component({
  selector: 'app-header',
  imports: [DrawerItemComponent, CommonModule, DrawerComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  selectedComponent = 'home';
  onMobileView:boolean = true;
  showDrawer:boolean = false;
  @Output() onSectionSelected = new EventEmitter<string>();
  @Output() onShowDrawer = new EventEmitter<boolean>();

  constructor(){}

  ngOnInit(): void {
    this.checkScreenSzie(window.innerWidth);
  }

  selectComponent(component:string){
    this.selectedComponent = component;
    this.onSectionSelected.emit(component);
  }

  // from drawer on small screen
  onSelectComponet(component:string){
    this.selectedComponent = component;
    this.onSectionSelected.emit(component);
    this.toggleDrawer();
  }

  // open drawer
  toggleDrawer(){
    this.showDrawer = !this.showDrawer;
    this.onShowDrawer.emit(this.showDrawer);
  }

  // Listen for window resize events
  @HostListener('window:resize',['$event'])
  onResize(event:any){
    this.checkScreenSzie(event.target.innerWidth);
  }

  // check screen size and set hideSideBar value
  private checkScreenSzie(width:number){
    if (width < 1008) { // Small screen threshold (can be adjusted)
        this.onMobileView = true;
    } else {
      this.onMobileView = false;
      this.showDrawer = false;
      this.onShowDrawer.emit(this.showDrawer);
    }
  }

}
