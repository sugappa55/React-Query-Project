export const getColour=(str)=>{
    if(str.length===2){
        if(str==="P0"||"P1")return "red"
        else if(str==="P2")return "orange"
        else return 'green' 
    }
    if(str==="Todo")return "red" 
    else if(str==="Completed")return "green"
    else return "orange"
}