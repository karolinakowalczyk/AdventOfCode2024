import { exampleData as data } from "./aoc2exampledata.js";
//import { data } from "./aoc2data.js";

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

function checkDistanceCondition(report) {
  let iterator = 1;
  const reportLength = report.trim().split(" ").length;
  let conditionBufor = [];

  const safeDistance = report
    .trim()
    .split(" ")
    .every((num) => {
      if (iterator === reportLength) {
        return true;
      }

      const condition =
        Math.abs(num - report.trim().split(" ")[iterator]) > 0 &&
        Math.abs(num - report.trim().split(" ")[iterator]) < 4;

      iterator += 1;
      if (!condition) {
        conditionBufor.push(num);
      }

      return condition;
    });

  return { safeDistance, conditionBufor };
}

function sortElements(report, sortType) {
  let result = "";
  //asc
  switch (sortType) {
    case 0:
      result = report
        .trim()
        .split(" ")
        .sort((a, b) => a - b)
        .join(" ");
      break;
    case 1:
      result = report
        .trim()
        .split(" ")
        .sort((a, b) => b - a)
        .join(" ");
      break;
  }
  return result;
}

// data
//   .trim()
//   .split("\n")
//   .forEach((report) => {
//     let sortResult = "";
//     let singleBadLevel = 0;
//     //let differencesCounter = 0;

//     //find nearest not same element
//     const nearestNotSameElement = report
//       .trim()
//       .split(" ")
//       .find((num) => num !== report.trim().split(" ")[0]);

//     if (
//       parseInt(report.trim().split(" ")[0]) < parseInt(nearestNotSameElement)
//     ) {
//       sortResult = sortElements(report, 0);
//     } else {
//       sortResult = sortElements(report, 1);
//     }

//     // all increasing or all decreasing
//     if (report !== sortResult) {
//       console.log("report");
//       console.log(report);
//       console.log("sortResult");
//       console.log(sortResult);
//       singleBadLevel =
//         report.split(" ").reduce((total, currValue, index) => {
//           if (currValue !== sortResult.split(" ")[index]) {
//             total += 1;
//           }
//           return total;
//         }, 0) / 2;
//       //   if (differencesCounter / 2 > 1) {
//       //     return;
//       //   } else {
//       //     singleBadLevel += 1;
//       //   }
//     }

//     const safeDistanceData = checkDistanceCondition(report);
//     console.log("safeDistanceData");
//     console.log(safeDistanceData);
//     let firstElRemoved = false;

//     if (safeDistanceData.safeDistance) {
//       myResArr.push(report);
//       safeCount += 1;
//     } else if (
//       !safeDistanceData.safeDistance &&
//       safeDistanceData.conditionBufor.length === 1
//     ) {
//       const reportWithoutBadElement = report
//         .split(" ")
//         .filter((el) => {
//           if (el === safeDistanceData.conditionBufor[0] && !firstElRemoved) {
//             firstElRemoved = true;
//             return false;
//           }
//           return true;
//         })
//         .join(" ");

//       console.log("reportWithoutBadElement");
//       console.log(reportWithoutBadElement);
//       const newSafeDistanceData = checkDistanceCondition(
//         reportWithoutBadElement
//       );
//       if (newSafeDistanceData.safeDistance && singleBadLevel === 0) {
//         myResArr.push(report);
//         safeCount += 1;
//       } else {
//         //case gdzie - mamy bad level, bo posortowane różni się od nieposortowanego
//         console.log("else");
//         console.log(report);
//       }
//     } else {
//       return;
//     }
//   });

function verifyConditions(report, safeCount, badSorting, badDistance, areConditionsFullfilled){
    console.log('report')
    console.log(report)
    console.log('safecount')
    console.log(safeCount)
    console.log('badSorting')
    console.log(badSorting)
    console.log('badDistance')
    console.log(badDistance)
    console.log('areConditionsFullfilled')
    console.log(areConditionsFullfilled)
    let sortResult = '';
    let excludeElement = null;
    //find nearest not same element
    const nearestNotSameElement = report
    .trim()
    .split(" ")
    .find((num) => num !== report.trim().split(" ")[0]);

    if (
              parseInt(report.trim().split(" ")[0]) < parseInt(nearestNotSameElement)
            ) {
              sortResult = sortElements(report, 0);
            } else {
              sortResult = sortElements(report, 1);
            }

   // all increasing or all decreasing
    if(report !== sortResult){
      
        // if(!badSorting && badDistance){
        //     badSorting = true
        //     const res = verifyConditions(report, safeCount, badSorting, badDistance)
        //     safeCount = res
        // }
        // if(badSorting && !badDistance){
        //     badSorting = true
        //     const res = verifyConditions(report, safeCount, badSorting, badDistance)
        //     safeCount = res
        // }
        // if(badSorting && !badDistance){
        //     badSorting = true
        //     const res = verifyConditions(report, safeCount, badSorting, badDistance)
        //     safeCount = res
        // }
        if(!badSorting === 0) {
            console.log('badsorting')
            badSorting += 1;
            //get element with is different and remove it
            const reportArr = report.split(" ")
            excludeElement = reportArr.find((element, index) => element !== sortResult.split(" ")[index]);
            const excludeElementIndex = reportArr.indexOf(excludeElement);
            if(excludeElementIndex > -1){
                reportArr.splice(excludeElementIndex, 1)
                verifyConditions(reportArr.join(' '), safeCount, badSorting, badDistance, areConditionsFullfilled)
            }

            
            // const res = verifyConditions(report, safeCount, badSorting, badDistance)
            // safeCount = res
        }
        else{
          badSorting += 1;
          //return 0;
        }
      
    }

    let iterator = 1
    const reportLength =  report.trim().split(' ').length

    const safeDistance =  report.trim().split(' ').every((num)=>{
        if(iterator === reportLength){
            return true
        }

        const condition =  Math.abs(num - report.trim().split(" ")[iterator]) > 0 && (Math.abs(num - report.trim().split(' ')[iterator])) < 4

        iterator +=1

        if (!condition) {
            excludeElement = num
          }

        return condition
    })

    if(!safeDistance){
        console.log('!SAFEDISTANCE')
        if(badDistance === 0){
          badDistance +=1
            const reportArr = report.split(" ")
            const excludeElementIndex = reportArr.indexOf(excludeElement);
            if(excludeElementIndex > -1){
                reportArr.splice(excludeElementIndex, 1)
                verifyConditions(reportArr.join(' '), safeCount, badSorting, badDistance, areConditionsFullfilled)
            }
        }
        else{
          badDistance +=1
          //return 0;
        }
    }

    console.log('PARAMETERS AT THE END')
    console.log('badSorting')
    console.log(badSorting)
    console.log('badDistance')
    console.log(badDistance)

    if(badSorting > 1 || badDistance > 1 || (badSorting > 0 && badDistance >0)){
      console.log('JESTEM W WARUNKU')
      areConditionsFullfilled=false
      return
    }
    else {
      console.log('JESTEM W ELSE')
      console.log(areConditionsFullfilled)
      if(areConditionsFullfilled){
        safeCount += 1
      }
     
    }

    
   
    // badDistance - jak 2 razy true to nie incrementuj, jak raz to tak
    console.log('SAFE COUNT AT END')
    console.log(safeCount)
    return safeCount
}

function getSafeCount(reports){
    let safeCountRes = 0;
    let badSorting = 0;
    let badDistance = 0;
    let areConditionsFullfilled = true;

    reports.trim().split('\n').forEach((report)=>{
        console.log('***')
        const result = verifyConditions(report, safeCountRes, badSorting, badDistance, areConditionsFullfilled)
       
        
            // console.log('tu')
            // console.log(result)
            // safeCountRes = safeCountRes + 1
            safeCountRes = result
            console.log('SAFE COUNT RES')
            console.log(safeCountRes)
        
        console.log('***')

    })
    return safeCountRes;
}

const safeCountResult = getSafeCount(data)

console.log("SAFE COUNT");
console.log(safeCountResult);

function verify(line, exclude_idx) {
  let nums = line
    .trim()
    .split(" ")
    .map((x) => parseInt(x));

  if (exclude_idx !== -1) {
    nums.splice(exclude_idx, 1);
  }

  let is_safe = true;
  let increasing = nums[1] - nums[0] > 0;
  for (let i = 1; i < nums.length; i++) {
    let safe;
    if (increasing) {
      safe = 1 <= nums[i] - nums[i - 1] && nums[i] - nums[i - 1] <= 3;
    } else {
      safe = 1 <= nums[i - 1] - nums[i] && nums[i - 1] - nums[i] <= 3;
    }
    is_safe &&= safe;
  }

  if (exclude_idx === -1 && !is_safe) {
    for (let i = 0; i < nums.length; i++) {
      is_safe ||= verify(line, i);
    }
  }

  return is_safe;
}

let safe_count = data
  .trim()
  .split("\n")
  .map((x) => {
    const result = verify(x, -1);
    if (result) {
      hisResArr.push(x);
    }
    return result;
  })
  .reduce((acc, x) => {
    return acc + x;
  }, 0);
console.log(safe_count);

//my result: 240 - too low
//good result: 271

// console.log(myResArr.length);
// console.log(hisResArr.length);

const differenceArr = hisResArr.filter((line) => !myResArr.includes(line));

// console.log("differenceArr");
// console.log(differenceArr);
