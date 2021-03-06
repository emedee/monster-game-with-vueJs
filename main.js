new Vue({
    el: '#app',
    data: {
        display: false,
        displayTwo: true,
        displayThree: false,
        number: Math.round(Math.random()*10),
        numberTwo: Math.round(Math.random()*10),
        myScore: 100,
        monsterScore: 100,
        hits: '',
        monster: '',
        log: []
    },
    methods: {
        changeDisplay() {
            this.display = true;
            this.displayTwo = false;
            this.displayThree = false;
            this.myScore = 100;
            this.monsterScore = 100;
        },
        attack(){
            this.hits = 'HITS';
            this.monster = 'MONSTER';
            this.displayThree = true;
            this.number = Math.round(Math.random()*10);
            this.numberTwo = Math.round(Math.random()*10);
            this.myScore = this.myScore - this.number;
            this.monsterScore = this.monsterScore - this.numberTwo;
            this.width = this.monsterScore;
            this.log.unshift({
                msg : `${this.monster} ${this.hits} Player for ${this.number}`,
                msg2: `PLAYER ${this.hits} ${this.monster} for ${this.numberTwo}`
            })
            if(this.myScore <= 0){
                alert('Game Over!');
                this.myScore = 0;
                this.displayTwo = true;
                this.displayThree = false;
                this.display = false;
            } else if(this.monsterScore <= 0){
                alert('You win!');
                this.monsterScore = 0;
                this.displayTwo = true;
                this.displayThree = false;
                this.display = false;
            }
        },
        specialAttack(){
            this.hits = 'HITS';
            this.monster = 'MONSTER';
            this.displayThree = true;
            this.number = (Math.round(Math.random()*10)) + 1;
            this.numberTwo = (Math.round(Math.random()*10)) + 3;
            this.myScore = this.myScore - this.number
            this.monsterScore = this.monsterScore - this.numberTwo
            this.log.unshift({
                msg : `${this.monster} ${this.hits} Player for ${this.number}`,
                msg2: `PLAYER ${this.hits} ${this.monster} for ${this.numberTwo}`
            })
            if(this.myScore <= 0){
                alert('Game Over!');
                this.myScore = 0;
                this.displayTwo = true;
                this.displayThree = false;
                this.display = false;
            } else if(this.monsterScore <= 0){
                alert('You win!');
                this.monsterScore = 0;
                this.displayTwo = true;
                this.displayThree = false;
                this.display = false;
            }
        },
        heal(){
            this.hits = 'HEALS';
            this.monster = 'HIMSELF';
            this.number = Math.round(Math.random()*10);
            this.numberTwo = 10;
            this.myScore = this.myScore + this.numberTwo;
            this.myScore = this.myScore - this.number;
            this.log.unshift({
                msg : `PLAYER ${this.hits} ${this.monster} FOR ${this.numberTwo}`,
                msg2: `MONSTER HITS PLAYER for ${this.number}`
            })
            if(this.myScore > 100){
                this.myScore = 100;
                this.displayTwo = false;
                this.displayThree = false;
                this.display = true;
            }
            if(this.myScore <= 0){
                alert('Game Over!');
                this.displayTwo = true;
                this.displayThree = false;
                this.display = false;
            } else if(this.monsterScore <= 0){
                alert('You win!');
                this.displayTwo = true;
                this.displayThree = false;
                this.display = false;
            }
        },
        giveUp(){
            this.displayTwo = true;
            this.displayThree = false;
            this.display = false;
            this.log = []
        }
    }
});