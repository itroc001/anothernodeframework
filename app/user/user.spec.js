const chai = require('chai');
const User = require('./user.model');

describe('User', () => {


    describe('#save()', () => {


        it('create user', (done) => {
            let user = new User({
                username: 'Foo',
                password: 'Bar'
            });
            return user.save(done);
        });

        // it('update user', (done) => {
        //     user = new UserModel({
        //         username: 'Foo',
        //         password: 'Bar_UPDATED'
        //     });
        //     return user.save(done);
        // });

    });


    // describe('#find', () => {

    //     it('find user', (done) => {
    //         let user = new UserModel({
    //             username: 'Foo'
    //         });
    //         return user.find(done);
    //     });

    // });

    describe('#findAll', () => {

        it('find all users', (done) => {
            return User.findAll(done);
        });

    });

    // describe('#delete()', () => {

    //     it('delete user', (done) => {
    //         let user = new UserModel({
    //             username: 'Foo'
    //         });
    //         return user.delete(done);
    //     });

    // });

});
