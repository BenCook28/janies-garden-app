import { Component, OnInit, Input } from '@angular/core';
import { MyGardenComponent } from '../my-garden/my-garden.component';
import { MyGardenService } from '../services/my-garden.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Plant } from '../models/plants';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  plantId = "";
  modelPlant = new Plant("","","","","","","","","","","","","","","","","","");
  activeId = 1;
  plants = {};
  @Input() model : Plant;

  onSubmit(){
    this.mgs.updatePlant(this.model, this.plantId);
  }

  constructor(private mgs: MyGardenService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.model = new Plant("","","","","","","","","","","","","","","","","","");
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.plantId = params.get('id');
        return this.mgs.getPlant(this.plantId);
      })
      .subscribe(plant => {
            this.model = plant;
            console.log(plant);
          })
  }

}
