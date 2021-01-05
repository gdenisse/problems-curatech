function MilkMerchant(n, ar){
    let sorted = ar.sort( (a,b) => a - b );
    let pairs = 0;

    for(let i=0; i<n; i++){
        if(sorted[i]==sorted[i + 1]){
            pairs++;
            i+=1;
        }
    }
    return pairs;
}

const boxes = 9;
const colors = [10, 20, 20, 10, 10, 30, 50, 10, 20];

console.log(MilkMerchant(boxes, colors));