import { Component, ViewChild, ElementRef } from '@angular/core';
import { PlantsService } from '../services/plants.service';
import { ImageService } from '../services/image.service';
// import {Component, ElementRef} from 'angular2/core';

import { Plant } from '../models/plants';

@Component({
  selector: 'addplant',
  templateUrl: './addplant.component.html',
  styleUrls: ['./addplant.component.css']
})

export class AddPlantComponent {
	model: any = {};
	 @ViewChild('imgInput') el: ElementRef;

	img: string;

	onSubmit(){
		//Wrap the data in the model into a nice plant object
		if (this.el.nativeElement.files[0]){
			this.is.uploadImage(this.el.nativeElement.files[0], window.localStorage.getItem("userEmail") + this.model.common, (snap, err) => {
				if(err){
					return console.log(err);
				}
				var plant = new Plant(
				this.model.common,
				this.model.scientific,
				snap.downloadURL,
				this.model.water,
				this.model.sun,
				this.model.planted,
				this.model.bloomed,
				this.model.location,
				this.model.height,
				this.model.width,
				this.model.native,
				this.model.datenextfertilizing,
				this.model.typeoffertilizer,
				this.model.datenextpruning,
				this.model.soilrequirements,
				this.model.annualorperrenial,
				this.model.datetodevide,
				this.model.notes)
				this.ps.createPlant(plant);
			})
		}
		//We pass the plant object into our plants service
	}
	constructor(private ps:PlantsService, private is: ImageService) { }

}
