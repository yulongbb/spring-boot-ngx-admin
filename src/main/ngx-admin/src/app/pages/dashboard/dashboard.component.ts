import { Component, Input, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PageService } from '../pages.service';
import { CropperComponent } from 'angular-cropperjs';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  @ViewChild('angularCropper') public angularCropper: CropperComponent;
  imgUrl = null;
  config = {
    aspectRatio: 16 / 9,
    dragMode: 'move',
    background: true,
    movable: true,
    rotatable: true,
    scalable: true,
    zoomable: true,
    viewMode: 1,
    checkImageOrigin: true,
    cropmove: this.cropMoved.bind(this),
    checkCrossOrigin: true,
  };
  imageUrl = 'https://c.staticblitz.com/assets/sponsors/nrwl-63566809483ae6dec3bec24675bd9843224451c45c6a1693ecfa9d71b2cfe631.png'

  summary;

  constructor(private pageService: PageService) {
    this.pageService.getUsers().subscribe(response => {
      this.summary = [
        {
          'title': 'users',
          'value': response.length,
        },
        {
          'title': 'users',
          'value': response.length,
        },
        {
          'title': 'users',
          'value': response.length,
        },
        {
          'title': 'users',
          'value': response.length,
        },
      ];
    });
  }

  ngOnInit(): void {

  }


  cropMoved(data) {
    this.imgUrl = this.angularCropper.cropper.getCroppedCanvas().toDataURL();
  }


}
