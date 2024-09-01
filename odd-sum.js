let total = 0;
for (let i=0; i<100; i++){
    if (i % 6 ===0){
        console.log(i);
        total = total + i;
        console.log('total : ', total);
        
    }
}

console.log(total);

let i = 0;
// let total = 0;
while(i<100){
    if(i%6 === 0){
        total = total + i;
        console.log('total : ', total);
        
    }
    i++;
}

console.log('total : ', total);

