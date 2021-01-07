/*
This program reads and parses all lines from csv files countries2.csv into an array (countriesArray) of arrays; each nested array represents a country.
The initial file read is synchronous. The country records are kept in memory.
*/
 
var fs = require('fs');
var parse = require('csv-parse');
const { exec } = require('child_process');
var n = 0;
var bulk_insert = "";
 
var inputFile=process.argv[2];

console.log(`Processing Alb Log file: ${inputFile}`);

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}  
 
var parser = parse({delimiter: ' '}, function (err, data) {
    // when all countries are available,then process them
    // note: array element at index 0 contains the row of headers that we should skip
    data.forEach(function(line) {
                    n++;
                    bulk_insert = "("+ `'${line[0]}','${line[1]}','${line[2]}','${line[3]}','${line[4]}','${line[5]}','${line[6]}','${line[7]}','${line[8]}','${line[9]}','${line[12]}','${line[16]}','${line[21]}'`+ ")," + bulk_insert 
                    
     if(n==200 ){
       n=0;
     // console.log `${bulk_insert}`
      insertcmd = `INSERT INTO prod_alb_logs (method,timestamp,albIdentity,Clinetip,Tragetip,request_processing_time,target_processing_time,response_processing_time,elb_status_code,target_status_code,request,target_group_arn,request_creation_time) VALUES${bulk_insert.replace(/(^,)|(,$)/g, "")};`
      bulk_insert = "";
      
      subCommand = '"'+`${insertcmd}`+'"'
    //  console.log `${subCommand}`
    command = `mysql -h localhost -P 3306 -u root  production_log_db -proot -e ${subCommand}`
    exec(`${command}`, (err, stdout, stderr) => {
      bulk_insert = ""
  if (err) {
    // node couldn't execute the command
   console.log `${err}`;
    return;
  }
  // the *entire* stdout and stderr (buffered)
  console.log(`stdout: ${stdout}`);
  console.log(`stdout: ${stderr}`);
});
     }



    });   
    
    console.log `${n}`
    n=0;
  // console.log `${bulk_insert}`
  insertcmd = `INSERT INTO prod_alb_logs (method,timestamp,albIdentity,Clinetip,Tragetip,request_processing_time,target_processing_time,response_processing_time,elb_status_code,target_status_code,request,target_group_arn,request_creation_time) VALUES${bulk_insert.replace(/(^,)|(,$)/g, "")};`
   bulk_insert = "";
   
   subCommand = '"'+`${insertcmd}`+'"'
 //  console.log `${subCommand}`
   command = `mysql -h localhost -P 3306 -u root  production_log_db -proot -e ${subCommand}`
 exec(`${command}`, (err, stdout, stderr) => {
   bulk_insert = ""
   console.log `${n}`
if (err) {
 // node couldn't execute the command
console.log `${err}`;
 return;
}
// the *entire* stdout and stderr (buffered)
console.log(`stdout: ${stdout}`);
console.log(`stdout: ${stderr}`);
});
    
});



// read the inputFile, feed the contents to the parser
fs.createReadStream(inputFile).pipe(parser);
