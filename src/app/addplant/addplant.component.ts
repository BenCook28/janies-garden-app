import { Component } from '@angular/core';
import { PlantsService } from '../services/plants.service';
// import {Component, ElementRef} from 'angular2/core';

import { Plant } from '../models/plants';

@Component({
  selector: 'addplant',
  templateUrl: './addplant.component.html',
  styleUrls: ['./addplant.component.css']
})

export class AddPlantComponent {
	model: any = {};

	onSubmit(){
		//Wrap the data in the model into a nice plant object
		var plant = new Plant(
			this.model.common,
			this.model.scientific,
			this.model.imgurl,
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
			this.model.notes
			)
		//We pass the plant object into our plants service
		this.ps.createPlant(plant);
	}

	constructor(private ps:PlantsService) { }

}
