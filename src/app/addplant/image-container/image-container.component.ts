// import { Component, OnInit } from '@angular/core';
// import { FileUploaderModule } from '@uniprank/ngx-file-uploader';

// @Component({
//   selector: 'app-image-container',
//   templateUrl: './image-container.component.html',
//   styleUrls: ['./image-container.component.css']
// })

// @Component({
//     selector: 'app-image-container',
//     template: `
//         <input type="file" (change)="changeListener($event)" />
//         <img class="image" />
//     `,
//     directives: [ImageActionsComponent]
// })

// export class ImageContainerComponent {
//     constructor(private element: ElementRef) {}

//     changeListener(event) {
//         var reader = new FileReader();
//         var image = this.element.nativeElement.querySelector('.image');

//         reader.onload = function(e) {
//             var src = e.target.result;
//             image.src = src;
//         };

//         reader.readAsDataURL(event.target.files[0]);
//     }
// }

// export class ImageContainerComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

