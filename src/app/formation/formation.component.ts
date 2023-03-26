import { Component, ElementRef, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {
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

    const options = document.getElementsByClassName("option");
    for (let i = 0; i < options.length; i++) {
      options[i].addEventListener("click", function () {
        for (let j = 0; j < options.length; j++) {
          options[j].classList.remove("active");
        }
        options[i].classList.add("active");
      });
    }


  }
}
