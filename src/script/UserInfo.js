class UserInfo{
    constructor(name,info){
        this._name = document.querySelector(name);
        this._info = document.querySelector(info);
    }
    getUserInfo(){
        this._data = {};
        this._data.profileName = this._name.textcontent;
        this._data.profileResearcher = this._researcher.textcontent;
    }
    setUserInfo(name,researcher ) {
    this._name.textcontent = name;
    this._researcher.textcontent = researcher;
    }
}