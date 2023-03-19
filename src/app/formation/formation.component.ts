import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
