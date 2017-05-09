var observable = Rx.Observable.create(function (observer){
  observer.next(1);
  observer.next(2);
  observer.next(3);
  setTimeout(()=>{
    observer.next(4);
    observer.complete();
  }, 1000);
});

console.log('just antes de subscribirnos');
observable.subscribe({
  next : x => console.log('x vale', x),
  error: err => console.log('algo salio mal', err),
  complete: () => console.log('done'),
});
console.log('just despues de subscribirnos');

