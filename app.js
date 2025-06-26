 const sampleData = [3,4,5,[3,4],4,[4,3,[4,5,[4,4,4,]]],4,4]

function flattenArray(array){
   let result = []
   array.forEach(element => {
    if(Array.isArray(element)){
       result.push(...flattenArray(element))

    }else{
       result.push(element)
    }
    
   });

   return result
}

console.log("res::", flattenArray(sampleData))