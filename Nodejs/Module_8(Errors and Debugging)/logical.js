const logical = () => {
    console.log("I am inside Logical error")

    let num  = 5 ; 
    if(num = 10 ){ // = sign
        console.log(num);
    }
    else{
        console.log("num is not 100")
    }


    // let x = 5
    // if (x = 10) { // A ssignmeent instead of comparison
    //     console.log("x is not 10") // In correctly prints this
    //  }


    // let arr = [1,2,3,4,5]
    // for(let i = 0;i<=arr.length; i++){
    //     console.log(arr[i]) // prints undefined at the end of the 
    // }

    // let num = "10"
    // console.log(num+5); //Expected result:15 ,prints 105

}

module.exports = logical;