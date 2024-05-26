#! /usr/bin/env node
const currency:any = {
    USD:1,// base curreny
    EUR:0.91,
    GBR:0.76,
    INR:74.57,
    PKR:278
};



import inquirer from  'inquirer'

let user_answer =await inquirer.prompt(
    [
        {
           name :'from',
           message:'Enter from currency',
           type: 'list',
           choices:['USD','EUR','GBR','INR','PKR']
        },   
        {
            name :'to',
            message:'Enter from currency',
            type: 'list',
            choices:['USD','EUR','GBR','INR','PKR']
         },
         {
            name:'amount',
            message:'Enter your amount',
            type:'number'
         }    
    ]
)



 let fromAmount =  currency[user_answer.from];//exchange rate
 let toAmount =  currency[user_answer.to];// exchange rate
 let amount= user_answer.amount;
 let baseAmount = amount / fromAmount;//usd base currency //4
 let convertedAmount = baseAmount * toAmount;
 console.log(convertedAmount);
   console.log(fromAmount);
   console.log(toAmount);
   console.log(amount);

