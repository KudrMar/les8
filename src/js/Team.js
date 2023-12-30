
export class Team {
    constructor() {
        this.members = new Set();
    }
    add(character) {
        if (this.members.has(character)) {
            throw new Error("Этот персонаж уже выбран!");
        }
        else {
            this.members.add(character);
        }
    }
    addAll(...characters) {
        characters.forEach((character) => {
            this.members.add(character);
        });
    }
    toArray() {
        return Array.from(this.members);
    }
}