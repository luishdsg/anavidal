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
    
  }
}
