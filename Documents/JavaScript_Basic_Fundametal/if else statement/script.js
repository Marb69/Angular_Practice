

let age = 21;


if(age>=18){

    console.log('Legal age');
}

else if(age<18 && age>5){

    console.log('to young');
    
}

else{

    console.log("you are a Baby");
}



let grades =81;

if(grades>=75 && grades<=80){

    console.log(`Your are Passed: ${grades}`);
}

else if(grades>=80 && grades <90){

    console.log(`Your are in the average grade your are passed: ${grades} `)
}

else if(grades>=90 && grades<95){

    console.log(`Your are in above average grade your are passed: ${grades} `)
}

else if(grades>=95 || grades===100){

    console.log(`Ok your are passed: ${grades} bright ka ah`);
}

else {

    console.log(`Your are pass-ingot: ${grades} `);
}