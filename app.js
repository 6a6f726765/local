"use strict";
//1.20

//-----------------------------------------------------------------
// Leer archivo de texto

var util = require('util');
const fs = require('fs');
const math = require('mathjs')
var next = 1 // Numero Menor
var back = next+1 // Numero Mayor 


//fs.unlinkSync('/Users/jorge/Node/project/LOCAL/PQRST/45x45.txt');
//console.log('successfully deleted 45x45.txt');


var db = [];
var fileContents = fs.readFileSync('database.txt')
var lines = fileContents.toString().split('\r\n')

// Imprimir longuitud de Arreglo
//util.print(lines.length+'\n');



for (var i = 0; i < lines.length; i++) 
    {
        db.push(lines[i].toString().split(','))
    }

// Leer archivo de texto
//-----------------------------------------------------------------

for (next ;next < db.length ;next++ ) 
{

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
{   for (p=0;p<(db.length-back);p++)
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
/*
var long45 = 11;
       

for (p = 0; p < 46; p++) 
    {   for (q = 0; q < long45; q++)
        process.stdout.write(db1[p][q] + '\t');
            {
                process.stdout.write('\n');
            }
}
*/
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
//----Crear Array de 6 x 45 
//----  Desviacion Estandard 
//----  Desviacion Estandard Resultado VERTICAL  
//----  Desviacion Estandard HORIZONTAL 

// db_stdev == Desviacion Estandard 
var pMax = 12;
var qMax = 46;
var p; var q;

var db_stdev = []
for (p=0;p<pMax;p++)
{ db_stdev[p]=[]
 for (q=0;q<qMax;q++)
 {db_stdev[p][q]=0; }}

// db_stdev_line == Desviacion Estandard Resultado 


var db_stdev_line = []
for (p=0;p<pMax;p++)
{ db_stdev_line[p]=[]
 for (q=0;q<qMax;q++)
 {db_stdev_line[p][q]=0; }}
 
// db_STDEV_XLINE == Desviacion Estandard HORIZONTAL 

 
 var db_stdev_xline = []
for (p=0;p<pMax;p++)
{ db_stdev_xline[p]=[]
 for (q=0;q<qMax;q++)
 {db_stdev_line[p][q]=0; }}
 
 


//-----------------------------------------------------------------
// Pasar los valores de la DB1 a la db_stdev

for(var num=0;num<46;num++)
    {   for (var num2=0;num2<6;num2++)
        { if (db1[0][num] == db[(db.length-back)][num2])
               for (var i =0;i<46;i++)
             {
               db_stdev[num2+1][i] = db1[num][i]
             }
          else if (db1[0][0] == 0)
               for (var i =0;i<46;i++)
             {
               db_stdev[0][i] = db1[0][i]
             }

        }

    }
//    
//-----------------------------------------------------------------
// Pasar los valores de la DB1 a la db_STDEV_XLINE == Desviacion Estandard HORIZONTAL 


for(var num=0;num<46;num++)
    {   for (var num2=0;num2<6;num2++)
        { if (db1[0][num] == db[(db.length-back)][num2])
               for (var i =0;i<46;i++)
             {
               db_stdev_xline[num2+1][i] = db1[num][i]
             }
          else if (db1[0][0] == 0)
               for (var i =0;i<46;i++)
             {
               db_stdev_xline[0][i] = db1[0][i]
             }

        }

    }
//    
//-----------------------------------------------------------------





//-----------------------------------------------------------------
// Suma Desviacion Estadard
for (var p1 = 1; p1<46 ; p1++)
    {   for (var q1 = 1; q1<7 ;q1++)
            {
                db_stdev[7][p1] += db_stdev[q1][p1]
            }
    }
// Suma Desviacion Estadard
//-----------------------------------------------------------------



//-----------------------------------------------------------------
// Calcular Desviacion Standard el Promedio de db_stdev
for (var i1=1;i1<=45;i1++) 
        {
        db_stdev[9][i1] = math.std( [
                                    db_stdev[1][i1],
                                    db_stdev[2][i1],
                                    db_stdev[3][i1],
                                    db_stdev[4][i1],
                                    db_stdev[5][i1],
                                    db_stdev[6][i1]
                                    ],
                                    //'biased'
                                    'uncorrected'
                                ) 

        db_stdev[8][i1] = math.mean(db_stdev[1][i1],
                                    db_stdev[2][i1],
                                    db_stdev[3][i1],
                                    db_stdev[4][i1],
                                    db_stdev[5][i1],
                                    db_stdev[6][i1]
                                ) 
                                
        db_stdev[10][i1] = db_stdev[8][i1]-db_stdev[9][i1]
        db_stdev[11][i1] = db_stdev[8][i1]+db_stdev[9][i1]
        

        }
        

db_stdev[7][0]="SUMA"        
db_stdev[8][0]="MEAN"
db_stdev[9][0]="STD "
db_stdev[10][0]="MIN "
db_stdev[11][0]="MAX "

        
// Calcular Desviacion Standard el Promedio de db_stdev 
//-----------------------------------------------------------------





//-----------------------------------------------------------------
// Pasar datos de db_stdev a db_stdev_line VERTICAL

for (var f3=0;f3<7;f3++)
    {   for (var c3=0;c3<qMax;c3++)
            {
                db_stdev_line[f3][c3] = db_stdev[f3][c3]
            }
    }
// Pasar datos de db_stdev a db_stdev_line 
//-----------------------------------------------------------------



//-----------------------------------------------------------------
// Eliminar valores fueras de la Desviacion Estantader HORIZONTAL
for (var p3=1;p3<7;p3++)
    {   for (var q3=0;q3<=45;q3++)
                {   if (db_stdev_line[p3][q3] < db_stdev[10][q3] || db_stdev_line[p3][q3] > db_stdev[11][q3]  )
                        {
                            db_stdev_line[p3][q3]= 0
                        }
                }
    }
// Eliminar valores fueras de la Desviacion Estantader
//-----------------------------------------------------------------





//-----------------------------------------------------------------
// Suma Desviacion Estadard Resultado
for (var f5 =1;f5<7;f5++) 
        {   for(var c5 =1;c5<46;c5++)
            {
                db_stdev_line[7][c5] += db_stdev_line[f5][c5]
            }
}

db_stdev_line[7][0]="SUMA"

// Suma Desviacion Estadard Resultado
//-----------------------------------------------------------------



//-----------------------------------------------------------------
// Calcular promedio y desviacion Stantadar db_stdev_line

db_stdev_line[8][0] = math.mean( db_stdev_line[7][1],
                                db_stdev_line[7][2],
                                db_stdev_line[7][3],
                                db_stdev_line[7][4],
                                db_stdev_line[7][5],
                                db_stdev_line[7][6],
                                db_stdev_line[7][7],
                                db_stdev_line[7][8],
                                db_stdev_line[7][9],
                                db_stdev_line[7][10],
                                db_stdev_line[7][11],
                                db_stdev_line[7][12],
                                db_stdev_line[7][13],
                                db_stdev_line[7][14],
                                db_stdev_line[7][15],
                                db_stdev_line[7][16],
                                db_stdev_line[7][17],
                                db_stdev_line[7][18],
                                db_stdev_line[7][19],
                                db_stdev_line[7][20],
                                db_stdev_line[7][21],
                                db_stdev_line[7][22],
                                db_stdev_line[7][23],
                                db_stdev_line[7][24],
                                db_stdev_line[7][25],
                                db_stdev_line[7][26],
                                db_stdev_line[7][27],
                                db_stdev_line[7][28],
                                db_stdev_line[7][29],
                                db_stdev_line[7][30],
                                db_stdev_line[7][31],
                                db_stdev_line[7][32],
                                db_stdev_line[7][33],
                                db_stdev_line[7][34],
                                db_stdev_line[7][35],
                                db_stdev_line[7][36],
                                db_stdev_line[7][37],
                                db_stdev_line[7][38],
                                db_stdev_line[7][39],
                                db_stdev_line[7][40],
                                db_stdev_line[7][41],
                                db_stdev_line[7][42],
                                db_stdev_line[7][43],
                                db_stdev_line[7][44],
                                db_stdev_line[7][45]
                                
                                ) 

db_stdev_line[9][0] = math.std(   db_stdev_line[7][1],
                                db_stdev_line[7][2],
                                db_stdev_line[7][3],
                                db_stdev_line[7][4],
                                db_stdev_line[7][5],
                                db_stdev_line[7][6],
                                db_stdev_line[7][7],
                                db_stdev_line[7][8],
                                db_stdev_line[7][9],
                                db_stdev_line[7][10],
                                db_stdev_line[7][11],
                                db_stdev_line[7][12],
                                db_stdev_line[7][13],
                                db_stdev_line[7][14],
                                db_stdev_line[7][15],
                                db_stdev_line[7][16],
                                db_stdev_line[7][17],
                                db_stdev_line[7][18],
                                db_stdev_line[7][19],
                                db_stdev_line[7][20],
                                db_stdev_line[7][21],
                                db_stdev_line[7][22],
                                db_stdev_line[7][23],
                                db_stdev_line[7][24],
                                db_stdev_line[7][25],
                                db_stdev_line[7][26],
                                db_stdev_line[7][27],
                                db_stdev_line[7][28],
                                db_stdev_line[7][29],
                                db_stdev_line[7][30],
                                db_stdev_line[7][31],
                                db_stdev_line[7][32],
                                db_stdev_line[7][33],
                                db_stdev_line[7][34],
                                db_stdev_line[7][35],
                                db_stdev_line[7][36],
                                db_stdev_line[7][37],
                                db_stdev_line[7][38],
                                db_stdev_line[7][39],
                                db_stdev_line[7][40],
                                db_stdev_line[7][41],
                                db_stdev_line[7][42],
                                db_stdev_line[7][43],
                                db_stdev_line[7][44],
                                db_stdev_line[7][45]
                                
                                ) 
                                
db_stdev_line[10][0] =db_stdev_line[8][0]-db_stdev_line[9][0]
db_stdev_line[11][0] =db_stdev_line[8][0]+db_stdev_line[9][0]


// Calcular promedio y desviacion Stantadar db_stdev_line
//-----------------------------------------------------------------

//-----------------------------------------------------------------
// COMENTARIOS

for (var p4 =1;p4<46;p4++)
    {   if (db_stdev_line[7][p4] < db_stdev_line[10][0] 
            
            ) 
            {
                db_stdev_line[8][p4]= db_stdev_line[0][p4]
            }
    }
// COMENTARIOS
//-----------------------------------------------------------------

//-----------------------------------------------------------------

// Imprimir contenido del Array  db_stdev (Desviacion Estandard)

 console.log("Desviacion Estandard")

 for (p = 0; p < pMax; p++) {
    for (q = 0; q < 6; q++)
        process.stdout.write(db_stdev[p][q] + '\t');
    {
        process.stdout.write('\n');
    }
}

// Imprimir contenido del Array  db_stdev (Desviacion Estandard)
//-----------------------------------------------------------------



//-----------------------------------------------------------------
// Imprimir contenido del Array  db_stdev_line (Desviacion Estandard)

console.log("Desviacion Estandard Resultado VERTICAL")

 for (p = 0; p < 12 ; p++) {
    for (q = 0; q < 6; q++)
        process.stdout.write(db_stdev_line[p][q] + '\t');
    {
        process.stdout.write('\n');
    }
}

// Imprimir contenido del Array  db_stdev (Desviacion Estandard)
//-----------------------------------------------------------------


//-----------------------------------------------------------------
// Imprimir contenido del Array  db_stdev_xline (Desviacion Estandard Horizontal)

console.log("Desviacion Estandard Resultado HORIZONTAL")

 for (p = 0; p < 12 ; p++) {
    for (q = 0; q < 6; q++)
        process.stdout.write(db_stdev_xline[p][q] + '\t');
    {
        process.stdout.write('\n');
    }
}


// Imprimir contenido del Array  db_stdev_xline (Desviacion Estandard Horizontal)
//-----------------------------------------------------------------




//console.log("Desviacion Estandard Resultado Posibles")
console.log(db.length-next)
fs.appendFileSync('error1.txt',db.length-next+'\n')
 for (var p5=1;p5<46;p5++)
 {  if (db_stdev_line[8][p5]>0) 
        {   for (var p6=0;p6 <6;p6++) 
                {   if (db[(db.length-next)][p6] == db_stdev_line[8][p5] )       
                        {
                            console.log(db_stdev_line[8][p5] + " ERROR" )   
                            fs.appendFileSync('error1.txt',db_stdev_line[8][p5] + " ERROR"+'\n')  
                        }
                
                }
                
         console.log(db_stdev_line[8][p5] + " CHECK" ) 
                                    
        }
            
 }
/* 
for (var p5=1;p5<46;p5++)
                        {  if (db_stdev_line[8][p5]>0) 
                        {
                                
                            console.log(db_stdev_line[8][p5] + " CHECK" )          
                                            }
                   

*/
         
/*         
console.log(db_stdev_line[11][0])
console.log(db_stdev_line[10][0])                          
      
console.log(db.length-back)
console.log(db[db.length-back][0])
console.log(db.length-next)
console.log(db[db.length-next][0])  

*/

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

}