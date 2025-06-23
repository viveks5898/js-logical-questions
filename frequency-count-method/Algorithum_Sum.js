// so in this algo. what we are doing we have function that name @sumOfArrayELement and it takes to parameter first one is arr and second one is that
// array length. so firs we are solving it by for lop we added loop on all element and after loop conditions satisfy it will return sum of element
// now  talking about the  time complexity and space complexity in the case of time complexity
// there is  one 
// arr  = n
// n  = 1
// sum = 1
// i= 0; run for one and i < n is run for n + 1  and i ++ run for n
// so 
const arr = [3,4,32,4,5]
const n = arr.length;

function SumOfArrayElement(arr, n){
    console.log( arr, n)

    let sum =0 //1
    for(let i = 0; i < n; i++){ // n+1
        sum = sum  + arr[i]  // n times

    }
    return sum //1

    // time complexity  is f(n) =  2 n + 3 = On

}

// for space complexity arr =n , n=1, sum =1 ,  i =1 s(n) = n + 3 O(n)

console.log(SumOfArrayElement(arr,n))
