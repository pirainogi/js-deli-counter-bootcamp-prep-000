var katzDeliLine = []; 

function takeANumber(katzDeliLine){
  var number = 0
  number++
  katzDeliLine.push(number);
  return (`Welcome. You are ${number}.`);
}
console.log(takeANumber(katzDeliLine))
console.log(takeANumber(katzDeliLine))
console.log(takeANumber(katzDeliLine))


function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
  return (`There is nobody waiting to be served!`);
  } else {
    var firstCustomer = katzDeliLine.shift();
    return (`Currently serving ${firstCustomer}.`);
  } 
}

function currentLine(line){
   if (line.length === 0){
    return (`The line is currently empty.`)}
  
  var lineLength = [];
  for (var i = 0; i < line.length; i++){
    lineLength.push(` ${i+1}. ${line[i]}`);
  }
  return (`The line is currently:`) + lineLength;   
}    