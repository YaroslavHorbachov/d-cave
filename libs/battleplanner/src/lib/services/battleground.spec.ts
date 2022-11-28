import { Battleground } from './battleground';
describe('battleground', () => {
    let service: Battleground;

    beforeEach(() => {
        service = new Battleground();
    });

    it('should work', () => {
        expect(service).toBeDefined();

        service.createDuel();
    });
});
