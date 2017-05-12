var observer = {
    next : x => console.log('el valor de x', x),
    error: err => console.log('el valor de err', err),
    complete: () => console.log('complete')
}


observable.subscribe( x => console.log('el valor de next es', x));

observable.subscribe(
    x => console.log(x),
    err => console.log(err),
    () => console.log('complete')
)