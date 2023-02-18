const defaultCharacter = {
    name: '',
    life: 1,
    maxLife: 1,
    attack: 0,
    defense: 0
}

const createKnight = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 100,
        maxLife: 100,
        attack: 10,
        defense: 8
    }
}

const createSorcerer = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 50,
        maxLife: 50,
        attack: 15,
        defense: 5
    }
}

const createAssassin = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 80,
        maxLife: 80,
        attack: 12,
        defense: 7
    }
}

const createTank = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 200,
        maxLife: 200,
        attack: 6,
        defense: 15
    }
}


const createLittleMonster = () => {
    return {
        ...defaultCharacter,
        name: 'Little Monster',
        life: 40,
        maxLife: 40,
        attack: 4,
        defense: 4
    }
}

const createBigMonster = () => {
    return {
        ...defaultCharacter,
        name: 'Big Monster',
        life: 60,
        maxLife: 60,
        attack: 6,
        defense: 6
    }
}

const createBoss = () => {
    return {
        ...defaultCharacter,
        name: 'Boss',
        life: 120,
        maxLife: 120,
        attack: 16,
        defense: 6
    }
}

const stage = {
    fighter1: null,
    fighter2: null,
    fighter1El: null,
    fighter2El: null,

    start(fighter1, fighter2, fighter1El, fighter2El) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;

        this.fighter1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));
        this.fighter2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));

        this.update()
    },

    update() {
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`

        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`

        const ulElement = document.querySelector('.log');

        ulElement.scrollTo(0, ulElement.scrollHeight)

    },
    doAttack(attacking, attacked) {
        if(attacking.life <= 0) {
            alert(`${attacking.name} ja está morto!`)
            return;
        } else if (attacked.life <= 0) {
            alert(`${attacked.name} ja está morto!`)
            return;
        }

        const attackFactor = (Math.random() * 2).toFixed(2);
        const defenseFactor = (Math.random() * 2).toFixed(2);

        const actualAttack = attacking.attack * attackFactor
        const ActualDefense = attacked.defense * defenseFactor

        if(actualAttack > ActualDefense) {
            attacked.life -= actualAttack;
            attacked.life = attacked.life < 0 ? 0 : attacked.life;
            log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}!`)
        } else {
            log.addMessage(`${attacked.name} conseguiu defender.`)
        }
        
        this.update();
    }
}

const log = {
    list: [],
    addMessage(msg) {
        this.list.push(msg);
        this.render();
    },
    render() {
        const logEl = document.querySelector('.log');
        logEl.innerHTML = '';

        for(let i in this.list) {
            logEl.innerHTML += `<li>${this.list[i]}</li>`
        }
    }
}

    function clickButton() {
        if (document.querySelector('.fightarea').style.display == 'flex') {
            document.querySelector('.fightarea').style.display = 'none';
            document.querySelector('.char-select-container').style.display = 'flex';
            document.querySelector('.log').style.display = 'none';
        } else {
            document.querySelector('.fightarea').style.display = 'flex'
            document.querySelector('.char-select-container').style.display = 'none';
            document.querySelector('.log').style.display = 'block'
        }
    }

    // if(document.querySelector("Knight")) {
    //     return createKnight()
    // } else if(document.querySelector("Sorcerer")){
    //     return createSorcerer()
    // }   else if(document.querySelector("Assassin")){
    //     return createAssassin()
    // } else if(document.querySelector("Tank")){
    //     return createTank()
    // }