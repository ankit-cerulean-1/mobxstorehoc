import { observable,action } from "mobx";

class UserStore {
    @observable users = []
    @observable user ={}

    addUsers(realm, user){
        let realmusers= realm.objects('User');
        let realmuser = realmusers.filtered(`id = ${user.id}`);
        if(Object.keys(realmuser).length === 0 ){
            realm.write(()=>{
                realm.create('User',user);
            })
        }
    }
}

export default new UserStore();