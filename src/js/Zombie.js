import { Character } from '../js/Character.js';

export class Zombie extends Character {
	constructor(name) {
		super(name, "Zombie");
		this.type = "Zombie";
        this.attack = 40;
        this.defence = 10;
	}
}