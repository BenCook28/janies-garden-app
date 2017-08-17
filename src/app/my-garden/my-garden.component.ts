import { Component, OnInit } from '@angular/core';
import { PlantsService } from '../services/plants.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MyGardenService } from '../services/my-garden.service';

import { Plant } from '../models/plants'

@Component({
  selector: 'my-garden',
  templateUrl: './my-garden.component.html',
  styleUrls: ['./my-garden.component.css']
})
export class MyGardenComponent implements OnInit {
  // plant = this.plant;
  modelPlant = new Plant("","","","","","","","","","","","","","","","","");
  activeId = 1;
  plants = {};
  plant = {};

  onClick(){
			this.router.navigateByUrl('/addplant');
  }

  ngOnInit() {
  }

  delete(index){
    var key = Object.keys(this.plants)[index];
    this.plant = this.plants[key];
    // this.plants[this.plant[index]]
    this.mgs.delete(key);
    this.plants[key]= "";
    console.log('delete is here');
    window.location.reload();
  }

    update(index){
    var key = Object.keys(this.plants)[index];
    console.log(key);
    this.plant = this.plants[key];
    console.log(this.plant);
    // var uCommon = this.plant[key].common;
    // console.log(uCommon);
    // console.log('update is here');
    // this.router.navigateByUrl('/updateplant');
  }
  twdb() {

  }

  change(id: number){

  }

  constructor(private route: ActivatedRoute, private router: Router, private ps: PlantsService, private mgs: MyGardenService) {
    this.route.params.subscribe((params) => {
        this.ps.getPlantInfo().then((prof) => {
          this.plants = prof;
          // this.modelPlant = new Plant(prof.common, prof.scientific, prof.imgurl, prof.water, prof.sun, prof.planted, prof.bloomed,
          // prof.location, prof.height, prof.width, prof.native);
        console.log(prof);
      })
    })
   }
}
