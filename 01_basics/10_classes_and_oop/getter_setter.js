class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return this.password.toUpperCase()
    }

    set password(value){
        this.password = value
    }
}

const hitesh = new User("p@piyush.ai", "123")
console.log(piyush.password);
