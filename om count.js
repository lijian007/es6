 sortMap=require("./sortMap.js").sortMap

const fs = require('fs')
let book=fs.readFileSync('/Users/yulx/Documents/es6/old man and the sea.txt').toString().toLowerCase().replace(/[^ a-z]/g,'').replace('  ',' ')
let words=book.split(" ")
let map=new Map()

for(let i=0;i<words.length;i++){
    word=words[i].trim()
    if(word.length>0){
        if(map.has(word)){
            map.set(word,map.get(word)+1)
        }else{
            map.set(word,1)
        }
    }
    
}


map2=sortMap(map)
//console.log(map2.length)
//console.log(map2.slice(3000,3327))
console.log(map2)
