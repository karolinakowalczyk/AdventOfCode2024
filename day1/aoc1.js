import { data } from "./aoc1data.js";
import { exampleData } from "./apc1exampledata.js";

function sumArrElements(arr){
    return  arr.reduce((acc, current)=>{
        return  acc += current
     }, 0)
}

const rows  = data.trim().split('\n');

const columnA = [];
const columnB = [];

rows.forEach(row=>{
    const [a, b] = row.split('   ');
    columnA.push(a);
    columnB.push(b);
})

const sortedColumnA = columnA.sort();
const sortedColumnB = columnB.sort();
const distances = [];

for(let i = 0; i < sortedColumnA.length; i++){
    distances.push(Math.abs(sortedColumnA[i] - sortedColumnB[i]))
}

// const distance = distances.reduce((acc, current)=>{
//    return  acc += current
// }, 0)

const distance = sumArrElements(distances)

console.log('Distance');
console.log(distance)

const similarityScores = [];

sortedColumnA.forEach((elA)=>{
    let counter = 0;
    if(sortedColumnB.includes(elA)){
        sortedColumnB.forEach((elB)=>{
            if(elB === elA){
                counter += 1;
            }
        })
    }
    similarityScores.push(elA * counter)
}
    
)

const similarityScore = sumArrElements(similarityScores);
console.log('Similarity score')
console.log(similarityScore)



