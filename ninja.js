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
        console.log(`${this.health}, ${this.speed}, ${this.strength}`);
    }

    drinkSake () {
        this.health += 10;
    }
} 