# dice-pouch

This library is tiny dice roller tool.

## Usage

There two available methods in `DicePouch`:

-   `sequenceRoll(): number[] // return list of all rolls`
-   `sumRoll(): number // return sum of all rolls`

### Parameters API - Roll 1d6

```
    DicePouch.sumRoll(1, 6)
    DicePouch.sequenceRoll(1, 6)
```

### Options API - Roll 2d8

```
    DicePouch.roll({ count: 2, type: 8 })
    DicePouch.sequenceRoll({ count: 2, type: 8 })
```
