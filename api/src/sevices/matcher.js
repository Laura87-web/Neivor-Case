//esta funcion recibira una LEYENDA y el objeto fragments
// y comprobara si existe alguna coincidencia con el obj de fragments
//retorna un objeto con los datos del propietario mas el tipo de coincidencia
//sino retorna un string "no hubo coincidencias"
//--------------------------------------------------------------------
// this function will receive a LEYEND string and the fragments object
// and will check if there is any match with the fragments obj.
// returns an object with the owner's data plus the type of match
// otherwise it returns a string "no hubo coincidencias"

function matcher(fragments, leyenda){
    console.log("-3- matcher".yellow)
       
    let objResponse = "no hubo coincidencias"
    
    for(let elem of fragments){
        if(leyenda.includes(elem.document)){
            return objResponse = {
                ...elem,
                match: "match_dni",
                leyenda
            }
        }else if( leyenda.includes(elem.reference)){
            return objResponse = {
                ...elem,
                match: "match_reference",
                leyenda
            }
        }else if(leyenda.includes(elem.bank_account)){
            return objResponse = {
                ...elem,
            match: "match_bankAccount",
            leyenda
        }
    }else{
        arrNames = elem.name.split(" ")
        for(let name of arrNames){
            if(leyenda.includes(name)){
                return objResponse = {
                    ...elem,
                    match: "match_name",
                    leyenda
                }
            }
        }
    }

}
   return objResponse
}

module.exports = matcher