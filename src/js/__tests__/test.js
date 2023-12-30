import {Team} from "../../js/Team.js";
import {Character} from "../../js/Character.js";
import { Zombie } from "../../js/Zombie.js";
import {ErrorRepository} from "../../js/ErrorRepository.js";

const teamAdd = new Team();
const characterAdd = new Character("Vasia","Bowman");
teamAdd.add(characterAdd);
test('Team add new character', () => {
  expect(teamAdd.members).toContain(characterAdd);
});

test('Team add character double choice', () => {
  expect(() => teamAdd.add(characterAdd)).toThrow("Этот персонаж уже выбран!")
});

const character = new Character("Vasia", "Bowman");
const character2 = new Character("Vasia", "Bowman");
const character3 = new Character("Petya", "Bowman");
test('addAll several characters', () => {
  const team = new Team();
  team.addAll(character, character2, character3);
  const setOfCh = new Set();
  setOfCh.add(character);
  setOfCh.add(character2);
  setOfCh.add(character3);
  expect(team.members).toEqual(setOfCh);
});

test('toArray charactersArray', () => {
  const team = new Team();
  team.addAll(character, character2, character3);
  const arrayOfCh = new Array();
  arrayOfCh.push(character,character2,character3);
  expect(team.toArray()).toEqual(arrayOfCh);
});

const errorItem = new ErrorRepository();
errorItem.errors.set(1 , "Ошибка с типом 1");
test('ErrorRepository code is present', () => {
  expect(errorItem.translate(1)).toBe(
    "Ошибка с типом 1"
  );
});

test('ErrorRepository code is absent', () => {
  expect(errorItem.translate(2)).toBe(
    "Unknown error"
  );
});


const zombieLevelUp = new Zombie("Вася");
zombieLevelUp.levelUp();
test('Zombie levelUp', () => {

  const comparison = {
       "attack": 48,
       "defence": 12,
       "health": 100,
        "level": 2,
        "name": "Вася",
       "type": "Zombie",
      }

  expect(zombieLevelUp).toEqual(comparison);
});


const zombieDamage = new Zombie("Вася");
zombieDamage.damage(10);
test('Zombie damage', () => {

  const comparison = {
       "attack": 40,
       "defence": 10,
       "health": 91,
        "level": 1,
        "name": "Вася",
       "type": "Zombie",
      }

  expect(zombieDamage).toEqual(comparison);
});


test('name exception', () => {
  expect(() => new Zombie("В")).toThrow(
    "Имя должно быть от 2 до 10 символов!"
  );
});

test('type exception', () => {
  expect(() => new Character("Вася")).toThrow(
    "Недопустимый тип персонажа!"
  );
});

const zombieLevelUpForDead = new Zombie("Вася");
zombieLevelUpForDead.health = 0;
test('Zombie levelUp for dead', () => {
  expect(() => zombieLevelUpForDead.levelUp()).toThrow(
    "Нельзя повысить левел умершего!"
  );
});



