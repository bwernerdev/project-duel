const char = createTank()
const monster = createBoss();

// const knight = createKnight('')
// const sorcerer = createSorcerer('')
// const assassin = createAssassin('')
// const tank = createTank('')

stage.start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
)