import { Component, OnInit } from '@angular/core';
import { AcademicComponent } from 'src/app/academic/academic.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  iconTime: string;
  txtTime: string;
  constructor(

  ) { }

  ngOnInit(): void {
    var data = new Date()
    var hora = data.getHours()
    if (hora >= 0 && hora <= 6) {
      this.txtTime = 'Boa Madrugada';
      this.iconTime = "🌕";
    }
    else if (hora >= 6 && hora <= 12) {
      this.txtTime = 'Bom Dia';
      this.iconTime = "☀️";
    }
    else if (hora >= 12 && hora <= 18) {
      this.txtTime = 'Boa Tarde';
      this.iconTime = "🌤️";
    }
    else {
      this.txtTime = 'Boa Noite';
      this.iconTime = "🌙";
    }
  }


}
