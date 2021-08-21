const Engineer = require('../lib/Engineer');

test('Create Engineer Object', () => {
    const engineer = new Engineer('Mike', 2, 'myEmail@email.com', 'github');

    expect(engineer.name).toBe('Mike');
    expect(engineer.id).toBe(2);
    expect(engineer.email).toBe('myEmail@email.com');
    expect(engineer.github).toBe('github');
});

test('Get Engineer Github', () => {
    const engineer = new Engineer('Mike', 2, 'myEmail@email.com', 'github');

    expect(engineer.getGithub()).toBe('github');
});

test('Get Engineer Role', () => {
    const engineer = new Engineer('Mike', 2, 'myEmail@email.com', 'github');

    expect(engineer.getRole()).toBe('Engineer');
});
