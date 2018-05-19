npm install rxjs

//  npm 
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

//commonjs
const { Observable } = require('rxjs');

// cdn
const { Observable, from} = rxjs;
const { map, filter } = rxjs.operators;



from([1,2,3,4])
    .pipe(
        filter(x => x % 2 === 0),
        map (x => x + ' es par')
    )

.subscribe({
    next: (x) => console.log(x)
})