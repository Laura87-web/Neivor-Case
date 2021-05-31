//esta funcion recibira una linea LEYENDA
// y comprobara si existe alguna coincidencia con el obj de fragments

function matcher(fragments, leyenda){
    console.log("-f- matcher".yellow)
         
   let objResponse = "no hubo coincidencias"

   for(let elem of fragments){
    if(leyenda.includes(elem.document)){
       return objResponse = {
            ...elem,
            match: "match_dni"
        }
    }else if( leyenda.includes(elem.reference)){
        return objResponse = {
            ...elem,
            match: "match_reference"
        }
    }else if(leyenda.includes(elem.bank_account)){
        return objResponse = {
            ...elem,
            match: "match_bankAccount"
        }
    }else{
        arrNames = elem.name.split(" ")
        for(let name of arrNames){
            if(leyenda.includes(name)){
                return objResponse = {
                    ...elem,
                    match: "match_name"
                }
            }
        }
    }

}
  
   return objResponse
}

module.exports = matcher