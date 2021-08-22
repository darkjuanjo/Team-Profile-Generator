const Intern = require('../lib/Intern');

test('Create Intern Object', () => {
    const intern = new Intern('David', 3, 'myEmail@email.com', 'Berkely');

    expect(intern.name).toBe('David');
    expect(intern.id).toBe(3);
    expect(intern.email).toBe('myEmail@email.com');
    expect(intern.school).toBe('Berkely');
});

test('Check name to be string', () => {
    const intern = new Intern('David', 3, 'myEmail@email.com', 'Berkely');

    expect(intern.name).toEqual(expect.any(String));
});

test('Check id to be number', () => {
    const intern = new Intern('David', 3, 'myEmail@email.com', 'Berkely');

    expect(intern.id).toEqual(expect.any(Number));
});

test('Check email to be string', () => {
    const intern = new Intern('David', 3, 'myEmail@email.com', 'Berkely');

    expect(intern.email).toEqual(expect.any(String));
});

test('Check School to be string', () => {
    const intern = new Intern('David', 3, 'myEmail@email.com', 'Berkely');

    expect(intern.school).toEqual(expect.any(String));
});

test('Get Intern School', () => {
    const intern = new Intern('David', 3, 'myEmail@email.com', 'Berkely');

    expect(intern.getSchool()).toBe('Berkely');
});

test('Get Intern Role', () => {
    const intern = new Intern('David', 3, 'myEmail@email.com', 'Berkely');

    expect(intern.getRole()).toBe('Intern');
});