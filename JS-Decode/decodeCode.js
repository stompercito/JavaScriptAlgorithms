function processData(input) {
    let arr = input.split('\n');
    let dic = arr[0].split(' ');
    let ind = arr[1].split(' ');
    let out = '';
    
    for (let i = 0; i < ind.length; i++) {
        out = out + dic[Number(ind[i])];        
        }
    console.log(out);
       
} 