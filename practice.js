// //Polindrom 
// const polindrom="aba";

// function isPolindrom1(str){
//     const reverseString=str.split('').reverse().join('');
//     console.log(reverseString)
//     return str==reverseString ;
// }
// function isPolindrom2(str){
//     if(str.length==0 || str.length==1){
//         return true;
//     }
//     if(str.charAt(0)==str.charAt(str.length-1)){
//       return  isPolindrom2(str.substr(1,str.length-2))
//     }else return false;
// }
// console.log(isPolindrom2(polindrom));

// // Shallow Copy and Deep Copy
// const profile= {
//     name:"Ranjith",
//     age:28,
//     address:{
//         street:"First Line",
//         platNo:"35/3 2nd floor",
//         pincode:464433
//     }
// }
// // const shallowCopy= profile;
// // shallowCopy.name='james';
// // console.log(shallowCopy);
// const deepcopyProfile=JSON.parse(JSON.stringify(profile));
// deepcopyProfile.name='sans'
// console.log(profile);
// console.log(deepcopyProfile);

// // Reducer

// function reducer(acc,num){
//     return acc+num;
// }
// const arr= [3,4,5,6,4,3,3]
// const sum=arr.reduce(reducer,0);
// console.log(sum);

// Promises

const isEven= new Promise((resolve,reject)=>{
    let number=45;
    if(number%2===0){
        resolve(`${number} is even`)
    }else reject(`${number} is not even`)
})

isEven.then((res)=>console.log(res)).catch((err)=>console.log(err))