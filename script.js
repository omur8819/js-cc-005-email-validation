function emailValidation(email) {
    
    let adress_domain = email.split(".")
    console.log(adress_domain);

    let domain = adress_domain[1];

    if (email.includes("@") && domain.length >= 2 && domain.length <= 3) 
        { return "You entered a valid email." 
    }
    else { return "You entered invalid email!!!" 
    }

}

/*OUTPUT: (2) ['omur8819@gmail', 'com']
You entered a valid email.*/
console.log(emailValidation("omur8819@gmail.com")); 

/*OUTPUT: (2) ['omur8819gmail', 'com']
You entered invalid email!!!*/
console.log(emailValidation("omur8819gmail.com")); 

/*OUTPUT: (2) ['omur8819@gmail', 'co']
You entered a valid email.*/
console.log(emailValidation("omur8819@gmail.co")); 

/*OUTPUT: (2) ['omur8819@gmail', 'c']
You entered invalid email!!!*/
console.log(emailValidation("omur8819@gmail.c")); 

/*OUTPUT: (2) ['omur8819@gmail', 'coma']
You entered invalid email!!!*/
console.log(emailValidation("omur8819@gmail.coma")); 

