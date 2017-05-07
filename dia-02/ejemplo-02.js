var count = 0;
var rate = 3000;
var lastClick = Date.now() - rate;
var button = document.getElementById('JSButton');
button.addEventListener('click', () => {
  if (Date.now() - lastClick >= rate) {
    console.log(`JS Clicked ${++count} times`);
    lastClick = Date.now();
  }
});


var button = document.getElementById('RxJSButton');
Rx.Observable.fromEvent(button, 'click')
  .throttleTime(3000)
  .scan(count => count + 1, 0)
  .subscribe(count => console.log(`Clicked ${count} times`));