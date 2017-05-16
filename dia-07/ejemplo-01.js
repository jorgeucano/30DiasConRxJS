/*var observable = Rx.Observable.interval(1000);
var subscription = observable.subscribe(x=>console.log(x));
subscription.unsubscribe();
*/

var observable1 = Rx.Observable.interval(400);
var observable2 = Rx.Observable.interval(300);

var subscription = observable1.subscribe(x=> console.log('primero: ' + x));
var childSubscription = observable2.subscribe(x=> console.log('segundo: ' + x));

subscription.add(childSubscription);

setTimeout(()=>{
    subscription.remove(childSubscription);
    subscription.unsubscribe();
}, 1000);