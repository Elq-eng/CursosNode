require("colors");

const mostrarMenu = () => {

  return new Promise((resolve, reject) => {

    console.clear();
    console.log("=============================".green);
    console.log(" Seleccione una opciòn ".green);
    console.log("=============================\n".green);

    console.log(`${"1.".green} Crear Tareas`);
    console.log(`${"2.".green} Listar Tareas`);
    console.log(`${"3.".green} Listar Tareas Completadas`);
    console.log(`${"4.".green} Listar Tareas Pendientes`);
    console.log(`${"5.".green} Completar Tarea(s)`);
    console.log(`${"6.".green} Borrar Tareas`);
    console.log(`${"0.".green} Salir \n`);

    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question("Seleccione una opcion: ", (opt) => {
      readLine.close();
      resolve(opt);
    });

  });
};

const pausa = () => {
  
  return new Promise((resolve, reject) => 
  {
    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question(`\n Presione ${"ENTER".green} para continuar\n`, (opt) => {
      readLine.close();
      resolve();
    });
  });

};

module.exports = {
  mostrarMenu,
  pausa,
};
