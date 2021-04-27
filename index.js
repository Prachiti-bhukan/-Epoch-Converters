
const welcomeNote = () =>
{
console.log("Welcome to the Epoch Converter  \n\nWhat you wish to try\n1. Epoch converter to human date\n2. Human date to epoch date\n\n");
}


const takeInput = () =>
{
  const readLineSync = require('readline-sync');
  const userInput = readLineSync.question('Your Choice---> ');
  if(userInput==1)
  {
    const readLineSync = require('readline-sync');
    const epochNum = readLineSync.question('enter the epoch number\n');
    console.log(toHumanDate(epochNum));

  }

  else if(userInput==2)
  {
     const readLineSync = require('readline-sync');
     const year = readLineSync.question('enter year\n');
     const month = readLineSync.question('enter month\n');
     const date = readLineSync.question('enter date\n');
     const hours = readLineSync.question('enter hours\n');
     const minutes = readLineSync.question('enter minutes\n');
     const seconds = readLineSync.question('enter seconds\n');
     console.log(toEpoch(year,month,date,hours,minutes,seconds));

  }

  else
  {
    console.log("INVALID !!!!");
  }

}

function toHumanDate(epochNum)
{
  const myDate = new Date(epochNum*1000);
  return (myDate.toGMTString()+"\n"+myDate.toLocaleString());

}

function toEpoch(year,month,date,hour,minutes,seconds)
{
  const myDate = new Date(`${month} ${date}, ${year} 0${hour}:${minutes}:${seconds}`); // Your timezone!
  const myEpoch = myDate.getTime()/1000.0;
  return(myEpoch);
}

function driver()
{
 welcomeNote();
 takeInput();
}

driver();