import { CPGenerator } from './cp-generator';
import { Roles } from './enums';

describe('cpGenerator', () => {
    let service: CPGenerator;

    beforeEach(() => {
        service = new CPGenerator();
    });

    it('should define', () => {
        expect(service).toBeDefined();
    });

    it('should support bodega', () => {
        expect(service.bodega).toBeDefined();

        const bodegaResult = service.bodega.generate();

        expect(bodegaResult).toBeDefined();
        expect(bodegaResult.length).toBe(3);

        console.log(bodegaResult);
    });

    it('should support hustle', () => {
        expect(service.bodega).toBeDefined();

        const hustleResult = service.hustle.generate(Roles.Lawman, 3)!;

        expect(hustleResult).toBeDefined();
        expect(hustleResult.matchedMasterOption).toBeDefined();
        expect(hustleResult.matchedOption).toBeDefined();

       
    });
});
