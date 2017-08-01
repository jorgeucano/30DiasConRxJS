function mutiplyByTen(input) {
    var output = Rx.Observable.create(function subscribe(observer) {
        input.subscribe({
            next: (v) => observer.next(10 * v),
            error: (err) => observer.error(err),
            complete: () => observer.complete()
        })
    });
    return output;
}

var input = Rx.Observable.from([1, 2, 3, 4]);
var output = mutiplyByTen(input);
output.subscribe(x => console.log(x));