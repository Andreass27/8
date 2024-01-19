import openPopup from './script.js'
export default class Card {
    constructor(name,link,card,handleCardClick){
        this.name = name;
        this.link = link;
        this.card = card;
        this.handleCardClick = handleCardClick;
    }

_getTemplate = () => {
    const cardElement = document.querySelector(this.card).content.querySelector('.element__template').cloneNode(true);
    return cardElement;
};
_removeCard = () => {
    this.element.remove()
};
_likeCard = () => {
    this.likeButton.classList.toggle('element__like_active');
};
_bigSizeCard = () => {
document.querySelector('.popup__image').setAttribute('src',this.link);
document.querySelector('.popup__imgname').textContent = this.name;
document.querySelector('.popup__image').setAttribute('alt',this.name);
const popupBigImage = document.querySelector('.popup_type_bigImage');
openPopup(popupBigImage);
};

_setEventListeners = () =>{
    this.element.querySelector('.element__trash').addEventListener('click', this._removeCard)
    this.likeButton.addEventListener('click', this._likeCard)
    this.element.querySelector('.element__img').addEventListener('click', this.handleCardClick);

};

renderCard = () => {
    this.element = this._getTemplate();
    this.element.querySelector('.element__img').setAttribute('alt',this.name);
    this.element.querySelector('.element__img').setAttribute('src', this.link);
    this.element.querySelector('.element__name').textContent = this.name;
    this.likeButton = this.element.querySelector('.element__like');
    this._setEventListeners();
    return this.element;
};

};
