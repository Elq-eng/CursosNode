//  PROMESAS 

// AYUDA A VERIFICAR SI SE EJECUTA LOS DATOS 

const getData1 = (error) => {
    return new Promise((resolve, reject) => {
        if (!error) {

            setTimeout(() => {

                resolve({
                    nombre: 'Gabriel',
                    apellido: 'Arguelo'
                })
            }, 3000)
        } else {
            reject('No pudimos obtener los datos')
        }
    })
}

// console.log("Inicio");
// getData1(false)
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
// console.log('fin');


const main = async() => {
    let resultado = await getData1(false)
    console.log(resultado)
}


// tyr{} catch(){}