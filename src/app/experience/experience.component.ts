import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  showDiv = false;

  constructor(private elementRef: ElementRef) {}

  @HostListener('window:scroll', ['$event'])

  ngOnInit(): void {
      const element = this.elementRef.nativeElement.querySelector('.card-hover');
    const elementPosition = element.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (elementPosition < screenHeight) {
      this.showDiv = true;
    } else {
      this.showDiv = false;
    }
  }
}
