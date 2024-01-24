import Popup from "./Popup"
class PopupWithForm extends Popup {
constructor({popupSelector, FormSubmit}){
super(popupSelector)
this._FormSubmit = FormSubmit;
this._form = this._popup.querySelector('.popup__form');
this._input = this._popup.querySelector('.popup__input');
}
_getInputValues(){
    // обработчик сабмита
    this._formValue = {};
    this._input.forEach(input => {
        this._formValue[input.name] = input.value;
    });
    return this._formValue;
}
// 1)перезаписал родительский метод через супер
// 2) добавил попапам сабмит
// 3)перпевел форму в дефолт
setEventListeners(){
    super.setEventListeners() 
    this._popup.addEventListener('submit', (e) => {
      e.preventDefault()
      this._FormSubmit(this._getInputValues())
    });
}
// 1)перезаписал родительский метод
// 2)сбросил формы ресетом
close(){
    super.close()
    this._form.reset()
}

}