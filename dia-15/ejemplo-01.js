
Rx.Observable.prototype.multiplyByTen = function multiplyByTen() {
    var input = this;
    return Rx.Observable.create(function subscribe(observer) {
        input.subscribe({
            next: (v) => observer.next(10 * v),
            error: (err) => observer.error(err),
            complete: () => observer.complete()
        });
    });
}

var observable = Rx.Observable.from([1, 2, 3, 4]).multiplyByTen();

observable.subscribe(x => console.log(x));

var observable = Rx.Observable.interval(1000).multiplyByTen();
/*
var observable1 = Rx.Observable.interval(5000);
var observable2 = Rx.Observable.interval(1000);

var merged = Rx.Observable.merge(observable1, observable2);

merged.subscribe( x => console.log(x));
*/