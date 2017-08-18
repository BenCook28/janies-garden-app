import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { MyGardenComponent } from '../my-garden/my-garden.component';
import { MyGardenService } from '../services/my-garden.service';
import { PlantsService } from '../services/plants.service';
import { ImageService } from '../services/image.service';
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
	@ViewChild('imgInput') el: ElementRef;

	img: string;

  onSubmit(){
    this.mgs.updatePlant(this.model, this.plantId);
    		if (this.el.nativeElement.files[0]){
			    this.is.uploadImage(this.el.nativeElement.files[0], window.localStorage.getItem("userEmail") + this.model.common, (snap, err) => {
				if(err){
					return console.log(err);
        }
        console.log(snap.downloadURL)
        console.log(this.model);
        this.mgs.updatePlant({...this.model,imgurl:snap.downloadURL},this.plantId)
			})
		}
  }

  constructor(private mgs: MyGardenService, private route: ActivatedRoute, private is: ImageService, private ps: PlantsService) { }

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
