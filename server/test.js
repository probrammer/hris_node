const { Contractor } = require('./src/models')

const firstNames = ['Robin', 'George', 'Marcus', 'Lea', 'Cate', 'Zed', 'Lili', 'Mark', 'Joseph', 'Gab', 'Renz']
const lastNames = ['Banks', 'Smith', 'Doe', 'Russel', 'Matthews', 'James', 'Caruso', 'Doncic', 'Gooden', 'Adams', 'Hemsworth']

function createActive () {
    for (let x = 0; x < 5; x++) {
        Contractor.create({
            firstName: firstNames[Math.floor(Math.random() * 11)],
            lastName: lastNames[Math.floor(Math.random() * 11)],
        })
        .then(console.log('active done'))
    }
}

function createInactive () {
    for (let x = 0; x < 5; x++) {
        Contractor.create({
            firstName: firstNames[Math.floor(Math.random() * 11)],
            lastName: lastNames[Math.floor(Math.random() * 11)],
            dateOfSeparation: new Date(2019, 08, 28)
        })
        .then(console.log('inactive done'))
    }
}

createActive();
createInactive();