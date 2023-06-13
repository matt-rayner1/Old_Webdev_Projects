const {gen1, gen2, gen3} = require('./royal_fam_class.js');

//names
//gen1
describe('Name check [Generation 1]', () => {
    test('Name should be: Queen Elizabeth II', () => {
        expect(gen1[0].name).toBe('Queen Elizabeth II');
    });
    test('Name should be: Prince Philip', () => {
        expect(gen1[1].name).toBe('Prince Philip');
    });
});

//gen2
describe('Name check [Generation 2]', () => {
    test('Name should be: Prince Charles', () => {
        expect(gen2[0].name).toBe('Prince Charles');
    });
    test('Name should be: Princess Diana', () => {
        expect(gen2[1].name).toBe('Princess Diana');
    });
});

//gen3
describe('Name check [Generation 3]', () => {
    test('Name should be: Prince William', () => {
        expect(gen3[0].name).toBe('Prince William');
    });
    test('Name should be: Duchess Catherine', () => {
        expect(gen3[1].name).toBe('Duchess Catherine');
    });
});

//parents
//gen1
describe('Parent check [Generation 1]', () => {
    test('Parents should be: King George VI & Queen Elizabeth I', () => {
        expect(gen1[0].childOf()).toBe('King George VI & Queen Elizabeth I');
    });
    test('Parents should be: unknown', () => {
        expect(gen1[1].childOf()).toBe('unknown');
    });
})

//gen2
describe('Parent check [Generation 2]', () => {
    test('Parents should be: Prince Philip & Queen Elizabeth II', () => {
        expect(gen2[0].childOf()).toBe('Prince Philip & Queen Elizabeth II');
    });
    test('Parents should be: unknown', () => {
        expect(gen2[1].childOf()).toBe('unknown');
    });
})

//gen3
describe('Parent check [Generation 3]', () => {
    test('Parents should be: Prince Charles & Princess Diana', () => {
        expect(gen3[0].childOf()).toBe('Prince Charles & Princess Diana');
    });
    test('Parents should be: unknown', () => {
        expect(gen3[1].childOf()).toBe('unknown');
    });
})