import { observable, action } from "mobx";
import userStore from "./UserStore";

class Store {
    
    @observable firstName = "Sen";

    constructor(){
        this.userStore = userStore;
    }
    
}

export default new Store();
