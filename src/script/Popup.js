  export default class Popup{
    constructor(popupSelector){
        this._popup = document.querySelector(popupSelector);
    }

    // 1) приватный метод закрытия формы на ESC
    _handleEscClose(e){
        if (e.key === 'Escape'){
            this.close
        }
    }
    
    // 1)публичный метод закрытия попапам
    // 2)удалил эвент с помощью кнопки засунув туда публичный метод _handleEscClose
    close(){
        this._popup.classList.remove('popup__open');
        document.removeEventListener('keydown', this._handleEscClose);
    
    }

    // 1)публичный метод открытия попапа
    // 2)удалил эвент с помощью кнопки засунув туда публичный метод _handleEscClose
    open(){
        this._popup.classList.add('popup__open');
        document.addEventListener('keydown',this._handleEscClose)
    }

   
    setEventListeners(){
        this._popup.addEventListener('mousedowd', (e)=>{
        if (e.target.classList.contains('popup__open')) {
            this.close()
        } 
        });
    }

}