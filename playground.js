// This File was created to practice writing algortihms
// Below are imported classes for needed Data Structures

const Array = require('./Array');
const { LinkedList } = require('./Linked-List');
const BinarySearchTree = require('./BST');
const { Queue } = require('./Queue');
const { Stack } = require('./Stack');
const HashMap = require('./HashMaps');




function arrayFun() {
    // Create an instance of Array class
    let arr = new Array();

    arr.push('foo');
    arr.push('boo');
    arr.push('bar');
    // ^^ HowDo We Get These Values To Print??
    console.log(arr);
    console.log(arr.get(1))
}

// Given a document, implement an algorithm
//  to count the number of word occurrences.
document1 = "Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"
document2 = 'I would love to love pizza, rice, and chocalate. However, one must go'
document3 = 'ho ho. ho santa is here. at last we love santa!'

function wordOccurences(document) {

    // First isolate all words from document using .split(' ') method
    let words = document.replace(/[^a-zA-Z ]/g, '').split(' '); // !!!*** .replace replaces all special chars with nothing
    // Create a new HashMap instance
    let wordMap = new HashMap();

    // loop through all words
    // if word exists in hashmap already add to count... if it doesnt create the key
    words.forEach(word => {
        if (wordMap[word]) {
            wordMap[word] += 1;
        }
        else {
            wordMap[word] = 1;
        }
    });
    return wordMap;
};

console.log(wordOccurences(document3))