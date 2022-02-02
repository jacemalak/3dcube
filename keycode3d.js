// index.html, add id="expVar" on target element
// CSS container index.html, add perspective: 1000px;
// CSS target element, add backface-visibility: visible; --> or hidden
// script index.html add --> let pixel = number pixel
// script index.html add --> expVar.style.transform = `translate(-50%,-50%) rotate3d(1,1,1,0deg)`

let x, y, s, z, rx, ry, rz,
    keyCodeObj = {
        keycode: [40, 38, 37, 39, 83, 87, 65, 68, 81, 69, 90, 67, 49, 50, 82, 84],
        key: ['down', 'up', 'left', 'right', 's', 'w', 'a', 'd', 'q', 'e', 'z', 'c', '1', '2', 'r', 't'],
        func: [
            YTambah,
            YKurang,
            XKurang,
            XTambah,
            SKurang,
            STambah,
            ZTambah,
            ZKurang,
            rotYtambah,
            rotYkurang,
            rotXtambah,
            rotXkurang,
            rotZtambah,
            rotZkurang,
            reset,
            getCode
        ]
    },
    length = keyCodeObj.keycode.length;

reset();

function YTambah(a) {
    y += a;
}

function YKurang(a) {
    return y -= a;
}

function XTambah(b) {
    return x += b;
}

function XKurang(b) {
    return x -= b;
}

function ZTambah(c) {
    return z += c;
}

function ZKurang(c) {
    return z -= c;
}


function STambah() {
    return s += 0.1;
}

function SKurang() {
    return s -= 0.1;
}

function rotYtambah(d) {
    return ry += d;
}

function rotYkurang(d) {
    return ry -= d;
}

function rotXtambah(d) {
    return rx += d;
}

function rotXkurang(d) {
    return rx -= d;
}

function rotZtambah(d) {
    return rz += d;
}

function rotZkurang(d) {
    return rz -= d;
}


function reset() {
    x = 0;
    y = 0;
    s = 1;
    z = 0;
    rx = 0;
    ry = 0;
    rz = 0;
}

function getCode() {
    console.log(`translate(-50%, -50%) rotate3d(1, 1, 1, 0deg) translateZ(${z}px) translateY(${y}px) translateX(${x}px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg) scale(${s})`);
}
(() => {
    document.onkeydown = e => {
        {
            for (let i = 0; i < length; i++) {
                switch (e.keyCode) {
                    case keyCodeObj.keycode[i]:
                        if (keyCodeObj.keycode[i] === 83 && keyCodeObj.keycode[i] === 87) {
                            keyCodeObj.func[i](pixel);
                            return pixel = 1;
                        } else {
                            keyCodeObj.func[i](pixel);
                        }
                        console.log(keyCodeObj.key[i]);
                        break;
                    default:
                        break;
                }
            }
        }
        expVar.style.transform = `translate(-50%, -50%) rotate3d(1, 1, 1, 0deg) translateZ(${z}px) translateY(${y}px) translateX(${x}px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg) scale(${s})`;
        console.log(`x: ${x}, y: ${y}, z: ${z}, rx: ${rx}, ry: ${ry}, rz: ${rz}, scale: ${s}`);
    };
})();