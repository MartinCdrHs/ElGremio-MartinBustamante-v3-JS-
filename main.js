class Juego {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

const juego1 = new Juego("gloomhaven", 800, 0);
const juego2 = new Juego("munchkin", 700, 2);
const juego3 = new Juego("no lo testeamos ni un Poco", 500, 3);
const juego4 = new Juego("dungeons and drinks", 600, 3);
const juego5 = new Juego("jumanji", 800, 1);
const juego6 = new Juego("here to slay", 600, 2);

let producto = "";
let precioJuego = 0;
let precioTotal = 0;
let seguirReservando = false;


function hayStock (Juego) {
    if (Juego.stock > 0){
        precioJuego = Juego.precio;
        Juego.stock -- ;
    }else{
        precioJuego = 0
        alert ("No hay stock!")
    }
}


do {
    producto = prompt("Elige uno de los siguientes juegos: Gloomhaven, Munchkin, " +
    "No lo testeamos ni un poco, Dungeons and Drinks, Jumanji, Here to Slay");

    switch (producto.toLocaleLowerCase()) {
        case "gloomhaven":
            hayStock (juego1);
            break;
        case "munchkin":
            hayStock (juego2);
            break;
        case "no lo testeamos ni un poco":
            hayStock (juego3);
            break;
        case "dungeons and drinks":
            hayStock (juego4);
            break;
        case "jumanji":
            hayStock (juego5);
            break;
        case "here to slay":
            hayStock (juego6);
            break;
        default:
            alert("Alguno de los datos ingresados no es correcto");
            precio = 0;
    }
    precioTotal += precioJuego;

    seguirReservando = confirm("¿Querés agregar otro producto?");

} while (seguirReservando)

alert("El total de tu reserva es de " + precioTotal);



