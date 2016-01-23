'usestrict'

//-----------------------------------------------------------------
// Leer archivo de texto

var util = require('util');
const fs = require('fs');

//fs.unlinkSync('/Users/jorge/Node/project/LOCAL/PQRST/45x45.txt');
//console.log('successfully deleted 45x45.txt');


var db = [];
var fileContents = fs.readFileSync('database.txt');
var lines = fileContents.toString().split('\r\n');

// Imprimir longuitud de Arreglo
//util.print(lines.length+'\n');

for (var i = 0; i < lines.length; i++) {
    db.push(lines[i].toString().split(','));
}


// Leer archivo de texto
//-----------------------------------------------------------------


//-----------------------------------------------------------------
//----Testing Fila y Columna


//--------------F--C
//util.print(db[1][5]+'\n');
//--------------F--C

    
//----Testing Fila y Columna
//-----------------------------------------------------------------



//-----------------------------------------------------------------
//----Crear Array de 45 x 45

var iMax = 45;
var jMax = 45;
var x; var y;

var db1 = []
for (x=0;x<iMax;x++) 
{ db1[x]=[]
 for (y=0;y<jMax;y++) 
 {db1[x][y]=0; }}
 
 
//-----Crear Array de 45 x 45
//-----------------------------------------------------------------

var p; var q;

//-----------------------------------------------------------------


//-----------------------------------------------------------------
//Buscar e indexar coincidencias Array de 45 x 45 con header
for(var num=1;num<46;num++)
{
  for (p=0;p<1485;p++)
    {   for (q=0;q<5;q++)
        { 
            if (num== db[p][q] ) 
            {
                for (var i =0;i<5;i++ )
                {
                    for(var num2=1;num2<46;num2++)
                    {
                         if(num2==db[p+1][i])
                        {
                            db1[num2-1][num-1] += 1
                        }
                    }
                }
            }
        }
    }
    
}  
//Imprimir Array de 45 x 45 con header
//-----------------------------------------------------------------


//-----------------------------------------------------------------
//Imprimir Array de 45 x 45 con header

var long45 = 8;

 for (p=0;p<(long45+1);p++) {  process.stdout.write((p) +'\t') } 
 process.stdout.write('\n');
 
  for (p=0;p<45;p++)
    { process.stdout.write((p+1) + '\t');
          for (q=0;q<long45;q++)
          process.stdout.write( db1[p][q] + '\t');
        {
          process.stdout.write('\n');
        }
    }
    
//Imprimir Array de 45 x 45 con header
//-----------------------------------------------------------------


//-----------------------------------------------------------------
//Imprimir en archivo Array de 45 x 45 con header
/*
 for (p=0;p<46;p++) {fs.appendFileSync('45x45.txt' , (p)+'\t')}
 fs.appendFileSync('45x45.txt','\n')
 
 for (p=0;p<45;p++)
  { fs.appendFileSync('45x45.txt',(p+1)+'\t')
        { 
          for (q=0;q<45;q++)
              fs.appendFileSync('45x45.txt', db1[p][q] + '\t')
                {
                    fs.appendFileSync('45x45.txt','\n')
                }
        }
  }
*/
//Imprimir en archivo Array de 45 x 45 con header 
//-----------------------------------------------------------------




//-----------------------------------------------------------------
// Escribir el arreglo en consola

/*
for (var i = 0; i < lines.length; i++)
      { for (var j = 0; j < 6; j++) {
        // process.stdout.write(db[i][j]+'\t');
            util.print(db[i][j]+'\t');  }
util.print('\r\n');
      } ;

*/
// Escribir el arreglo en consola
//-----------------------------------------------------------------


//-----------------------------------------------------------------
// Escribir arreglo en el Archivo
/*
for (var x = 0; x < lines.length; x++)
       {for (var y = 0; y < 6; y++) {
       fs.appendFileSync('out.txt',db[x][y]+'\t'); }
fs.appendFileSync('out.txt','\r\n'); } ;
 */

// Escribir arreglo en el Archivo 
//-----------------------------------------------------------------

//-----------------------------------------------------------------
//Escribir archivo con ruta universal 



/* 
var path = require('path');
var fs = require('fs');
 
var filePath = path.join(__dirname, 'files', 'test.txt');
 
fs.writeFile(filePath, 'Write text to file, overwrite all.', function(err) {
    if(err) {
        return console.log('Unable to write file ' + err);
    }
    console.log('File was saved');
});


*/

  
//Escribir archivo con ruta universal 
//-----------------------------------------------------------------

