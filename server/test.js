const { Contractor } = require('./src/models')

const firstNames = ['Robin', 'George', 'Marcus', 'Lea', 'Cate', 'Zed', 'Lili', 'Mark', 'Joseph', 'Gab', 'Renz']
const lastNames = ['Banks', 'Smith', 'Doe', 'Russel', 'Matthews', 'James', 'Caruso', 'Doncic', 'Gooden', 'Adams', 'Hemsworth']

function createActive () {
    for (let x = 0; x < 5; x++) {
        Contractor.create({
            firstName: firstNames[Math.floor(Math.random() * 11)],
            lastName: lastNames[Math.floor(Math.random() * 11)],
            dateStarted: new Date(Math.floor(Math.random() * (2014 - 2010)) + 2010, Math.floor(Math.random() * 13), Math.floor(Math.random() * 30)),
        })
        .then(console.log('active done'))
    }
}

function createInactive () {
    for (let x = 0; x < 5; x++) {
        Contractor.create({
            firstName: firstNames[Math.floor(Math.random() * 11)],
            lastName: lastNames[Math.floor(Math.random() * 11)],
            dateOfSeparation: new Date(Math.floor(Math.random() * (2021 - 2015)) + 2015, Math.floor(Math.random() * 13), Math.floor(Math.random() * 30)),
            dateStarted: new Date(Math.floor(Math.random() * (2015 - 2010)) + 2010, Math.floor(Math.random() * 13), Math.floor(Math.random() * 30)),
            isActive: false
        })
        .then(console.log('inactive done'))
    }
}

createActive();
createInactive();