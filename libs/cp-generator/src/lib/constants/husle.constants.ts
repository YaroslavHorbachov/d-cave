import { DiceTypes, Roles } from '../enums';
import { DiceRollerDefinition } from '../interfaces';

const ROCKERBOY_DEFINITION: DiceRollerDefinition = {
    count: 1,
    type: DiceTypes.D6,
    options: [
        {
            matchingRoll: 1,
            playerDescription: 'Played a small local gig',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '200 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '300 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '600 eb',
                },
            ],
        },
        {
            matchingRoll: 2,
            playerDescription: 'No gigs or jobs to be had this week',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '0 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '100 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '300 eb',
                },
            ],
        },
        {
            matchingRoll: 3,
            playerDescription: 'Played a big gig for a rich Corporate or Local Personality',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '300 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '500 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '800 eb',
                },
            ],
        },
        {
            matchingRoll: 4,
            playerDescription: 'Got some royalties in for your most recent Data Pool download',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '300 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '500 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '800 eb',
                },
            ],
        },
        {
            matchingRoll: 5,
            playerDescription: 'Opening act for a Big-Name group',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '300 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '500 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '800 eb',
                },
            ],
        },
        {
            matchingRoll: 6,
            playerDescription: 'Personal appearance netted you a large fee',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '200 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '300 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '600 eb',
                },
            ],
        },
    ],
};

const SOLO_DEFINITION: DiceRollerDefinition = {
    count: 1,
    type: DiceTypes.D6,
    options: [
        {
            matchingRoll: 1,
            playerDescription: 'Bodyguard work, low-end client',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '100 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '200 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '500 eb',
                },
            ],
        },
        {
            matchingRoll: 2,
            playerDescription: 'Bodyguard work, high-end client',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '200 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '300 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '600 eb',
                },
            ],
        },
        {
            matchingRoll: 3,
            playerDescription: 'Difficult hit or extraction',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '200 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '300 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '600 eb',
                },
            ],
        },
        {
            matchingRoll: 4,
            playerDescription: 'Hired out as a muscle to a Fixer, Corp, or Gang',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '100 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '200 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '500 eb',
                },
            ],
        },
        {
            matchingRoll: 5,
            playerDescription: 'Attracted undue attention, had to lay low.',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '0 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '100 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '300 eb',
                },
            ],
        },
        {
            matchingRoll: 6,
            playerDescription: 'Basic enforcer or hitman work for a local Corp.',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '100 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '200 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '500 eb',
                },
            ],
        },
    ],
};

const NETRUNNER_DEFINITION: DiceRollerDefinition = {
    count: 1,
    type: DiceTypes.D6,
    options: [
        {
            matchingRoll: 1,
            playerDescription: 'Cracked a small system and sold the data.',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '100 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '200 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '500 eb',
                },
            ],
        },
        {
            matchingRoll: 2,
            playerDescription: 'Cracked a major Corporate system and sold the data',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '200 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '300 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '600 eb',
                },
            ],
        },
        {
            matchingRoll: 3,
            playerDescription: 'You got sidetracked and didn’t hack anything this week.',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '0 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '100 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '300 eb',
                },
            ],
        },
        {
            matchingRoll: 4,
            playerDescription: 'Found a valuable data cache in an abandoned system and sold it',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '200 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '300 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '600 eb',
                },
            ],
        },
        {
            matchingRoll: 5,
            playerDescription:
                'Brought down a major system with ransomware and got paid off to uninstall it.',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '200 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '300 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '600 eb',
                },
            ],
        },
        {
            matchingRoll: 6,
            playerDescription:
                'Sabotaged or otherwise disabled a major system for a faceless client.',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '200 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '300 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '600 eb',
                },
            ],
        },
    ],
};

const TECH_DEFINITION: DiceRollerDefinition = {
    count: 1,
    type: DiceTypes.D6,
    options: [
        {
            matchingRoll: 1,
            playerDescription: 'No jobs this week.',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '0 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '100 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '300 eb',
                },
            ],
        },
        {
            matchingRoll: 2,
            playerDescription: 'Rebuilt some tech you scavenged in the Combat Zone.',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '100 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '200 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '500 eb',
                },
            ],
        },
        {
            matchingRoll: 3,
            playerDescription:
                'Helped a client break into some place or installed security systems for a client.',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '200 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '300 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '600 eb',
                },
            ],
        },
        {
            matchingRoll: 4,
            playerDescription: 'Did some modifications or repairs to some cybertech.',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '100 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '200 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '500 eb',
                },
            ],
        },
        {
            matchingRoll: 5,
            playerDescription: 'Did some modifications or repairs to some weapons',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '100 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '200 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '500 eb',
                },
            ],
        },
        {
            matchingRoll: 6,
            playerDescription: 'Sabotaged or otherwise disabled something for a client.',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '100 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '200 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '500 eb',
                },
            ],
        },
    ],
};

const MEDTECH_DEFINITION: DiceRollerDefinition = {
    count: 1,
    type: DiceTypes.D6,
    options: [
        {
            matchingRoll: 1,
            playerDescription: 'Patched up someone after a firefight.',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '100 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '200 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '500 eb',
                },
            ],
        },
        {
            matchingRoll: 2,
            playerDescription: 'Sold cyberware from a "failed" medical case',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '200 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '300 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '600 eb',
                },
            ],
        },
        {
            matchingRoll: 3,
            playerDescription: 'Helped Trauma Team on some backup work when they were overloaded.',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '100 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '200 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '500 eb',
                },
            ],
        },
        {
            matchingRoll: 4,
            playerDescription:
                'Did some minor "free clinic" work for locals. You can’t eat goodwill though.',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '0 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '100 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '300 eb',
                },
            ],
        },
        {
            matchingRoll: 5,
            playerDescription: 'Did a major medical procedure for a very well-heeled client.',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '200 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '300 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '600 eb',
                },
            ],
        },
        {
            matchingRoll: 6,
            playerDescription: 'Designed and delivered medicines or street drugs to a client.',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '100 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '200 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '500 eb',
                },
            ],
        },
    ],
};

const MEDIA_DEFINITION: DiceRollerDefinition = {
    count: 1,
    type: DiceTypes.D6,
    options: [
        {
            matchingRoll: 1,
            playerDescription: 'Wrote an expose that covered a major topic, made a big sale.',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '300 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '500 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '800 eb',
                },
            ],
        },
        {
            matchingRoll: 2,
            playerDescription:
                'Wrote a popular "puff piece" that got you some notice and some cash.',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '200 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '300 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '600 eb',
                },
            ],
        },
        {
            matchingRoll: 3,
            playerDescription: 'Did some boring ad writing to pay the bills.',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '200 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '300 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '600 eb',
                },
            ],
        },
        {
            matchingRoll: 4,
            playerDescription: 'Exposed a big story that got you some enemies and some cash',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '200 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '300 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '600 eb',
                },
            ],
        },
        {
            matchingRoll: 5,
            playerDescription: 'No good stories or leads this week.',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '0 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '100 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '300 eb',
                },
            ],
        },
        {
            matchingRoll: 6,
            playerDescription: 'Wrote an expose that blew the lid off a major topic.',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '300 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '500 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '800 eb',
                },
            ],
        },
    ],
};

const LAWMAN_DEFINITION: DiceRollerDefinition = {
    count: 1,
    type: DiceTypes.D6,
    options: [
        {
            matchingRoll: 1,
            playerDescription: 'Made a few minor busts, business as usual.',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '100 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '200 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '500 eb',
                },
            ],
        },
        {
            matchingRoll: 2,
            playerDescription: 'Got a reward from grateful citizen. Or it was a bribe ?',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '200 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '300 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '600 eb',
                },
            ],
        },
        {
            matchingRoll: 3,
            playerDescription: 'Bust went bad, and it came out of your salary.',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '0 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '100 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '300 eb',
                },
            ],
        },
        {
            matchingRoll: 4,
            playerDescription:
                'Nothing much happened this week. Collected a paycheck and that was it.',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '100 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '200 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '500 eb',
                },
            ],
        },
        {
            matchingRoll: 5,
            playerDescription:
                'Pulled off a major drug or smuggling bust and gained a bonus from the boss.',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '200 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '300 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '600 eb',
                },
            ],
        },
        {
            matchingRoll: 6,
            playerDescription: 'Took down a big gang and got some of a "civil seizure" bonus.',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '200 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '300 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '600 eb',
                },
            ],
        },
    ],
};

const EXEC_DEFINITION: DiceRollerDefinition = {
    count: 1,
    type: DiceTypes.D6,
    options: [
        {
            matchingRoll: 1,
            playerDescription: 'Landed a moderate success on a project, earned a reward bonus.',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '300 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '500 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '800 eb',
                },
            ],
        },
        {
            matchingRoll: 2,
            playerDescription:
                'Nothing much happened, and Corporate was unimpressed. Lost a bonus.',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '0 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '100 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '300 eb',
                },
            ],
        },
        {
            matchingRoll: 3,
            playerDescription: 'Collected a paycheck and that was it.',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '200 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '300 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '600 eb',
                },
            ],
        },
        {
            matchingRoll: 4,
            playerDescription: 'Got some dirt on a rival and used it to score a bonus.',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '300 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '500 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '800 eb',
                },
            ],
        },
        {
            matchingRoll: 5,
            playerDescription:
                'Pulled off a major project success and gained a bonus from the Head Office.',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '300 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '500 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '800 eb',
                },
            ],
        },
        {
            matchingRoll: 6,
            playerDescription:
                'Took out a legitimate target that was threatening a job and took their funding.',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '200 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '300 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '600 eb',
                },
            ],
        },
    ],
};

const FIXER_DEFINITION: DiceRollerDefinition = {
    count: 1,
    type: DiceTypes.D6,
    options: [
        {
            matchingRoll: 1,
            playerDescription: 'Got a Media some information for a good bribe.',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '200 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '300 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '600 eb',
                },
            ],
        },
        {
            matchingRoll: 2,
            playerDescription: 'Got a Rocker a good Gig for for your 12% fee',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '200 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '300 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '600 eb',
                },
            ],
        },
        {
            matchingRoll: 3,
            playerDescription: 'Helped a client locate a desirable item they needed and got a cut.',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '200 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '300 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '600 eb',
                },
            ],
        },
        {
            matchingRoll: 4,
            playerDescription: 'Deal went south; you’re keeping your head down till it blows over.',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '0 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '100 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '300 eb',
                },
            ],
        },
        {
            matchingRoll: 5,
            playerDescription:
                'Got a Solo or Netrunner a profitable "job" and took your agency fee.',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '200 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '300 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '600 eb',
                },
            ],
        },
        {
            matchingRoll: 6,
            playerDescription: 'Brought in a rare, illegal, or very hard to get item for a client.',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '300 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '500 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '800 eb',
                },
            ],
        },
    ],
};

const NOMAD_DEFINITION: DiceRollerDefinition = {
    count: 1,
    type: DiceTypes.D6,
    options: [
        {
            matchingRoll: 1,
            playerDescription: 'Made a legit shipment.',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '100 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '200 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '500 eb',
                },
            ],
        },
        {
            matchingRoll: 2,
            playerDescription: 'Protected a shipment',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '0 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '100 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '300 eb',
                },
            ],
        },
        {
            matchingRoll: 3,
            playerDescription: 'Smuggled some small contraband.',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '100 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '200 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '500 eb',
                },
            ],
        },
        {
            matchingRoll: 4,
            playerDescription: 'Smaggled a huge shipment',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '200 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '300 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '600 eb',
                },
            ],
        },
        {
            matchingRoll: 5,
            playerDescription: 'Delivered a client safely to destination.',
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '100 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '200 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '500 eb',
                },
            ],
        },
        {
            matchingRoll: 6,
            playerDescription: `Couldn't find work this week, legit or otherwise.`,
            masterOptions: [
                {
                    matchingRange: [1, 4],
                    masterNote: '0 eb',
                },
                {
                    matchingRange: [5, 7],
                    masterNote: '100 eb',
                },
                {
                    matchingRange: [8, 10],
                    masterNote: '300 eb',
                },
            ],
        },
    ],
};

export const HUSTLE_DEFINITIONS: Record<Roles, DiceRollerDefinition> = {
    [Roles.Rockerboy]: ROCKERBOY_DEFINITION,
    [Roles.Solo]: SOLO_DEFINITION,
    [Roles.Netrunner]: NETRUNNER_DEFINITION,
    [Roles.Tech]: TECH_DEFINITION,
    [Roles.Medtech]: MEDTECH_DEFINITION,
    [Roles.Media]: MEDIA_DEFINITION,
    [Roles.Lawman]: LAWMAN_DEFINITION,
    [Roles.Exec]: EXEC_DEFINITION,
    [Roles.Fixer]: FIXER_DEFINITION,
    [Roles.Nomad]: NOMAD_DEFINITION,
};
