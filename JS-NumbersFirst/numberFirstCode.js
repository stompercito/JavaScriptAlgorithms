function processData(input) {
    let arr = input.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(Number(arr[i]))) {
            console.log(arr[i]);
        }
       
    }
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(Number(arr[i]))) {
            console.log(arr[i]);
        }
       
    }
} 