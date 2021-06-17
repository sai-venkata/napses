import R from 'ramda'
import data from './data.js'


let result = R.map((data) => {return data.name} )(data)



console.log(result);
