import Realm from 'realm';

const UserSchema = {

    name: 'User',
    primaryKey: 'id',
    properties: {
        id: 'int',
        name: 'string',
        email: 'string?',
        password: 'string?'
    }

};

export default UserSchema;