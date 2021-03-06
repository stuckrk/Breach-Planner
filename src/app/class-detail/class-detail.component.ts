import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { Data, Spells } from '../shared/data';
import { DataService } from '../shared/services/data.service';


@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.scss'],
  providers: [  
    DataService
  ]
})
export class ClassDetailComponent implements OnInit {
  slug: string;
  data: Data[] = [];
  currentClass: Data;
  image: string;
  url: string;
  imgPath: string;
  classSpells: Spells[];


  getCurrentClass(data){
    this.currentClass = this.data.find(item => item.slug === this.slug);
  }

  constructor(private route: ActivatedRoute, public sanitizer: DomSanitizer, private dataService: DataService) { }


  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      if (params['slug'] !== undefined) {
      this.slug = params['slug'];}});

    this.initializeData();

  }

  async initializeData() {
    this.data = await this.dataService.getDataPromise();
    this.currentClass = this.data.find(x => x.slug === this.slug);
    console.log('current class', this.currentClass);

    this.classSpells = this.currentClass.spells;
    console.log('spells', this.classSpells)

    let myImgPath = './assets/images/';
    let imgType = '_icon.png';
    this.imgPath = myImgPath + this.currentClass.slug + '/' + this.currentClass.img + imgType;
    console.log('imgPath', this.imgPath)

    
  }

  
  // async buildImgPaths(data) {
    
    
    

  //   console.log('rel', this.imgPath)

  //   // for(let i = 0; i < data.length; i++) {
  //   //   data[i].relativeImgPath = myImgPath + data[i].slug + '/' + data[i].img + imgType;
  //   //   console.log('rel', data[i].relativeImgPath)
  //   // }
  //   return this.imgPath;
  // }
}


