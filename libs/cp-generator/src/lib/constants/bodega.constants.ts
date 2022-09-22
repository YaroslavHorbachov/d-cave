import { DiceTypes } from '../enums';
import { DiceRollerDefinition } from '../interfaces';

export const OWNER_DEFINITION: DiceRollerDefinition = {
    count: 1,
    type: DiceTypes.D6,
    options: [
        {
            matchingRoll: 1,
            playerDescription:
                'Maternal granny who treats you like one of her own kids and fusses over you.',
        },
        {
            matchingRoll: 2,
            playerDescription: 'Bad-tempered retiree who hates everyone. Especially you.',
        },
        {
            matchingRoll: 3,
            playerDescription: 'Bored yo-ganger who got shackled to the register by their parents.',
        },
        {
            matchingRoll: 4,
            playerDescription: 'Overly friendly type that keeps trying to hit on you—badly.',
        },
        {
            matchingRoll: 5,
            playerDescription:
                'The total stoner who just waves you through and says, "Whatever, man..."',
        },
        {
            matchingRoll: 6,
            playerDescription: `Middle-aged person whom you can't understand, but who seems to always be arguing with you anyway.`,
        },
    ],
};

export const COLORFUL_CHARACTER_ONE: DiceRollerDefinition = {
    count: 1,
    type: DiceTypes.D6,
    options: [
        {
            matchingRoll: 1,
            playerDescription: 'The customer who mumbles a lot, then pauses to stare at you.',
        },
        {
            matchingRoll: 2,
            playerDescription: 'The customer who obnoxious and drunk',
        },
        {
            matchingRoll: 3,
            playerDescription:
                'The stoned customer who "sees things" and keeps trying to bat them out of the air.',
        },
        {
            matchingRoll: 4,
            playerDescription:
                'The joygirl/boy who is short on cash but will "do you a favor" if you buy them some Smash.',
        },
        {
            matchingRoll: 5,
            playerDescription:
                'Off-duty Lawman looking for a quick bite to eat and not in a chatty mood.',
        },
        {
            matchingRoll: 6,
            playerDescription: `The customer who is terrified to be down on The Street and is about to jump (and maybe pull a gun) on anyone who approaches them.`,
        },
    ],
};

export const COLORFUL_CHARACTER_TWO: DiceRollerDefinition = {
    count: 1,
    type: DiceTypes.D6,
    options: [
        {
            matchingRoll: 1,
            playerDescription:
                'The yo-ganger who is casing the place trying to work up the nerve to rob it.',
        },
        {
            matchingRoll: 2,
            playerDescription: 'The ganger who is going to try and bust the place up in 1d6 turns.',
        },
        {
            matchingRoll: 3,
            playerDescription:
                'The small-time ganger who tries to rough the Owner up for "protection" money',
        },
        {
            matchingRoll: 4,
            playerDescription:
                'The adorable runaway 4-year-old who has inexplicably wandered in looking for "Mommy."',
        },
        {
            matchingRoll: 5,
            playerDescription:
                'The couple who are having a loud fight as they enter the store, and it just gets louder.',
        },
        {
            matchingRoll: 6,
            playerDescription: `Wealthy couple wearing too much expensive stuff wandering in to pick up some booze after a night of high-class partying.`,
        },
    ],
};
