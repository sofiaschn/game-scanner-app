let ctx = canvas.getContext('2d');
let snake = [[8, 8]],
    apple = [4, 4],
    [dx, dy] = [0, 0];

setInterval(() => {
    switch (direction) {
        case 'up':
            [dx, dy] = [0, -1];
            break;
        case 'down':
            [dx, dy] = [0, 1];
            break;
        case 'left':
            [dx, dy] = [-1, 0];
            break;
        case 'right':
            [dx, dy] = [1, 0];
            break;
    }
    snake.unshift([(snake[0][0] + dx) & 15, (snake[0][1] + dy) & 15]);
    if ('' + snake[0] == apple) {
        do {
            apple = [
                Math.floor(Math.random() * 16),
                Math.floor(Math.random() * 16),
            ];
        } while (snake.some((seg) => '' + seg == apple));
    } else if (snake.slice(1).some((seg) => '' + seg == snake[0])) {
        snake.splice(1);
    } else {
        snake.pop();
    }
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.height, canvas.width);
    ctx.fillStyle = 'red';
    ctx.fillRect(apple[0] * 16, apple[1] * 16, 16, 16);
    ctx.fillStyle = 'lime';
    snake.forEach(([x, y]) => ctx.fillRect(x * 16, y * 16, 16, 16));
}, 125);
