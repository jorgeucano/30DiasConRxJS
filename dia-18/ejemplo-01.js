/*
const input = document.getElementById('input');
let entradaTotal = '';

input.focus();

var receptor = Rx.Observable
                    .fromEvent(input, 'keydown')
                    .map(e => e.key)
                    .filter(key => key !== ' ');

receptor.subscribe({
    next : (v) => insert(v),
    error: (err) => console.log(error),
    complete: () => console.log('complete')
});

function insert(v) {
    entradaTotal += v;
    console.log(entradaTotal);
}

*/

/*
const input = document.getElementById('input');
let entradaTotal = '';
input.focus();

var receptor = Rx.Observable
                    .fromEvent(input, 'keydown')
                    .map(e => e.key)
                    .filter(key => key !== ' ');

receptor.subscribe({
    next : (v) => insert(v),
    error: (err) => console.log(error),
    complete: () => console.log('complete')
});

function insert(v) {
    entradaTotal += v;
    console.log(entradaTotal);
}


var mouseReceptor = Rx.Observable
                        .fromEvent(document, 'mousemove')
                        .map(event => event)
                        .throttleTime(1);

mouseReceptor.subscribe({
    next : (v) => mouseInsert(v),
    error: (err) => console.log(error),
    complete: () => console.log('complete')
});

function mouseInsert(v) {
        console.log(v.clientY, v.clientX );
}
*/

const input = document.getElementById('input');
const texto = document.getElementById('texto');
const button = document.getElementById("button");

let entradaTotal = '';
let mover = true;

input.focus();

var receptor = Rx.Observable
                    .fromEvent(input, 'keydown')
                    .map(e => e.key)
                    .filter(key => key !== ' ');

receptor.subscribe({
    next : (v) => insert(v),
    error: (err) => console.log(error),
    complete: () => console.log('complete')
});

function insert(v) {
    entradaTotal += v;
    texto.innerText = entradaTotal;
}

var mouseReceptor = Rx.Observable
                        .fromEvent(document, 'mousemove')
                        .map(event => event)
                        .throttleTime(1);

mouseReceptor.subscribe({
    next : (v) => mouseInsert(v),
    error: (err) => console.log(error),
    complete: () => console.log('complete')
});

function mouseInsert(v) {
    if (mover) {
        const y = v.clientY + 10 +"px";
        const x = v.clientX + 10 +"px";
        texto.style.top = y;
        texto.style.left = x;
        texto.style.position = 'absolute';
    }
}

const pauseResume = Rx.Observable
                        .fromEvent(button, 'click')
                        .scan(acc => !acc, true)
                        .startWith(true);
const counter = Rx.Observable.timer(0, 1000);
const empty = Rx.Observable.empty();
pauseResume
.switchMap(resume => resume ? counter : empty);

pauseResume.subscribe({
    next: (v) => { 
        mover = v;
        mover ? button.innerText = 'Pause':  button.innerText = 'Start';
    }
});