const fs = require('graceful-fs');
const path = require('path');
const Filehound = require('filehound');

const configuration = JSON.parse(fs.readFileSync('./configuration.json'));
var from = configuration.from + '/**/*/*.' + configuration.suffix;
var to = configuration.to;

console.info("From: ", from);
console.info("To: ", to);

search( configuration.suffix , configuration.from);

/**
 * Busca los archivos que coincidan con
 * una extension y lo copia a algun lugar
 * determinado
 * @param suffix extension del archivo
 * @param from ruta donde buscara archivos
 * @param to lugar a donde se copiaran los archivos.
 * @author Jesus Perales.
 */
function search(suffix, from, to){
  let filehound = Filehound.create()
    .ext(suffix)
    .paths(from);

  filehound.find();

  filehound.on('match', (file) => {
    console.log(`found file ${file}`);
    copy( file );
  });

  filehound.on('error', (error) => {
    console.log(`error ${error}`);
  });

  filehound.on('end', (file) => {
    console.log(`********>search complete<********`);
  });
}

/**
 * Copia un archivo a una ruta predeterminada
 * en la variable de configuracion.
 * @param file archivo a copiar
 * @author Jesus Perales.
 */
function copy( file ) {
  let fileName = path.basename( file );
  let readStream = fs.createReadStream( file );
  let writeStream = fs.createWriteStream( configuration.to + fileName );
  readStream.on('error', error => console.error('Error read file', error) );
  writeStream.on('error', error => console.error('Error write file', error) );
  readStream.pipe(writeStream);
  writeStream.on('finish', error => {
    console.info('file copied: ', fileName);
  });
}
