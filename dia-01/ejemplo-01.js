
//RxJS
var button = document.querySelector('button');
var o = Rx.Observable.fromEvent(button, 'click');

var a = o.subscribe(() => console.log('Clicked RxJS!'));

var b = o.subscribe(() => alert('hey'));

