function processData(input) {
    let j = input.split('\n');
    let cha = j[1].split(' ');
    let result = 0;
    
    let json = JSON.parse(j[0],function(key, value){
        
        if(key==cha[0]) return parseInt(cha[1]);
        
        return value;
    });
    
    for (let i = 0; i < json.length; i++){
                      
        let obj = json[i];
        
        for (let key in obj){
            let Name = key;
            let Value = obj[key];
            
            if(!isNaN(Value)){
            result += Value;
            }

        }
        
    }
        
    /*obj.forEach(value => {for(let key in value) {
        console.log(key);
        
        }});*/
    
        console.log(result);
        

} 