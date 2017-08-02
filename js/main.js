///<reference path='lib/phaser.comments.d.ts' />

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'bumthrust', { preload: preload, create: create, update: update, render: render });

        function preload() {
            game.load.image('bum', 'assets/bum.png');
            game.load.image('poo', 'assets/poo.png');
            game.load.audio('fart', 'assets/fart.ogg')
        }

      
        function create() {


        }

        function update() {



        }

        function render() {


        }