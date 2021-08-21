const Intern = require('../lib/Intern');

test('Create Intern Object', () => {
    const intern = new Intern('David', 3, 'myEmail@email.com', 'Berkely');

    expect(intern.name).toBe('David');
    expect(intern.id).toBe(3);
    expect(intern.email).toBe('myEmail@email.com');
    expect(intern.school).toBe('Berkely');
});

test('Get Intern School', () => {
    const intern = new Intern('David', 3, 'myEmail@email.com', 'Berkely');

    expect(intern.getSchool()).toBe('Berkely');
});

test('Get Intern Role', () => {
    const intern = new Intern('David', 3, 'myEmail@email.com', 'Berkely');

    expect(intern.getRole()).toBe('Intern');
});