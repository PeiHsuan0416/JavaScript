const list = [1,2,3,4,5]

const result = list.reduce((a,b)=>{
    console.log(a,b);
    return a % b
})

console.log(result);
