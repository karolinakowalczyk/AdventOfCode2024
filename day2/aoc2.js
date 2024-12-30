import { exampleData } from "./aoc2exampledata.js";
import { data } from "./aoc2data.js";


let safeCount = 0

data.trim().split('\n').forEach((report)=>{
    let sortResult = '';

       if(parseInt(report.trim().split(' ')[0]) < parseInt(report.trim().split(' ')[1])){
        sortResult = [...new Set(report.trim().split(' ').sort((a,b) => a - b))].join(' ');
    }
    else{
        sortResult = [...new Set(report.trim().split(' ').sort((a, b) => b - a))].join(' ');
    }

   // all increasing or all decreasing
    if(report !== sortResult){
       return;
    }

    let iterator = 1
    const reportLength =  report.trim().split(' ').length

    const safeDistance =  report.trim().split(' ').every((num)=>{
        if(iterator === reportLength){
            return true
        }

        const condition =  (Math.abs(num - report.trim().split(' ')[iterator])) < 4
       
        iterator +=1
       
        return condition
    })

    if(!safeDistance){
        return;
    }

    safeCount += 1
})

console.log('SAFE COUNT')
console.log(safeCount)