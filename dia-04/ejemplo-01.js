function foo(){
    console.log('Hello');
    return 42;
}


var x = foo.call();
console.log(x);
var y = foo.call();
console.log(y);

//rxjs

var fooRxjs = Rx.Observable.create(function (observer){
    console.log('Hello');
    observer.next(42);
});

fooRxjs.subscribe(function(x){
    console.log(x);
});
fooRxjs.subscribe(function(y){
    console.log(y);
});