const { dbCon } = require('../configuration')
const { userValidation, logSchema } = require('../validator');
const { hashSync, compareSync } = require('bcryptjs')

class User {
    constructor(userData) {
        this.userData = {...userData };
    };

    save(cb) {
        dbCon('users', async(db) => {
            try {
                const hashedPass = hashSync(this.userData['password'], 12);
                this.userData['password'] = hashedPass
                this.userData['verified'] = false
                await db.insertOne(this.userData);
                cb();
            } catch (err) {
                cb(err);
            }
        });
    }

    checkExistence() {
        return new Promise((resolve, reject) => {
            try {

                dbCon('users', async(db) => {
                    const user = await db.findOne({ '$or': [{ username: this.userData['username'] }, { email: this.userData['email'] }] });
                    if (!user) {
                        resolve({ check: false })
                    } else if (this.userData['username'] === user.username) {
                        resolve({ check: true, message: 'this username is already in use' })
                    } else if (this.userData['email'] === user.email) {
                        resolve({ check: true, message: 'this email is already in use' })
                    }
                })
            } catch (err) {

                reject(err);
            }
        })
    }

    static validate(userData) {
        const result = userValidation.validate(userData)
        return result
    }

    static login(userData) {

        return new Promise((resolve, reject) => {
            const validation = logSchema.validate(userData);
            if (validation.error) {
                const error = new Error(validation.error.message)
                error.statusCode = 400;
                resolve(error)
            }

            dbCon('users', async(db) => {

                try {

                    // find user
                    const user = await db.findOne({ '$or': [{ username: userData['username'] }, { email: userData['email'] }] }, { projection: { username: 1, password: 1 } })

                    if (!user || !compareSync(userData['password'], user.password)) {
                        const error = new Error('Please enter valid username and password')
                        error.statusCode = 404
                        return resolve(error)
                    }

                    resolve(user)
                } catch (err) {
                    reject(err)
                }
            })


        })
    }

}


// User.login({ username: "Anas23", password: "Anas12-$45" }).then(res => console.log(res))

// const user = new User({
//     username: 'anasSaber',
//     email: 'anas@example.com',
//     password: "Anas12-$45",
//     first_name: "Anas",
//     last_name: "Saber"
// })


// user.checkExistence()
//     .then(check => {
//         console.log(check)
//     }).catch(err => console.log(err))



module.exports = User