var observable = Rx.Observable.create(function subscribe(observer) {
  var id = setInterval(() => {
    observer.next('hola');
  }, 1000);
  return function unsubscribe() {
    clearInterval(id);
  };
});


function subscribe(observer){
    var id = setInterval(() => {
        observer.next('hola');
    }, 1000);
    return function unsubscribe(){
        clearInterval(id);
    }
}

var unsubcribe  = subscribe( { next : (x) => console.log(x)});

unsubcribe();