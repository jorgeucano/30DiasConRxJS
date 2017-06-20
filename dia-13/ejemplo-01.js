var subject = new Rx.AsyncSubject();

subject.subscribe({
    next: (v) => console.log('ObserverA' + v)
});

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);

subject.subscribe({
    next: (v) => console.log('ObserverB' + v)
});

subject.next(5);
subject.complete();