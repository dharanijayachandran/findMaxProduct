let array = [2,1,2,4,6,7];
let res = findProductOfMax(array);
console.log(".."+res);  //42

function findProductOfMax(arr){
   let maxProduct = -Infinity;
   console.log(arr.length)
   console.log(arr.length-1)

        for(let i=0; i < arr.length; i++){
            for(let j=i+1; j < arr.length; j++){
                 let product =  arr[i] * arr[j];
                    if(product > maxProduct){
                        maxProduct = product;
                    }
            }
        }
        return maxProduct;
}