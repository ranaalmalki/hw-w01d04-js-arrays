//1.Create a function that will get the sum of the numbers between 1 and n and return the answer

const summation = function(n){
    let sum = 0;
    for (let i = 1 ; i<= n;i++ ){
        sum = sum +i; 

    }
return sum;
}

//2.Create a function that will get the sum of the numbers between 1 and n and return the answer
const summationEven = function(n){
    let result=0
    for(let i= 1 ; i<=n; i++){
        if(i % 2===0){
result +=i;
        }

    }
    return result;

}
//3.Create a function to get the average of a group of numbers
let number = [8,2,2,4];
const avg = function(array){
    let sum =0;

    for(let i = 0 ; i< array.length;i++){
    sum += array[i];
    }
var average = sum/array.length;
return average;
}
//4.Create a function to reverse the letters in a word

const reverse= function(word){
   
return word.split("").reverse().join("") ;
}
//5.Create a function that takes an array of words and combines them with a dash
const arrayOfWord=['test1', 'test2', 'test3']
const addDashes = function(array){
    return array.join("-");

}

//6.Function that will count up to a number and back down and return a string of the climb

const countUpAndDown = function(num){
for(let i = 1; i<=num;i++){
    console.log(i);
}
for(let j = num-1 ; j > 0 ; j--){
    console.log(j);
}
}
//7.Write a function that will tell you all of the words in an array that contain the letter `a`
const wordsWithA = function(arr){
const filtering = (theword) =>{
    return arr.filter(item => item.indexOf(theword) > -1);
}
console.log(filtering('a'));
}
    
//8.Write a function that will tell you all of the words in an array that contain a specified letter
const wordsWithLetter = function(letter,arr){
const filtering = (theword) => {
    return arr.filter(item => item.indexOf(theword) > -1);

}
console.log(filtering(letter));
}
//9.Function that returns the longest word in sentence
const longestWord = function(text){
   let wordArray = text.split(" ");
   let maxLength = 0;
   let result = "";
   for (let i = 0 ; i< wordArray.length;i++){
       if(wordArray[i].length > maxLength){
maxLength = wordArray[i].length;
result = wordArray[i];
       }
   }
return result;
    } 

//10.Function that returns the largest even number
//const eNumber = [1,2,3,10,4,7,0];
const largestEvenNumber= function(array){
array.sort((x,y) =>y-x);
for(let i =0 ; i< array.length;i++){
if(array[i] % 2 ===0){
    return array[i];

}
}
}