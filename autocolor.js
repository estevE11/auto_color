module.exports = (r, g, b) => {
    const isHex = g == undefined && b == undefined;
    if(isHex) {
        const temp = hexToRgb(r);
        r = temp[0];
        g = temp[1];
        b = temp[2];
    }

    r = r*-1 + 255;
    g = g*-1 + 255;
    b = b*-1 + 255;

    if(isHex) return rgbToHex(r, g, b);

    return [r, g, b];
}


// Copy from https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
// And modified just to ignore #
const hexToRgb = (hex) => {
    hex = hex.replace("#", "");
    let arrBuff = new ArrayBuffer(4);
    let vw = new DataView(arrBuff);
    vw.setUint32(0,parseInt(hex, 16),false);
    let arrByte = new Uint8Array(arrBuff);
    return [arrByte[1], arrByte[2], arrByte[3]];
}

const rgbToHex = (r, g, b) => [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
}).join('')