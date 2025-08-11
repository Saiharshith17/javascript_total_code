class Car{
    constructor(color,speed){
        this.color=color;
        this.speed=speed;
        
    }
    drive(){
        console.log(`Driving the ${this.color} car at speed of ${this.speed} km/hr`);
    }
}
const myCar=new Car('blue',100);
myCar.drive();


class BankAccount{
    #balance=0;

    deposit(amount){
        if(amount>0){
            this.#balance+=amount;
            console.log(`Deposited ${this.amount} New balance ${this.#balance}`);
        }
    }

    withdraw(amount){
        if(this.#balance>=amount){
            this.#balance-=amount;
            console.log(`Withdrew: ₹${amount}. New balance: ₹${this.#balance}`);

        }else{
            console.log(`Insufficient funds`);
            return;
        }
    }
}
const mine=new BankAccount();
mine.deposit(5000);
mine.withdraw(2000);