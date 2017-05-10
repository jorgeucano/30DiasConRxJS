function foo(){
    console.log('Hello');
    return 42;
}

console.log('antes');
console.log(foo.call());
console.log('despues');


var fooRxjs = Rx.Observable.create(function (observer){
    console.log('Hello');
    observer.next(42);
});

console.log('antes');
fooRxjs.subscribe(function(x){
    console.log(x);
});
console.log('despues');