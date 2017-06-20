var subject = new Rx.ReplaySubject(100, 500); // 500 windows time

subject.subscribe({
    next: (v) => console.log('observerA' + v)
});

var i = 1;
setInterval(() => subject.next(i++), 200);

setTimeout(()=>{
    subject.subscribe({
        next : (v) => console.log('ObserverB: ' + v)
    });
}, 1000);