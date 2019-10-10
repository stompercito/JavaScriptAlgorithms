function processData(input) {
    
    let json = JSON.parse(input,function(key, value){
        
        if(!isNaN(parseInt(value))) return parseInt(value);
        
        if (value == 'true' || value == 'false') return (value === 'true');
        
        return value;
    });
    
    console.log(JSON.stringify(json));
    
    for(let i = 0; i < json.length; i++){
        let con = '';
        let result = '';
        let flag = false;
        
        let obj = json[i];
        
        for (let key in obj){
                let name = key;
                let value = obj[key];
                
                if(!isNaN(parseInt(value))){
                    con += value + ',';
                }
            
                if( value === true){
                    flag = true;
                }

        }
        con = con.substring(0, (con.length - 1));
        
        if(flag == true){
            console.log(i + '->' + con);
        }else{
            console.log(i + '->' + 'false');
        }
        
    }
        
    
    
} 