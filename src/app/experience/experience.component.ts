import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ExperienceService } from '../../service/experience.service'
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @ViewChild('cards') cards: ElementRef<HTMLDivElement>;

  images: any;
  backgrounds: any;
  imagesArray = [
    { src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_mono.png', alt: 'Image 1' },
    { src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_chihiro.png', alt: 'Image 2' },
    { src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_howlcastle.png', alt: 'Image 3' }
  ];
  backgroundsArray = [1, 2, 3]; // just for demonstration purposes
  range = 40;
  xValue = 0;
  yValue = 0;
  timeout: number;

  ngAfterViewInit() {
    this.images = this.cards.nativeElement.querySelectorAll('.card__img');
    this.backgrounds = this.cards.nativeElement.querySelectorAll('.card__bg');
  }
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.timeout) {
      window.cancelAnimationFrame(this.timeout);
    }

    this.timeout = window.requestAnimationFrame(() => {
      this.yValue = this.calcValue(event.y, window.innerHeight);
      this.xValue = this.calcValue(event.x, window.innerWidth);

      this.cards.nativeElement.style.transform = `rotateX(${this.yValue}deg) rotateY(${this.xValue}deg)`;

      this.images.forEach((image: { style: { transform: string; }; }) => {

        image.style.transform = `translateX(${-this.xValue}px) translateY(${this.yValue}px)`;
      });

      this.backgrounds.forEach((background: { style: { backgroundPosition: string; }; }) => {
        background.style.backgroundPosition = `${this.xValue * .45}px ${-this.yValue * .45}px`;
      });
    });
  }

  calcValue(a: any, b: any): any {
    return (a / b * this.range - this.range / 2).toFixed(1);
  }

  constructor(
    private ExperienceService: ExperienceService
  ) {
  }


  ngOnInit(): void {
  }
}
