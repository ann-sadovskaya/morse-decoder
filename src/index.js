const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const CHAR_TABLE = {
    '10': '.',
    '11': '-',
    '00': ''
};

const SPACE = '**********';

function decode(expr) {
    const charArr = expr.match(/.{1,10}/g);
    let result = "";
    for (let char of charArr) {
        if (char === SPACE ) { 
            result += " "
        } else {
            let morseArr = char.match(/.{1,2}/g)
            let morseChar = ""
            for (let morse of morseArr) {
                morseChar += CHAR_TABLE[morse];
            }
            result += MORSE_TABLE[morseChar]
        }
    }
    return result
}


module.exports = {
    decode
}