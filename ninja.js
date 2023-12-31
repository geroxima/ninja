class Ninja {
    constructor (name) {
        this.name = name;
        this.health = 10;    
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(this.name);
    }

    showStats () {
        console.log(` Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }

    drinkSake () {
        this.health += 10;
    }
} 

class Sensei extends Ninja {
    constructor (name) {
        super(name);
        this.wisdom = 10;
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
    }

    speakWisdom () {
        super.drinkSake();
        console.log("Remember, even the great coders started with 'Hello World' and not 'Hello Perfect Code'. Perfection is overrated, but debugging skills are legendary!");
    }
}

const sensei = new Sensei("Jiraiya");
sensei.speakWisdom();
sensei.showStats();