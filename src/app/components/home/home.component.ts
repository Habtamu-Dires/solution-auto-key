import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy{
  currentIndex = 0;
  interval:any;

  images = [
    '/auto-key.webp',
    '/auto-key2.png',
    '/auto-key3.webp',
    '/auto-key3.webp',
    '/auto-key4.webp'

  ];

  ngOnInit(): void {
    this.startAutoSlide();
  }

  startAutoSlide(){
    this.interval = setInterval(()=>{
      this.nextSlide();
    },7000)
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.images.length - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex < this.images.length - 1) ? this.currentIndex + 1 : 0;
  }


  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
} 
