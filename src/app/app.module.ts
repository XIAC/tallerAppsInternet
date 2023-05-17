import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ImagenComponent } from './componentes/imagen/imagen.component';
import { FormsModule } from '@angular/forms';
import { ProductosComponent } from './componentes/productos/productos.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ImagenComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent},
      { path: 'imagen', component: ImagenComponent},
      { path: 'productos', component: ProductosComponent}
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
