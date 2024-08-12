let words: string[] = [
    'JUEGO',
    'MATEMATICAS',
    'TELEFONO',
    'COMPUTADORA',
    'CELULAR'
];

export function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];

}