function NumPrime(arr){
    let newArray =[];
    newArray.forEach((num)=>{
        let c=0;
        for(let i=0;i<=num;i++){
            if(num % i === 0){
                c++
            }
        }
        if(c === 2){
            newArray.push(num);
        }
    })
    console.log(newArray);
}
NumPrime([2,6,9,89,11]);