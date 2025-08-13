


class UIFactory{
    constructor(os){
        this.os=os;
    }
    
}

class Button{
    constructor(UIFactory){
     this.UIFactory=UIFactory;
    }
    render(){
        console.log(`Render a ${this.UIFact}`)
    }
}