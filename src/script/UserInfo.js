 export default class UserInfo{
    constructor(SelectorName,SelectorResearcher){
        this._name = document.querySelector(SelectorName);
        this._researcher = document.querySelector(SelectorResearcher);
    }
    getUserInfo(){
        this._data = {};
        this._data.profileName = this._name.textContent;
        this._data.profileResearcher = this._researcher.textContent;
        return this._data;
    }
    setUserInfo(name,researcher ) {
    this._name.textcontent = name;
    this._researcher.textcontent = researcher;
    }
}