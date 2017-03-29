new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 90,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.monsterHealth = 100;
            this.playerHealth = 100;
            this.turns = [];
        },
        attach: function () {
            var damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.log(true, damage);


            if (this.checkWin()){
                return;
            }

            this.monsterAttacks();
        },
        specialAttack: function () {
            var damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;
            this.log(true, damage);
            if (this.checkWin()){
                return;
            }
            this.monsterAttacks();
        },
        monsterAttacks: function () {
            var damage = this.calculateDamage(3, 12);
            this.log(false, damage);
            this.playerHealth -= damage;
            this.checkWin();
        },
        heal: function() {
            if (this.playerHealth <=90){
                this.playerHealth +=10;
            } else {
                this.playerHealth = 100;
            }

            this.turns.unshift({
                isPlayer: true,
                text: 'user heal by his self'
            });

            this.monsterAttacks();
        },
        giveUp: function () {
            this.gameIsRunning = false;
        },

        calculateDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },

        checkWin: function () {
            if(this.monsterHealth <= 0){

                if (confirm('You won! New Game?')){
                    this.startGame()
                } else {
                    this.gameIsRunning = false;
                }
                return true;

            } else if(this.playerHealth <= 0){
                if (confirm('You lost! New Game?')){
                    this.startGame()
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        },
        log: function (player, damage) {
            if (player){
                text = 'Player hits Monster far ' + damage;
            } else {
                text = 'Monster hits Player far ' + damage;
            }

            this.turns.unshift({
                isPlayer: true,
                text: text
            });
        }

    }
});