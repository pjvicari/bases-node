const fs = require('fs');
const colors = require('colors');
const crearArchivo = async(base = 5, listar = false, limite = 10) => {
    try {
        console.clear();
        let salida = '';
        for(let i=1; i <= limite; i++){
            salida += `${base} x ${i} = ${ base * i}\n`;
            
        }
        if(listar){
            console.log(colors.red(`Tabla del: ${base}`));
            console.log(colors.rainbow(salida));
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
        
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo: crearArchivo
}