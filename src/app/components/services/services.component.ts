import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  @Input() showDrawer:boolean = false;

  services = [
    { title: 'Lost Key Replacement', description: 'Quick and efficient lost car key replacement on-site.' },
    { title: 'Locked Vehicle Opening', description: 'Locked out? We unlock vehicles safely and damage-free.' },
    { title: 'Car Key Programming', description: 'Expert key programming for all modern car models.' },
    { title: 'Coded Key Programming', description: 'Securely program coded keys for maximum security.' },
    { title: 'Key Cloning & Immobilizer', description: 'Duplicate your key and program immobilizers with precision.' },
    { title: 'Mobile & Onsite Programming', description: 'Convenient mobile and onsite programming at your location.' }
  ];
}
