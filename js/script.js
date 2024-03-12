function Hamburger(bun, garnish, cheese, sauce, meat, pattyCount, extras) {
    this.bun = bun;
    this.garnish = garnish;
    this.cheese = cheese;
    this.sauce = sauce;
    this.meat = meat;
    this.pattyCount = pattyCount;
    this.extras = extras;
}

Hamburger.prototype.describe = function() {
    return `This hamburger has a ${this.bun} bun, ${this.garnish} garnish, ${this.cheese} cheese, ${this.sauce} sauce, a ${this.meat} patty, ${this.pattyCount} of them, and ${this.extras}.`;
}

document.getElementById('buildButton').addEventListener('click', function() {
    let bun = document.getElementById('bun').value;
    let garnish = document.getElementById('garnish').value;
    let cheese = document.getElementById('cheese').value;
    let sauce = document.getElementById('sauce').value;
    let meat = document.getElementById('meat').value;
    let pattyCount = document.getElementById('pattyCount').value;
    let extras = document.getElementById('extras').value;
    let myBurger = new Hamburger(bun, garnish, cheese, sauce, meat, pattyCount, extras);
    document.getElementById('output').textContent = myBurger.describe();
});