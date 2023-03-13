import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  about = false;
  transition = false;
  home = true;
  constructor(

  ) { }

  ngOnInit(): void {
  }

  goPages(value: string): void {
    if (value === 'about') {
      this.transition = true;
      setTimeout(() => {
        this.home = false;
        this.about = true;
      }, 1000)
      setTimeout(() => {
        this.transition = false;
      }, 2000)
    }
  }
}
