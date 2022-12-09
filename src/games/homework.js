//You might have some game state so you can keep track of
//what is happening:
let score;  //The players score
let alive;  //is the 

//You might have some constants that you use
//In pixels per second

//This is a helper function to compute the distance
//between two sprites
function distance(a, b) {
    let dx = a.x - b.x;
    let dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
}

//This setup function is called once when the game starts
function setup(sprites) {
    score = 0;      //set score to zero
    alive = true;   //Set player to alive

    //Sprite "Images" are just characters,
    //But you can use emojis!
    // https://emojis.wiki/


    //Putting two sprites together you
    //can make more complicated things.
    sprites[1].image = "🧤"; //A fire engine
    sprites[1].x = 300;
    sprites[1].y = 100;
    sprites[2].image = "⚾"; //A fire engine
    sprites[2].x = 300;
    sprites[2].y = 500;

}

/**
 * This function is called every frame
 * @param sprites   Array of sprite objects
 * @param t         Seconds since start of game
 * @param dt        Seconds since last frame (A very small number)
 * @param up        Is up arrow pressed?
 * @param down      "
 * @param left      "
 * @param right     "
 * @param space     Is spacebar pressed?
 * @returns The current score
 */

let speed = 150;
const gravity = 450;

function frame(sprites, t, dt, up, down, left, right, space){ {

    const ball = sprites[2];
    
    sprites[2].y = sprites[2].y - dt * speed;
    
    if (sprites[2].y <= 0){
        ball.y = 450;
        speed = 150;
        ball.x = math.random() * 750;
    }


    return 0;
}
//move glove
if (up) {
    glove.y += walk * dt;
} if (down) {
    glove.y -= walk * dt;
}
if (right) {
    glove.x += walk * dt;
}
if (left) {
    glove.x -= walk * dt;
}
   
    //A very simple repeating animation
    sprites[2].y += Math.sin(t)/10;

    return score;
};

export default {
    name: "Homework",
    instructions: "Write your instructions here",
    icon: "📝", //Choose an emoji icon
    background: {
        //You can put CSS here to change your background
        "background-color": "#555"
    },
    frame,
    setup,
};