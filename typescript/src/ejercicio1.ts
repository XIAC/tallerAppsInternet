// F1
let edad = 20;
let miproducto = "Producto1";
//NUMBER
console.log("mi edad es:", edad);

//HEXADECIMALES
let hex = 0xffffffffff;
console.log('hex', hex);
let bin = 0b1010;
console.log("numero binario es",bin);
//BOOLEANS
let habilitar = true;
habilitar = false;
let esNuevo : boolean = false;
console.log("Es nuevo", esNuevo);
esNuevo = true;
console.log("Es nuevo", esNuevo);
const random =  Math.random();
console.log(random);
esNuevo = random >= 0.5 ? true : false;
console.log(esNuevo);
// STRINGS
let titulo =  "Computadoras";
let descripcion = "Todo tipo de accesorios";
// titulo= 123123;
console.log(titulo);
const resumen  = `titulo: ${titulo} -----  descripcion: ${descripcion}`;
console.log(resumen);
const resumen2  = 'titulo:'+titulo+' ---- descripcion:'+descripcion;
console.log(resumen2);
// ANY
let mivalor : any;
mivalor = 100;
mivalor = null;
mivalor = {};
mivalor =  "Hola mundo";
let valorCambiado = (mivalor as string).toLocaleUpperCase()
console.log(valorCambiado);
// ARRAY
let numeros = [1,2,3,4,5,6];
let cadenas = ['1','2','3','4','5','6'];
let resultado = numeros.map(item => {return item * 2})
console.log(resultado);
// FUNCIONES
type Tamano = 'S' | 'L' | 'XL' | 'M';
function crearProductosJson (titulo: string, fecha_creacion: Date, stock: number, tamano: Tamano) {
  return {titulo, fecha_creacion, stock, tamano};
}

function imprimirvalor ()  {
  class producto {
    titulo: string = '';
    fecha_creacion: Date = new Date;
    stock: number = 0;
    tamano: Tamano;
  }
  let miProd = new producto;
  return producto;
}
let hola = imprimirvalor();
console.log(hola);
const producto1 = crearProductosJson('mi producto 1', new Date, 500, 'M');
console.log(producto1);
// FUNCIONES CON RETORNO
const calculoTotal = (precios : number[]) : string =>  {
  let total = 0;
  precios.forEach(element => {
    total += element;
  });
  return total.toString();
}

const imprimirTotal = (precios: number[]) : void => {
  const calculo =  calculoTotal(precios);
  console.log(`El total es ${calculo}`);
}
 imprimirTotal([1,2,1,1,1,2]);
