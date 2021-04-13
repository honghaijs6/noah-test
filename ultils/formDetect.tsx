
/* detech form */



export default  function detectForm (fields=[],data={}){

    let ret = '' ;
  
    if(fields.length>0){
  
      fields = fields.reverse();
      
      Object.keys(data).map((item)=>{
        fields.map((item2)=>{
          if(data[item2] === '' ||  data[item2] === 0 || data[item2]==='[]' || data[item2]==='{}'){
  
            try{
              ret = 'Please check '+item2 ;
              document.getElementById(item2).focus();
    
            }catch(err){}
  
            
          }
  
        });
      });
    }
    
    return ret ;
  }
  