import { CanInitiative } from '../interfaces/can-initiative.interface';

export function sortByInitiative<Participant extends CanInitiative>(
    participants: Participant[]
): Participant[] {
    const rolledParticipants = participants.map((participant) => {
        return { initiative: participant.rollInitiative(), participant };
    });

    rolledParticipants.sort(
        ({ initiative: participantInitiativeOne }, { initiative: participantInitiativeTwo }) => {
            return participantInitiativeOne - participantInitiativeTwo;
        }
    );

    return rolledParticipants.map(({ participant }) => participant);
}
