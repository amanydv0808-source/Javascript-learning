//basic conversions are normal (in same datatype)
// console.log(2>1)
// console.log(2==1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2!=1)

//comparison of different datatype is allowed but it is not always correct as response we expect
//  console.log("2">1)//we should follow strict rules , not to compare with diff datatype for good code 
//  console.log("02"!=1) //in this cases string is converted into 
/*
> The reason is that an equality check `==` and comparisons `> < >= <=` work differently.
> Comparisons convert `null` to a number, treating it as `0`.
> That's why (3) `null >= 0` is true and (1) `null > 0` is false.*/
//  console.log(null>0)
//  console.log(null==0)
//  console.log(null>=0)

 console.log(undefined>0) // in all the cases it give False 
  console.log(undefined<0)
 console.log(undefined==0)
 console.log(undefined>=0)
