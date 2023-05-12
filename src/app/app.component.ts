import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taller2parte';
  imgParent = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Googleplex_HQ_%28cropped%29.jpg/1200px-Googleplex_HQ_%28cropped%29.jpg';
  imgCargar(){
    console.log("error padres");
  }
}
