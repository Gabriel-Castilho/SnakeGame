let difficulty = false;
function playGame() {
    let canvas = document.getElementById("snake")
    let context = canvas.getContext("2d");
    let box = 32;
    let snake = [];
    snake[0] = {
        x: 8 * box,
        y: 8 * box
    }
    let direction = "right";
    let game = setInterval(initGame, 100);
    let food = {
        x: Math.floor(Math.random() * 15 + 1) * box,
        y: Math.floor(Math.random() * 15 + 1) * box
    }

    let points = 0


    document.addEventListener("keydown", update);


    function createBG() {
        context.fillStyle = "lightgreen"
        context.fillRect(0, 0, 16 * box, 16 * box)
    }

    function createSnake() {
        for (i = 0; i < snake.length; i++) {
            context.fillStyle = "green";
            context.fillRect(snake[i].x, snake[i].y, box, box);

        }
    }
    function drawFood() {
        context.fillStyle = 'red'
        context.fillRect(food.x, food.y, box, box)
    }



    function initGame() {
        
        if (difficulty == false) {
            if (snake[0].x > 15 * box && direction == "right") {
                snake[0].x = 0
            }
            if (snake[0].x < 0 && direction == "left") {
                snake[0].x = 16 * box
            }
            if (snake[0].y > 15 * box && direction == "up") {
                snake[0].y = 0
            }
            if (snake[0].y < 0 && direction == "down") {
                snake[0].y = 16 * box
            }
        } else {
            if (snake[0].x > 15 * box && direction == "right") {
                clearInterval(game)
                alert("Game Over")
                
            }
            if (snake[0].x < 0 && direction == "left") {
                clearInterval(game)
                alert("Game Over")
                
            }
            if (snake[0].y > 15 * box && direction == "up") {
                clearInterval(game)
                alert("Game Over")
                
            }
            if (snake[0].y < 0 && direction == "down") {
                clearInterval(game)
                alert("Game Over")
                
            }
        }
   
        for (i = 1; i < snake.length; i++) {
            if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
                clearInterval(game)
                alert("Game Over")
            }
        }

        let snakeX = snake[0].x
        let snakeY = snake[0].y
        if (direction == "right") {
            snakeX += box
        }
        if (direction == "left") {
            snakeX -= box
        }
        if (direction == "up") {
            snakeY += box
        }
        if (direction == "down") {
            snakeY -= box
        }

        if (snakeX != food.x || snakeY != food.y) {
            snake.pop()


        }
        else {
            food.x = Math.floor(Math.random() * 15 + 1) * box
            food.y = Math.floor(Math.random() * 15 + 1) * box

             points = points + 10;
            document.getElementById("points").innerHTML =points

        }


        let newHead = {
            x: snakeX,
            y: snakeY
        }

        snake.unshift(newHead);

        createBG();
        createSnake();
        drawFood();
    }

    function update(event) {
        if (event.keyCode == 37 && direction != 'right') {
            direction = "left"
        }
        if (event.keyCode == 39 && direction != 'left') {
            direction = 'right'
        }
        if (event.keyCode == 38 && direction != "up") {
            direction = "down"
        }
        if (event.keyCode == 40 && direction != 'down') {
            direction = "up"
        }
    }

}