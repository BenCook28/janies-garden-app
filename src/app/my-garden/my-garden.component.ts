import { Component, OnInit } from '@angular/core';
import { PlantsService } from '../services/plants.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Plant } from '../models/plants'

@Component({
  selector: 'my-garden',
  templateUrl: './my-garden.component.html',
  styleUrls: ['./my-garden.component.css']
})
export class MyGardenComponent implements OnInit {
  // plant = this.plant;
  modelPlant = new Plant("","","","","","","","","","","");
  activeId = 1;

  onClick(){
			this.router.navigateByUrl('/addplant');
  }

  ngOnInit() {
  }

  change(id: number){

  }

  constructor(private route: ActivatedRoute, private router: Router, private ps: PlantsService) {
    this.route.params.subscribe((params) => {
        this.ps.getPlantInfo().then((prof) => {
          // this.modelPlant = new Plant(prof.common, prof.scientific, prof.imgurl, prof.water, prof.sun, prof.planted, prof.bloomed,
          // prof.location, prof.height, prof.width, prof.native);
        console.log(prof);
      })
    })
   }
}
