interface person{
    firstname : string;
    lastname : string;
}

let nama:person = {
    firstname : 'john',
    lastname : 'doe'
}

function getfullname(person : person){
    return `${person.firstname} ${person . lastname};`
}
console.log(getfullname(nama))

interface Mailable{
    // send(email : string) : any
    // queue(email : string) : any
    send ():any
    queue():any
}

class Mail implements Mailable{
    constructor (public email:string){
    }
    send(): any {
console.log(`sent email to ${this.email}`);
    }
    queue();any{
        console.log(`queue email to ${this.email});
    }
}

