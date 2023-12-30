export class Character {
    constructor(name, type) {
        if ((name.length < 2) || (name.length > 10)) {
            throw new Error("Имя должно быть от 2 до 10 символов!");
        }
        const arrayTypes = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];
        if (arrayTypes.indexOf(type) === -1) {
            throw new Error("Недопустимый тип персонажа!")
        }
        this.name = name;
        this.health = 100;
        this.level = 1;
    }

    levelUp() {
        if (this.health === 0) {
            throw new Error("Нельзя повысить левел умершего!")
        }
        this.level += 1;
        this.attack = this.attack * 1.2;
        this.defence = this.defence * 1.2;
        this.health = 100;
    }

    damage(points) {
        this.health -= Math.min(points * (1 - this.defence / 100), this.health);
    }
}