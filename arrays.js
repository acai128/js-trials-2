"use strict";


// 1. printIndices
function printIndices(items) {
    for(let i = 0; i < items.length; i++){
        console.log(items[i] + ' '+ i); 
    }
}

printIndices(['apple', 'berry', 'cherry'])
//or use for(i in items)


// 2. everyOtherItem
function everyOtherItem(items) {

let result = []; 

  for(let i in items){
    if(i % 2 === 0){
        result.push(items[i]); 
    }
  }
  console.log(result)
}

everyOtherItem(['apple', 'berry', 'cherry'])


// 3. smallestNItems
function smallestNItems(items, n) {
let result = []; 

for(let i in items){

    }
}


