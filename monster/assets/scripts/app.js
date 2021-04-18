const ATTACK_VALUE = 10;
const STRONG_ATTACK_vALUE = 17;
const MOSTER_ATTACK_VALUE = 14;
const HEAL_PLAYER_VALUE = 20;

const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

const enteredValue = prompt('Maxiumn life for you and the momster', '100');

const chosenMaxLife = parseInt(enteredValue);
let battleLog = [];

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
    chosenMaxLife = 100;
}
let currentMosterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function writeToLog(event) {

}

function reset() {
    currentMosterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function endRound() {
    initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MOSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        alert('You got bonus life');
    }
    if (currentMosterHealth <= 0 && currentPlayerHealth > 0) {
        alert('Player won!')
    } else if (currentPlayerHealth <= 0 && currentMosterHealth > 0) {
        alert('Moster Won!');
    } else if (currentPlayerHealth <= 0 && currentMosterHealth <= 0) {
        alert('You have a draw!');
    }
    if (
        currentMosterHealth <= 0 || currentPlayerHealth <= 0
    ) {
        reset();
    }
}

function attackMonster(attackmode) {
    let maxDamage;
    if (attackmode === MODE_ATTACK) {
        maxDamage = ATTACK_VALUE;
    } else if (attackmode === MODE_STRONG_ATTACK) {
        maxDamage = STRONG_ATTACK_vALUE;
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMosterHealth -= damage;
    endRound();
}

function attackHandler() {
    attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
    attackMonster(MODE_STRONG_ATTACK);
}

function healPlayerHandler() {
    let healValue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_PLAYER_VALUE) {
        alert('You cant heal to more than your max initial health');
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_PLAYER_VALUE;
    }
    increasePlayerHealth(healValue);
    endRound();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);