export const whiteStyle = 'linear-gradient(\n' +
    '  30deg,\n' +
    '  hsl(0deg 0% 82%) 0%,\n' +
    '  hsl(0deg 0% 79%) 10%,\n' +
    '  hsl(0deg 0% 75%) 21%,\n' +
    '  hsl(0deg 0% 72%) 32%,\n' +
    '  hsl(0deg 0% 68%) 43%,\n' +
    '  hsl(0deg 0% 63%) 54%,\n' +
    '  hsl(0deg 0% 61%) 64%,\n' +
    '  hsl(0deg 0% 58%) 74%,\n' +
    '  hsl(0deg 0% 55%) 83%,\n' +
    '  hsl(0deg 0% 52%) 92%,\n' +
    '  hsl(0deg 0% 48%) 100%\n' +
    ')';

export const darkStyle = ' linear-gradient(\n' +
    '            125deg,\n' +
    '            hsl(240deg 56% 55%) 0%,\n' +
    '            hsl(238deg 50% 50%) 24%,\n' +
    '            hsl(237deg 54% 45%) 37%,\n' +
    '            hsl(235deg 58% 41%) 47%,\n' +
    '            hsl(234deg 63% 37%) 57%,\n' +
    '            hsl(232deg 68% 33%) 67%,\n' +
    '            hsl(231deg 73% 29%) 78%,\n' +
    '            hsl(229deg 78% 25%) 98%\n' +
    '    )';

export function setColors(data, color1, color2){
    return 'conic-gradient(\n' +
        `            ${color1} 0deg ${data}deg,\n`+
       `         ${color2} ${data}deg 360deg\n` +
        '    )'

}

