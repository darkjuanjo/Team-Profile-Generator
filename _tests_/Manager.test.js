const Manager = require('../lib/Manager');

test('Get Manager Name', () => {
    const manager = new Manager('Juan', '1', 'myemail@email.com', '111111');
    
    expect(manager.name).toBe('Juan');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('myemail@email.com');
    expect(manager.officeNumber).toBe('111111');
});

test('Check name to be string', () => {
    const manager = new Manager('Juan', '1', 'myemail@email.com', '111111');

    expect(manager.name).toEqual(expect.any(String));
});

test('Check id to be number', () => {
    const manager = new Manager('Juan', '1', 'myemail@email.com', '111111');

    expect(manager.id).toEqual(expect.any(String));
});

test('Check email to be string', () => {
    const manager = new Manager('Juan', '1', 'myemail@email.com', '111111');

    expect(manager.email).toEqual(expect.any(String));
});

test('Check officeNumber to be string', () => {
    const manager = new Manager('Juan', '1', 'myemail@email.com', '111111');

    expect(manager.officeNumber).toEqual(expect.any(String));
});

test('Get Manager Role', () => {
    const manager = new Manager('Juan', '1', 'myemail@email.com', '111111');
    
    expect(manager.getRole()).toBe('Manager');
});