var subject = new Rx.BehaviorSubject(0); // valor inicial

subject.subscribe({
    next: (v) => console.log('ObserverA' + v)
});

subject.next(1);
subject.next(2);

subject.subscribe({
    next: (v) => console.log('ObserverB' + v)
});

subject.next(3);