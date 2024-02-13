import Popup from "./Popup.js"
export default class PopupWithForm extends Popup {
constructor({popupSelector, FormSubmit}){
super(popupSelector)
this._FormSubmit = FormSubmit;
this._input = this._popup.querySelectorAll('.popup__input');
this._form = this._popup.querySelector('.popup__form');

}
_getInputValues() {
    // обработчик сабмита
    this._formValue = {};
    this._input.forEach(input => {
        this._formValue[input.name] = input.value;
    });
    //вернем
    return this._formValue;
}
// 1)перезаписал родительский метод
// 2)сбросил формы ресетом
close(){
    super.close();
    this._form.reset();
}

// 1)перезаписал родительский метод через супер
// 2) добавил попапам сабмит
// 3)перпевел форму в дефолт
setEventListeners(){
    super.setEventListeners() 
    this._popup.addEventListener('submit', (e) => {
      e.preventDefault();
      this._FormSubmit(this._getInputValues());
      this.close();
    });
};

}