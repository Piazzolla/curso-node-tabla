const fs = require("fs");
const colors = require('colors');
const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida, consola = "";


    for (let i = 1; i <= hasta; i++) {
      salida += `${i} x ${base} = ${i * base}\n`;
      consola += `${i} x ${base.toString().cyan} = ${i * base}\n`;
    }
    if (listar) {
        console.log(`tabla del ${base}`.green);
        console.log(consola);
    }
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
