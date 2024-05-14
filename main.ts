import inquirer from 'inquirer';
import chalk from 'chalk';

let accBal = 100000;
let myPinCode = 4321;

console.log(chalk.bold.greenBright("You're welcome to use our ATM services"));

console.log(chalk.blueBright("Your current balance is: ",accBal));

const pinAnswer = await inquirer.prompt([
    {

        name: "pinNum",
        message: "Enter your Pin Number",
        type: "number"
    
    }
   
]);

if(pinAnswer.pinNum === myPinCode){
    console.log(chalk.blue("Your pin code is correct"));

    let atm = await inquirer.prompt([
        {
            name: "operation",
            message: "please select one operation",
            type: "list",
            choices: ["withdraw","check balance","fast transactions"]
        }
    ]);
    
    if(atm.operation === "withdraw"){
        let amountAns = await inquirer.prompt([
            {
                name: "Amount",
                message: "How many do you want to withdraw? ",
                type: "number"
            }
        ]);

     if(amountAns.Amount <= accBal){
        console.log(chalk.blue("Your transactions is successfully done "))
        console.log(chalk.blue("Now your remaining balance is: ", accBal -= amountAns.Amount));
        console.log(chalk.yellow("Thank You!"));
        
    } else{
        console.log(chalk.red("Sorry! you have insufficient Balance"));
    } 
}
    else if(atm.operation === "check balance") 
        {
        console.log(chalk.blue("Your balance is: ",(accBal)));

    } else if(atm.operation === "fast transactions"){

        let fastcashAns = await inquirer.prompt([
            {
                name: "fastCash",
                message: "Please select one amount which you want to withdraw",
                type: "list",
                choices: ["5000","10000","15000","20000","50000"]

        }
    ]);
     if(fastcashAns.fastCash <= accBal){
        accBal -= fastcashAns.fastCash;
        console.log(chalk.blue("Your transaction is successfully, Now your remaining balance is:", accBal))
        console.log(chalk.yellow("Thank You! :) "));
     } else {
        console.log(chalk.red("Sorry! You have insufficient balance."));
     }

    }
} 
 else{
    console.log(chalk.red("Your pin code is incorrect"));
    console.log(chalk.red("Sorry! You can't perform transactions"));
}

