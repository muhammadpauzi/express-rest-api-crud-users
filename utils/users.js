const fs = require('fs');
const { join } = require('path');

const fileData = 'data.json';
const dirPath = './data'
const pathData = join(dirPath, fileData);

// Make a folder data if not exists yet
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// Make a file data.json if not exists yet
if (!fs.existsSync(pathData)) {
    fs.writeFileSync(pathData, '[]');
}

// Write a file data.json if content is blank or not '[]'
if (!fs.readFileSync(pathData).toString()) {
    fs.writeFileSync(pathData, '[]');
}

const loadUsers = () => {
    return JSON.parse(fs.readFileSync(pathData));
}

const find = (page, size) => {
    const users = loadUsers();
    return users.filter((user, i) => i >= ((size * page) - size) && i < size * page)
}

const findById = id => {
    const users = loadUsers();
    return users.find(user => user.id == id);
}

const findByEmail = email => {
    const users = loadUsers();
    return users.find(user => user.email == email);
}

const save = data => {
    fs.writeFile(pathData, JSON.stringify(data), err => {
        if (err) throw err;
    });
}

const create = data => {
    const users = loadUsers();
    users.push(data);
    save(users)
}

const update = (id, body) => {
    const users = loadUsers();

    const newDataUser = {
        name: body.name,
        email: body.email,
        updated_at: Date.now(),
    }

    users.map(user => {
        if (user.id == id) {
            user.name = newDataUser.name;
            user.email = newDataUser.email;
            user.updated_at = newDataUser.update;
        }
    });
    save(users);
    return newDataUser;
}

module.exports = {
    find,
    findById,
    create,
    update,
    findByEmail
}