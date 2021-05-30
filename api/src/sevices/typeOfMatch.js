 
 
 
function typeOfMatch(fragments, leyenda) {
    console.log("- typeOfMatch".yellow)
    let objResponse =  "no hubo coincidencias"

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

    // // console.log("countsBank:",fragments.countBank[0])
    // // console.log("referencesDep:",fragments.refer[0])
    // // console.log("Landlords:",fragments.landlords[0])
    // const countsBank = fragments.countBank[0]
    // const references = fragments.refer[0]
    // const Landlords = fragments.landlords[0]
    // let typeOfConcidence = "not match"
    
    // //-- BUSCA POR CUENTA DE BANCO --
    // for (let elem of countsBank) {
    //     if (leyenda.includes(elem.bank_account)) {
    //         console.log(`la leyenda tiene este nro de cuenta: ${elem.bank_account}`)
    //         return typeOfConcidence = { //corto ejecucion, deja de buscar
    //             ...elem,
    //             match: "bank_account",
    //         }
    //     }
    // }
    // //-- BUSCA POR REFERENCIA DE DTO --
    // for (let elem of references) {
    //     if (leyenda.includes(elem.reference)) {
    //         console.log(`la referemcia ${elem.reference} esta incluida en la leyenda`)
    //         return typeOfConcidence = { //corto ejecucion, deja de buscar
    //             ...elem,
    //             match: "reference_dep",
    //         }
    //     }
    // }
    // //-- BUSCA POR DNI O NOMBRE --
    // //hago mapa de los nombres y dni existentes en DB
    // const regex = /^[0-9]*$/; //expresion regular para validar si un string solo posee nros
    // let hashMap = Landlords.reduce((memo, obj) => {
    //     peqArr = obj.name.split(" ")
    //     for (let elem of peqArr) { memo[elem] = obj }
    //     memo[obj.document] = obj
    //     return memo
    // }, {})
    // //pregunto si leyenda incluye alguna de las key de hashMap
    // for (let key in hashMap) {
    //     if (leyenda.includes(key)) {
    //         console.log(`la leyenda incluye ${key}`)
    //         if (regex.test(key)) { //si la key solo posee nros
    //             return typeOfConcidence = {
    //                 ...hashMap[key],
    //                 match: "coincide_dni",
    //             }
    //         } else {
    //             return typeOfConcidence = {
    //                 ...hashMap[key],
    //                 match: "coincide_nombre",
    //             }
    //         }
    //     }
    // }    
    return objResponse         
}
            


module.exports = typeOfMatch