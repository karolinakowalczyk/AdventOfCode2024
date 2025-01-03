//import { exampleData as data } from "./aoc2exampledata.js";
import { data } from "./aoc2data.js";

//part 1
// let safeCount = 0

// data.trim().split('\n').forEach((report)=>{
//     let sortResult = '';

//        if(parseInt(report.trim().split(' ')[0]) < parseInt(report.trim().split(' ')[1])){
//         sortResult = [...new Set(report.trim().split(' ').sort((a,b) => a - b))].join(' ');
//     }
//     else{
//         sortResult = [...new Set(report.trim().split(' ').sort((a, b) => b - a))].join(' ');
//     }

//    // all increasing or all decreasing
//     if(report !== sortResult){
//        return;
//     }

//     let iterator = 1
//     const reportLength =  report.trim().split(' ').length

//     const safeDistance =  report.trim().split(' ').every((num)=>{
//         if(iterator === reportLength){
//             return true
//         }

//         const condition =  (Math.abs(num - report.trim().split(' ')[iterator])) < 4

//         iterator +=1

//         return condition
//     })

//     if(!safeDistance){
//         return;
//     }

//     safeCount += 1
// })

// console.log('SAFE COUNT')
// console.log(safeCount)

// part 2

let myResArr = [];
let hisResArr = [];


function checkIfSafe(line) {
  const lineArr = line.split(' ').map(Number)

  const isIncreasingAndValid = lineArr.every((num, i)=>{
    return(i == 0 || (num > lineArr[i-1] && num - lineArr[i-1] <=3))
  })

  const isDescreasingAndValid = lineArr.every((num, i)=>{
    return(i == 0 || (num < lineArr[i-1] && lineArr[i-1] - num <=3))
  })

  return isIncreasingAndValid || isDescreasingAndValid

}

function checkIfSafeWithBadLevel(line) {
  const lineArr = line.split(' ').map(Number)

  for(let i=0; i < lineArr.length; i++){
      const copyArr1 = [...lineArr]
      const copyArr2 = [...lineArr]
      const start = copyArr1.splice(0, i)
      const end = copyArr2.splice(i+1, lineArr.length-1)
      const concatString = start.concat(end).join(' ')
      if(checkIfSafe(concatString)){
        return true
      }
    
  }
  return false
}

function getSafeCount(reports){

  let safeCount = 0

    reports.trim().split('\n').forEach((report)=>{
      if(checkIfSafe(report) || checkIfSafeWithBadLevel(report)){
        safeCount++
      }
    })
    return safeCount;
}

const safeCountResult = getSafeCount(data)

console.log("SAFE COUNT");
console.log(safeCountResult);
