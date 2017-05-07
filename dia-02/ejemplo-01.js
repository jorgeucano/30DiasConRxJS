//javascript puro "funcion impura"
// creamos el contador
var countJs = 0;
// obtengo el boton
var button = document.getElementById('JSButton');
button.addEventListener('click', () => console.log(`JS Clicked ${++countJs} times`));

//RxJS
// obtengo el boton
var button = document.getElementById('RxJSButton');
// creo el observable
Rx.Observable.fromEvent(button, 'click')
// funcion pura (sumo al contador)
  .scan(count => count + 1, 0)
// subscribe (recibo el contador y lo imprime)
  .subscribe(count => console.log(`RxJS Clicked ${count} times`));