type scoreModTable = [[number, number], number][];
const abilityScoreModifiers: scoreModTable = [
    [[1, 1], -5],
    [[30, 30], 10],
];

// TODO: Add util for casting ability score according to table values 0 - 30 range
export function deriveModifier(abilityScore: number) {
    const matchedRow = abilityScoreModifiers.find((scoreModRow) => {
        const [[lowerBoundRange, upperBoundRange]] = scoreModRow;

        return lowerBoundRange <= abilityScore && abilityScore <= upperBoundRange;
    });

    if (matchedRow) {
        return matchedRow[1];
    }

    return 0;
}
