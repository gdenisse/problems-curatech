function countingValleys(n, s){
    let level= 0;
    let valley = 0;
    
    for(let i=0; i<n; i++){
        if(s[i]==="D"){
            --level;
        }
        else if(s[i]==="U"){
            if(++level===0){
                valley++;
            }
        }
    }
    return valley;
}

const steps = 12;
const path = "DDUUDDUDUUUD";

console.log(countingValleys(steps, path));