export default class Card {
    constructor(name, link, card, handleCardClick){
        this.name = name;
        this.link = link;
        this.card = card;
        this._handleCardClick = handleCardClick;
    }

_getTemplate = () => {
        const cardElement = document.querySelector(this.card).content.querySelector('.element__template').cloneNode(true);
        return cardElement;
      }
_likeCard = () => {
    this.likeButton.classList.toggle('element__like_active');
};

_removeCard = () => {
    this.element.remove()
};

_setEventListeners = () =>{
    this.element.querySelector('.element__trash').addEventListener('click', this._removeCard);
    this.likeButton.addEventListener('click', this._likeCard);
    this._image.addEventListener('click',this._handleCardClick);

};

renderCard = () => {
    console.log(this._getTemplate);
    this.element = this._getTemplate();
    this._image = this.element.querySelector('.element__img');
    this._image.setAttribute('alt', this.name);
    this._image.setAttribute('src', this.link);
    this.element.querySelector('.element__name').textContent = this.name;
    this.likeButton = this.element.querySelector('.element__like');
    this._setEventListeners();
    return this.element;
}
};

