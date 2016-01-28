"use strict";

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

var iMax = 46;
var jMax = 46;
var x; var y;

var db1 = []
for (x=0;x<iMax;x++) 
{ db1[x]=[]
 for (y=0;y<jMax;y++) 
 {db1[x][y]=0; }}
 
 
for (p = 0; p < 46; p++)
{
    db1[0][p]=p
    db1[p][0]=p
}

 
//-----Crear Array de 45 x 45
//-----------------------------------------------------------------



var p; var q;

//-----------------------------------------------------------------
/*
  for (p=0;p<(db.length-1);p++)
    {   for (q=0;q<5;q++)
        { 
            process.stdout.write(db[p][q])
        }
    }     
*/
//-----------------------------------------------------------------
//Buscar e indexar coincidencias Array de 45 x 45 con header

for(var num=1;num<46;num++)
{   for (p=0;p<(db.length-1);p++)
    {   for (q=0;q<6;q++)
        {   if (num== db[p][q] ) 
            {   for (var i =0;i<6;i++)
                {   for (var num2=1;num2<46;num2++)
                    {   if (num2==db[p+1][i])
                        {
                           db1[num][num2]+= 1
                        }
                    }
                }
            }
        }
    }
}
//Buscar e indexar coincidencias Array de 45 x 45 con header
//-----------------------------------------------------------------



//-----------------------------------------------------------------
//Imprimir Array de 45 x 45 con header

var long45 = 8;

for (p = 0; p < 46; p++) {
    
    for (q = 0; q < long45; q++)
        process.stdout.write(db1[p][q] + '\t');
    {
        process.stdout.write('\n');
    }
}
    
//Imprimir Array de 45 x 45 con header
//-----------------------------------------------------------------


//-----------------------------------------------------------------
//Imprimir en archivo TXT Array de 45 x 45 con header

var filePath = "/Users/jorge/Node/inception/local/45x45.txt" ; 
fs.unlinkSync(filePath);
 
 for (p=0;p<46;p++)
  {   for (q=0;q<46;q++)
              fs.appendFileSync('45x45.txt', db1[p][q] + '\t')
                {
                    fs.appendFileSync('45x45.txt','\n')
                }
        
  }

//Imprimir en archivo TXT Array de 45 x 45 con header 
//-----------------------------------------------------------------






//-----------------------------------------------------------------
//----Crear Array de 6 x 45 Desviacion Estandard

var iMax = 12;
var jMax = 46;
var p; var q;

var db_destd = []
for (p=0;p<iMax;p++) 
{ db_destd[p]=[]
 for (q=0;q<jMax;q++) 
 {db_destd[p][q]=0; }}
 
 console.log("Desviacion Estandard") 
 
for(var num=0;num<46;num++)
    {   for (var num2=0;num2<6;num2++)
        { if (db1[0][num] == db[(db.length-1)][num2])
               for (var i =0;i<46;i++)
             {
               db_destd[num2+1][i] = db1[num][i] 
             }
          else if (db1[0][0] == 0)
               for (var i =0;i<46;i++)
             {
               db_destd[0][i] = db1[0][i] 
             }
             
        }
    
    }
    
 
  
//-----------------------------------------------------------------
// Suma Desviacion Estadard
for (var p1 = 1; p1<46 ; p1++)
    {   for (var q1 = 1; q1<7 ;q1++)
            {
                db_destd[7][p1] += db_destd[q1][p1]
            }
    }
// Suma Desviacion Estadard
//-----------------------------------------------------------------

//-----------------------------------------------------------------
// Imprimir contenido del Array  db_destd (Desviacion Estandard) 
 for (p = 0; p < 11; p++) {
    for (q = 0; q < 8; q++)
        process.stdout.write(db_destd[p][q] + '\t');
    {
        process.stdout.write('\n');
    }
}
// Imprimir contenido del Array  db_destd (Desviacion Estandard) 
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

