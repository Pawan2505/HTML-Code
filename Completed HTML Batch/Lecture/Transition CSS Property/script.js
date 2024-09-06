// let arr = [1,2,3,45,56];
// let position = 3;

// for(let i = position; i < arr.length; i++){
//     arr[i] = arr[i+1];
// }

// arr.length = arr.length-1;
// console.log(arr);

let arr = [1,2,3,45,56];
let position = 3;
let newElement = 720;
for(let i = arr.length-1; i >=0; i--){
    
    if(i >= position){
        arr[i+1] = arr[i];

        if(i==position){
            arr[i] = newElement;
        }
    }
}

console.log(arr);