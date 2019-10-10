function processData(input) {
    
    let j = input.split('\n');
    let find = j[1].split(' ');
    let index = 0;
    
    let json = JSON.parse(j[0]);
    
    /*for (let i = 0; i < json.length; i++){
                      
        let obj = json[i];
     
        for (let key in obj){
            let name = key;
            let value = obj[key];
            
            
            if(name == find[0] && value == find[1] )
                index = i;

        }
        
    }*/
    
        
    index = json.findIndex(function(item){      
        if(item[find[0]] == parseInt(find[1])){    
        return 1;
        }
    });
    

    
    let json2 = json.splice(index); 
      
    json.sort(sortByProperty_Dec(find[0]));
    
    json2.sort(sortByProperty_Acd(find[0]));
   
    function sortByProperty_Dec(property){  
        return function(a,b){  
        if(a[property] > b[property])  
            return 1;  
        else if(a[property] < b[property])  
            return -1;  
  
        return 0;  
        }
    }
        
        
    function sortByProperty_Acd(property){  
        return function(a,b){  
        if(a[property] < b[property])  
            return 1;  
        else if(a[property] > b[property])  
            return -1;  
  
        return 0;  
        } 
    }
     
    console.log(JSON.stringify(json));
    console.log(JSON.stringify(json2));
    
} 