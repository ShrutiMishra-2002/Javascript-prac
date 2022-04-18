function factorial(n)
{
    // var i;
    let fact=1;
    if(n === 0){
        return 1;
    } 
    else{

    for(let i=1;i<=n;i++)
    {
    // fact*=i;
    fact=i*fact;

    }
    return fact;
    }
    // another method to solve factorial recursively
    // if(n === 0){
    //     return 1;
    // } else{
    //     return n * factorial(n-1);
    // }
    
}


function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}