//esta funcion recibira una linea LEYENDA
// y comprobara si existe alguna coincidencia con el obj de fragments
// de haber coincidencia hace la query relacional para traer todos los datos relacionados a ese pago


 async function matcher(fragments, leyenda){
         
    // console.log("countsBank:",fragments.countBank[0])
    // console.log("referencesDep:",fragments.refer[0])
    console.log("Landlords:",fragments.landlords[0])
    const countsBank = fragments.countBank[0]
    const references = fragments.refer[0]
    const Landlords = fragments.landlords[0]
   
       
      for(let elem of countsBank){
          if(leyenda.includes(elem.bank_account)){
              console.log(`la leyenda tiene este nro de cuenta: ${elem.bank_account}`)
          }
      }
        //hago mapa de los nombres y dni existentes en DB
        let hashMap = Landlords.reduce((memo, obj) => {
            peqArr = obj.name.split(" ")        
            for(let elem of peqArr){ memo[elem] = true }  
            memo[obj.document] = true        
            return memo },{})
        //pregunto si leyenda incluye alguna de las key de hashMap
        for(let key in hashMap){
            if(leyenda.includes(key)){
                console.log(`la leyenda incluye ${key}`)
            }
            

        } 
        
        for(let elem of references){
            if(leyenda.includes(elem.reference) ){
                console.log(`la referemcia ${elem.reference} esta incluida en la leyenda`)
            }
        }
       


     return "esto esta funcionando"
}

module.exports = matcher