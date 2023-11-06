import { Component } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent {
  images = ['coding.jpg','macbook.jpg','office.jpg']
  headlines = ['Bring Engineering to the Next Level!','Born to Code','Graduated at Harvard']
  currentImage = 0;
  showImage = true;

  ngOnInit(){
    this.updateImage();
  }

  updateImage() {
    
    setInterval(() =>{
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;
      setTimeout(() =>{
        this.showImage = true;
      },1);

    },4000)
    
  }
}
