import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HomeComponent } from "../../components/home/home.component";
import { ServicesComponent } from "../../components/services/services.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-main',
  imports: [CommonModule, HeaderComponent, HomeComponent, ServicesComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  selectedSection:string = 'Home';
  drawerShown:boolean = false;


  onSectionSelected(section:string){
    this.selectedSection = section;
    console.log("Id ", section);
    this.scrollToSection(section.toLocaleLowerCase());
  }

  onShawDrawer(showDrawer:boolean){
    this.drawerShown = showDrawer;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }
}
