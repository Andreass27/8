import Popup from "./Popup";
class PopupWithImage extends Popup {
 constructor(popupSelector){
   super(popupSelector)
   this._image = this._popup.querySelector('.popup__image');
   this._imgName = this.popup.querySelector('.popup__imgname');
 } 
open(name,link){
    super.open()
    this._image.setAttribute('src',link);
    this._image.setAttribute('alt',name);
}
}
// вроде ошибки нет но почему-то "PopupWithImage" светится тускло  