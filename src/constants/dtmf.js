// DTMF ROW FREQUENCIES
const ROW_1 = 697;
const ROW_2 = 770;
const ROW_3 = 852;
const ROW_4 = 941;

// DTMF COLUMN FREQUENCIES
const COL_1 = 1209;
const COL_2 = 1336;
const COL_3 = 1477;

// DTMF KEY FREQUENCY PAIRS
const KEY_1 = [ROW_1, COL_1];
const KEY_2 = [ROW_1, COL_2];
const KEY_3 = [ROW_1, COL_3];

const KEY_4 = [ROW_2, COL_1];
const KEY_5 = [ROW_2, COL_2];
const KEY_6 = [ROW_2, COL_3];

const KEY_7 = [ROW_3, COL_1];
const KEY_8 = [ROW_3, COL_2];
const KEY_9 = [ROW_3, COL_3];

const KEY_STAR  = [ROW_4, COL_1];
const KEY_0     = [ROW_4, COL_2];
const KEY_POUND = [ROW_4, COL_3];

// DTMF KEYPAD LABELS AND FREQUENCY PAIRS
export const KEYPAD = [
    [ ['1', KEY_1],    ['2', KEY_2], ['3', KEY_3], ],   // KEYPAD ROW 1
    [ ['4', KEY_4],    ['5', KEY_5], ['6', KEY_6], ],   // KEYPAD ROW 2
    [ ['7', KEY_7],    ['8', KEY_8], ['9', KEY_9], ],   // KEYPAD ROW 3
    [ ['*', KEY_STAR], ['0', KEY_0], ['#', KEY_POUND] ] // KEYPAD ROW 4
];