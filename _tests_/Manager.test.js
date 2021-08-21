const Manager = require('../lib/Manager');

test('Get Manager Name', () => {
    const manager = new Manager('Juan', 1, 'myemail@email.com', '111111');
    
    expect(manager.name).toBe('Juan');
    expect(manager.id).toBe(1);
    expect(manager.email).toBe('myemail@email.com');
    expect(manager.officeNumber).toBe('111111');
});

test('Get Manager Role', () => {
    const manager = new Manager('Juan', 1, 'myemail@email.com', '111111');
    
    expect(manager.getRole()).toBe('Manager');
});