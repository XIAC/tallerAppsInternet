import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'componente-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent {
  // @Input() insertarimg : string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Googleplex_HQ_%28cropped%29.jpg/1200px-Googleplex_HQ_%28cropped%29.jpg';
  @Input() insertarimg : string = 'no imagen';
  //emitir un evento
  @Output() cargar  = new EventEmitter();
  imagenDefecto: string = "https://thumbs.dreamstime.com/b/no-image-available…lable-icon-flat-vector-illustration-132482953.jpg";

  imgError(){
    this.insertarimg = this.imagenDefecto;
    this.cargar.emit();
  }
}
// ng generate component <nombrecarpate>/<nombrecomponente>
