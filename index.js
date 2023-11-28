const input = "21993288124181194544151768608276317266518152707004350496656109487991652638056296116170567811467310965258607618363751510328043166989385341270249702600986795";

function repeatingPairs(string) {
    const pairCount = {}
    for(let i = 0; i < string.length - 1; i+= 2) {
        const pair = string.slice(i, i + 2);
        pairCount[pair] = (pairCount[pair] || 0) +1;
    }
    let maxPair = null;
    let maxCount = 0;

    for(const pair in pairCount) {
        if (pairCount[pair] > maxCount) {
            maxPair = pair;
            maxCount = pairCount[pair]
        }
    }
    if (maxPair !== null) {
        console.log(`Pair: ${maxPair} repeats: ${maxCount} `)
    }
}

console.log(repeatingPairs(input));