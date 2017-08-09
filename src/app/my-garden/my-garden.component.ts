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
  plant = this.plant;

  onClick(){
			this.router.navigateByUrl('/addplant');
        }
  constructor(private route: ActivatedRoute, private router: Router, private ps: PlantsService) {
    // this.route.params.subscribe((params) {
    //     this.ps.getUserInfo(params.id).then((prof) => {
    //     this.modelProfile = new Profile(prof.username, prof.name, prof.gender, prof.about, prof.hobbies, prof.age, prof.langs, prof.prefgender);
    //     this.hobbies = prof.hobbies;
    //     this.langs = prof.langs;
    //   })
    // })
   }

  ngOnInit() {
  }

}
