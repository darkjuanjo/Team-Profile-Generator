const Engineer = require('../lib/Engineer');

test('Create Engineer Object', () => {
    const engineer = new Engineer('Mike', '2', 'myEmail@email.com', 'github');

    expect(engineer.name).toBe('Mike');
    expect(engineer.id).toBe('2');
    expect(engineer.email).toBe('myEmail@email.com');
    expect(engineer.github).toBe('github');
});

test('Check name to be string', () => {
    const engineer = new Engineer('Mike', '2', 'myemail@email.com', 'github');

    expect(engineer.name).toEqual(expect.any(String));
});

test('Check id to be number', () => {
    const engineer = new Engineer('Mike', '2', 'myemail@email.com', 'github');

    expect(engineer.id).toEqual(expect.any(String));
});

test('Check email to be string', () => {
    const engineer = new Engineer('Mike', '2', 'myemail@email.com', 'github');

    expect(engineer.email).toEqual(expect.any(String));
});

test('Check github username to be string', () => {
    const engineer = new Engineer('Mike', '2', 'myemail@email.com', 'github');

    expect(engineer.github).toEqual(expect.any(String));
});

test('Get Engineer Github', () => {
    const engineer = new Engineer('Mike', '2', 'myEmail@email.com', 'github');

    expect(engineer.getGithub()).toBe('github');
});

test('Get Engineer Role', () => {
    const engineer = new Engineer('Mike', '2', 'myEmail@email.com', 'github');

    expect(engineer.getRole()).toBe('Engineer');
});
