import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';
import { HttpClient } from '@angular/common/http';
import { PokemonResult } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productos: Producto [] =[];
  constructor(private http: HttpClient) { }
  agregarProducto(producto: Producto){
    // this.productos.push(producto);

    this.productos=[...this.productos,...[producto]];
    console.log(this.productos);
    // console.log("producto agregado", producto);
  }
  getproducto() {

    return this.productos;
    // console.log("devolver productos",this.productos);
  }
  getPokemon(){
    return this.http.get<PokemonResult>('https://pokeapi.co/api/v2/pokemon');
  }
}

///tarea lsita
