//esta funcion recibira una linea LEYENDA
// y comprobara si existe alguna coincidencia con el obj de fragments
// de haber coincidencia hace la query relacional para traer todos los datos relacionados a ese pago


 async function matcher(fragments, leyenda){
     //leyendas ejemplo probando funcion
     const porDNI = "Automático Abono Transferencia Otr No.    Autorización 05173401    Cédula/NIT de Origen:    860061283 Referencia 1:    860061283 Referencia 2:    860061283"
    
    console.log("fragments:",fragments.countBank[0])
    console.log("fragments:",fragments.refer)
    console.log("fragments:",fragments.landlords)
    // refer = [
    //     { reference: '1101' }, { reference: '1201' },
    //     { reference: '1301' }, { reference: '1401' },]
    // arrNames = [
    //     { name: 'CARLOS ALBERTO AGUILAR VERA' },
    //     { name: 'CECILIA VIDAL FUERTES' },
    //     { name: 'EDUARDO MOYANO ALIAGA' },
    //     { name: 'JAVIER LINARES LINARES' },] 
    // counts = [
    //     {
    //       id: 1,
    //       bank_account: 282900,
    //       id_departament: 1,
    //       id_department: null
    //     },

    counts = [
        {
          id: 1,
          bank_account: 282900,
          id_departament: 1,
          id_department: null
        },
        {
          id: 2,
          bank_account: 4537845,
          id_departament: 2,
          id_department: null
        },
        {
          id: 3,
          bank_account: 304888,
          id_departament: 3,
          id_department: null
        },
        {
          id: 4,
          bank_account: 304987,
          id_departament: 3,
          id_department: null
        },
        {
          id: 5,
          bank_account: 305987,
          id_departament: 4,
          id_department: null
        },
        {
          id: 6,
          bank_account: 6557534,
          id_departament: 5,
          id_department: null
        },
        {
          id: 7,
          bank_account: 765345345,
          id_departament: 6,
          id_department: null
        },
        {
          id: 8,
          bank_account: 79834587,
          id_departament: 7,
          id_department: null
        },
        {
          id: 9,
          bank_account: 5774545,
          id_departament: 8,
          id_department: null
        },
        {
          id: 10,
          bank_account: 68784534,
          id_departament: 9,
          id_department: null
        },
        {
          id: 11,
          bank_account: 8778666,
          id_departament: 10,
          id_department: null
        },
        {
          id: 12,
          bank_account: 345465678,
          id_departament: 11,
          id_department: null
        },
        {
          id: 13,
          bank_account: 405987,
          id_departament: 12,
          id_department: null
        },
        {
          id: 14,
          bank_account: 45656768,
          id_departament: 13,
          id_department: null
        },
        {
          id: 15,
          bank_account: 76756434,
          id_departament: 14,
          id_department: null
        },
        {
          id: 16,
          bank_account: 7676573,
          id_departament: 15,
          id_department: null
        },
        {
          id: 17,
          bank_account: 7645345,
          id_departament: 16,
          id_department: null
        },
        {
          id: 18,
          bank_account: 44543555,
          id_departament: 17,
          id_department: null
        },
        {
          id: 19,
          bank_account: 77777,
          id_departament: 18,
          id_department: null
        }
      ]
       
      for(let elem of counts){
          if(leyenda.includes(elem.bank_account)){
              console.log(`la leyenda tiene este nro de cuenta: ${elem.bank_account}`)
          }
      }
        // //hago mapa de los nombres existentes en DB
        // let hashMap = fragments.landlords.reduce((memo, obj) => {
        //     peqArr = obj.name.split(" ")        
        //     for(let elem of peqArr){ memo[elem] = true }          
        //     return memo },{})
        // //pregunto si leyenda incluye alguna de las key de hashMap
        // for(let key in hashMap){
        //     if(leyenda.includes(key)){
        //         console.log(`la leyenda incluye ${key}`)
        //     }

        // } 
        
        // for(let elem of refer){
        //     if(porReferencia.includes(elem.reference) ){
        //         console.log(`la referemcia ${elem.reference} esta incluida en la leyenda`)
        //     }
        // }
       


     return "esto esta funcionando"
}

module.exports = matcher