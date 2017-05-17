var source = Rx.Observable.from([1,2,3,4,5,6]);
var subject = new Rx.Subject();
var multicasted = source.multicast(subject);

multicasted.subscribe({
    next: (v)=> console.log("observerA: " + v)
});

multicasted.subscribe({
    next: (v)=> console.log("observerb: " + v)
});

multicasted.connect();