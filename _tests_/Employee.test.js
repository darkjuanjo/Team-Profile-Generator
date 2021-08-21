const Employee = require('../lib/Employee');

test('create an Employee object', () => {
    const employee = new Employee('Juan', 1, 'myemail@email.com');

    expect(employee.name).toBe('Juan');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test(' get Employee name', () => {
    const employee = new Employee('Juan', 1, 'myemail@email.com');

    expect(employee.getName()).toBe('Juan');
});

test(' get Employee id', () => {
    const employee = new Employee('Juan', 1, 'myemail@email.com');

    expect(employee.getId()).toBe(1);
});

test(' get Employee email', () => {
    const employee = new Employee('Juan', 1, 'myemail@email.com');

    expect(employee.getEmail()).toBe('myemail@email.com');
});

test(' get Employee role', () => {
    const employee = new Employee('Juan', 1, 'myemail@email.com');

    expect(employee.getRole()).toBe('Employee');
});