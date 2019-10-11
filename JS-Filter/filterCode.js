function processData(input) {

    let j = input.split('\n');
    let cha = j[1].split(',');  
    let L1 = j[0].split(',');
    let result = '';
    
    let numA=L1[0];
    let top=Number(numA)+2;
    
    let nfiltros=L1[1];
    let filtros=j.slice(top);
    let parametros=new Array();
    
    let values=new Array();
    let index=0;

    for(let i=0;i<nfiltros;i++){
        filtros[i]=filtros[i].split(',');
    }

    for(let i=0;i<filtros.length;i++){
        parametros[index]=filtros[i][0];
        index++;
    }
    
    index=0;
    
    for(let i=0;i<filtros.length;i++){
        values[index]=filtros[i][1];
        index++;
    }

    let arr=new Array();
    let alumnos=new Array();
    
    for (let i=2; i<top; i++){
         j[i]=j[i].split(',');
        }
    
    class Alumno{
        constructor(cha1,cha2,cha3,cha4,cha5) {
        this[cha[0]] = cha1;
        this[cha[1]] = cha2;
        this[cha[2]] = cha3;
        this[cha[3]] = cha4;
        this[cha[4]] = cha5;
        this.aprobado='true';
    }
    }  
  

    

   for (let i=2; i<top; i++){
        arr[i]=new Alumno(j[i][0],j[i][1],j[i][2],j[i][3],j[i][4]);
        if (arr[i].calificacion<6){
            arr[i].aprobado='false';
        }
}
    
    for (let i=2; i<arr.length; i++){
        let obj = arr[i];
        for (let key in obj){
                let name = key;
                let value = obj[key]; 
            for (let j=0; j<values.length; j++){
                 if(value != values[j]&& name==parametros[j])
            delete arr[i];}
        }

    }
  
     for (let i=0;i<arr.length;i++)
        if(arr[i]!=undefined) result +=arr[i].expediente+(',');
     
   result = result.substring(0, (result.length - 1));
     console.log(result);
}
