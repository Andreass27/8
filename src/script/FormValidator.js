export default class FormValidator{
constructor(item,formElement){
this.formSelector = item.formSelector;
this.inputSelector = item.inputSelector;
this.submitButtonSelector = item.submitButtonSelector;
this.inactiveButtonClass = item.inactiveButtonClass;
this.inputErrorClass = item.inputErrorClass
this.errorClass = item.errorClass;
this.formElement = formElement
this.submitButton = this.formElement.querySelector(this.submitButtonSelector);
this.inputAll = Array.from(this.formElement.querySelectorAll(this.inputSelector));
}
// показ ошибки
_ShowInputError = (inputElement, errorMassage) => {
    const errorElement = this.formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this.inputErrorClass);
    errorElement.classList.add(this.errorClass);
    errorElement.textContent = errorMassage;
};
// удаляет ошибки
_hideInputError = (inputElement) => {
    const errorElement = this.formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this.inputErrorClass);
    errorElement.classList.remove(this.errorClass);
    errorElement.textContent = '';
  };
//   проверка на валидность 
 _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._ShowInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };
//   перезагрузка ошибки 
_resetInputError = (() => {
  this.inputAll.forEach((i) => {
   this._hideInputError (i)
  })
 


  });
//   проверка на валидность инпутов
_hasInvalidInput = ()=> {
    return this.inputAll.some((inputElement) => {
return !inputElement.validity.valid;
    })
}
// статус кнопок
_toggleButtonState = () => {
    if(this._hasInvalidInput()) {
      this.submitButton.classList.add(this.inactiveButtonClass);
      this.submitButton.setAttribute('disabled', true)
    }
    else {
      this.submitButton.classList.remove(this.inactiveButtonClass);
      this.submitButton.removeAttribute('disabled', true)
    }
  }
// добавление слушателей интутам
_setEventListeners = () =>{
    this._toggleButtonState();
    this.inputAll.forEach((inputElement)=>{
        inputElement.addEventListener('input', ()=> {
            this._checkInputValidity(inputElement);
            this._toggleButtonState();   
        });
    });
};

enableValidation = () =>{
    this._setEventListeners();
    this._resetInputError();
};
}



