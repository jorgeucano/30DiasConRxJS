var source = Rx.Observable.interval(500);
var subject = new Rx.Subject();
var multicasted = source.multicast(subject);
var subscription1, subscription2, subscriptionConnect;

subscription1 = multicasted.subscribe({
    next: (v) => console.log('observerA: ' + v)
});

subscriptionConnect = multicasted.connect();

setTimeout(()=>{
    subscription2 = multicasted.subscribe({
        next: (v) => console.log('ObserverB: ' + v)
    });
}, 600);

setTimeout(()=>{
    subscription1.unsubscribe();
},1200);


setTimeout(()=>{
    subscription2.unsubscribe();
    subscriptionConnect.unsubscribe();
},2000);