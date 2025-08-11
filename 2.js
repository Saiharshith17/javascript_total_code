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
    getBalance(){
        return this.#balance;
    }
}
const mine=new BankAccount();
mine.deposit(5000);
mine.withdraw(2000);
console.log(mine.getBalance());


class MegleeAttack{
    execute(target){
        console.log(`Attacking ${target} with sword`);
    }
}

class MagicSpell{
    execute(target){
        console.log(`Attacking the ${target} with fireball`);
    }
}

class Walk{
    execute(){
        console.log(`Walking forward`);
    }
}

class Fly{
    execute(){
        console.log(`Flying in air`);
    }
}


class Character{
    constructor(name,combatAbility,movementAbility){
        this.name=name;
        this.combatAbility=combatAbility;
        this.movementAbility=movementAbility;
    }

    attack(target){
        console.log(`${this.name} is preparing for attack`);
        this.combatAbility.execute(target);
    }

    move(){
        console.log(`${this.name} begins to move`);
        this.movementAbility.execute();
    }
}
const warrior=new Character('Garen',new MegleeAttack(),new Walk());
warrior.attack("wall");
warrior.move();
