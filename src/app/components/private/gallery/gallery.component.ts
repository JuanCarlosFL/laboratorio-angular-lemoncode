import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Image } from 'src/app/models/Image';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  images: Image[] = [
    { id: 1, src: 'assets/image1.jpg', title: 'Image 1', rotation: 0 },
    { id: 2, src: 'assets/image2.jpg', title: 'Image 2', rotation: 0 },
    { id: 2, src: 'assets/image3.jpg', title: 'Image 3', rotation: 0 },
    { id: 2, src: 'assets/image4.jpg', title: 'Image 4', rotation: 0 },
    { id: 2, src: 'assets/image5.jpg', title: 'Image 5', rotation: 0 },
    { id: 2, src: 'assets/image6.jpg', title: 'Image 6', rotation: 0 },
    { id: 2, src: 'assets/image7.jpg', title: 'Image 7', rotation: 0 },
    { id: 2, src: 'assets/image8.jpg', title: 'Image 8', rotation: 0 },
    { id: 2, src: 'assets/image9.jpg', title: 'Image 9', rotation: 0 }
  ];
  selectedImage = this.images[0]; 
  isPlaying = false;
  player: any;
  increase = false;
  decrease = false;
  currentScale = 100;


  constructor(private auth: AuthService, private router: Router) { }


  selectImage(image: Image) {
    this.selectedImage = image;
  }

  nextImage() {
    const currentIndex = this.images.indexOf(this.selectedImage);
    if (currentIndex < this.images.length - 1) {
      this.selectedImage = this.images[currentIndex + 1];
    } else {
      this.selectedImage = this.images[0];
    }
  }

  previousImage() {
    const currentIndex = this.images.indexOf(this.selectedImage);
    if (currentIndex > 0) {
      this.selectedImage = this.images[currentIndex - 1];
    }
  }

  increaseSize() {
    this.currentScale += 10;
  }

  decreaseSize() {
    if (this.currentScale > 10) {
      this.currentScale -= 10;
    }
  }

  play() {
    this.isPlaying = true
    this.player = setInterval(() => {
      this.nextImage();
    }, 2000);
  }

  stop() {
    clearInterval(this.player);
    this.isPlaying = false
  }

  ngOnInit(): void {
    if (!this.auth.isLogged()) {
      this.router.navigate(['/home'])
    }
  }
}
