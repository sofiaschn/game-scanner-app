_xs('white');
_xr(0, 0, _c.width, _c.height);
let s = [[3, 5]];
let a = [11, 5];
let [vx, vy] = [0, 0];

let i = setInterval(() => {
    let d = direction;

    [vx, vy] = {
        [d]: [vx, vy],
        right: [vx || 1, 0],
        left: [vx || -1, 0],
        down: [0, vy || -1],
        up: [0, vy || 1],
    }[d];

    s.unshift([s[0][0] + vx, s[0][1] - vy]);
    let h = s[0];
    if ('' + s[0] == a) {
        while (s.some((v) => '' + v == a)) {
            let r = Math.floor(Math.random() * 16);
            a = [r, r];
        }
    } else {
        s.slice(1, -1).some((v) => '' + v == h) || /16|-/.test('' + s[0])
            ? clearInterval(i)
            : s.pop();
    }

    _xs('white');
    _xr(0, 0, _c.height, _c.width);
    _xs('red');
    _xr(a[0] * 16, a[1] * 16, 16, 16);
    _xs('lime');
    s.forEach(([x, y]) => _xr(x * 16, y * 16, 16, 16));
}, 250);
