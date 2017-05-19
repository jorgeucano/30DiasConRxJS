var source = Rx.Observable.interval(500);
var subject = new Rx.Subject();
var refCounted = source.multicast(subject).refCount();
var subscription1, subscription2, subscriptionConnect;

console.log('ObserverA subscribed');
subscription1 = refCounted.subscribe({
    next: (v) => console.log('ObserverA: ' + v)
});

setTimeout(()=>{
    console.log('ObserverB subscribe');
    subscription2 = refCounted.subscribe({
        next: (v) => console.log('ObserverB: '+ v)
    })
}, 600);

setTimeout(()=>{
    console.log('Observer a unsubscribed');
    subscription1.unsubscribe();
}, 1200);

setTimeout(()=>{
    console.log('observerB unsubscribed');
    subscription2.unsubscribe();
},2000);