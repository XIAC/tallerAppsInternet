import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { Pokemon, PokemonResult } from 'src/app/models/pokemon.model';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'componente-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{
  producto: Producto = {
    nombre: 'Product test',
    precio: 1000
  }
  misProductos: Producto [];
  // productos : Producto[]=[
  //   {
  //     nombre: 'Product test 1',
  //     precio: 2000
  //   },
  //   {
  //     nombre: 'Product test 2',
  //     precio: 5000
  //   },
  //   {
  //     nombre: 'Product test 3',
  //     precio: 1000
  //   },
  //   {
  //     nombre: 'Product test 4',
  //     precio: 7000
  //   },
  //   {
  //     nombre: 'Product test 5',
  //     precio: 9000
  //   }
  // ]
  mispokemones : PokemonResult;
  pokemones: Pokemon [] = [];
  constructor(private productoServicio: ProductoService) {
    this.misProductos = [];
    this.mispokemones = new PokemonResult;
  }
  ngOnInit(): void {

  }
  agregarProducto(){
    this.productoServicio.agregarProducto(this.producto);
    // console.log("agregado", this.producto);
  }
  verProducto(){
    this.misProductos = this.productoServicio.getproducto();
    console.log(this.misProductos);
  }
  verPokemon(){
    this.productoServicio.getPokemon()
      .subscribe(pokemon => {this.pokemones = pokemon.results;
        console.log(this.pokemones);
      });


  }

}
