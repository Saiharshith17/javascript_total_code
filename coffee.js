class Espresso{
    constructor(){
        this.cost=150;
        this.description="Espresso";
    }
}
class Decaf{
    constructor(){
        this.cost=130;
        this.description="Decaf";
    }
}

class Milk{
    constructor(coffee){
        this.coffee=coffee;
    }
    cost(){
        return this.coffee.cost()+30;
    }
    getDescription(){
        return this.getDescription()+",Milk";
    }

}

class Sugar{
    constructor(coffee){
        this.coffee=coffee;
    }
    cost(){
        return this.coffee.cost()+30;
    }
    getDescription(){
        return this.getDescription()+",Milk";
    }
}
