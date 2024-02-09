// spliting the string and reverse it and then join across ''
const reverse = (string)=>{
    return string
        .split('')
        .reverse()
        .join('')
}


const average = (array) => {
    const reducer = (sum, item) => {
      return sum + item
    }
    // here it means the initial value of sum = 0 and sum, item is argument for callback fun
    return array.length == 0? 0:array.reduce(reducer, 0) / array.length
}

module.exports = {
    reverse,
    average,
}


// Since tests are only executed during the development of our application, 
// we will install jest as a development dependency with the command
// npm install --save-dev jest
// defining scripts for testing -> jest --verbose
