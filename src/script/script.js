import Card from './Card.js';
import FormValidator from './FormValidator.js';
import {initialCards} from './initialCards.js';
import {validationData} from './validate.js';

const profileEditButton = document.querySelector('.profile__edit-button');
const profileEditForm = document.forms.editForm;
const addCardsForm = document.forms.addform;
const profileAddButton = document.querySelector('.profile__add-button');
const popupProfile = document.querySelector('.popup_type_profile');
const popupAddCard = document.querySelector('.popup_type_card-add');
const nameInput = document.querySelector('#popup__name');
const jobInput = document.querySelector('#popup__researcher');
const InputPlace = document.querySelector('#popup__place')
const InputLink = document.querySelector('#popup__link');
const Elements = document.querySelector('.elements');
const addCardCloseButton = addCardsForm.previousElementSibling;
const editProfileCloseButton = profileEditForm.previousElementSibling;
const bigWindow = document.querySelector('.popup__image');
const bigWindowCloseButton = bigWindow.nextElementSibling;
const popupAll = Array.from(document.querySelectorAll('.popup'));
const profileName = document.querySelector('.profile__name');
const profileResearcher = document.querySelector('.profile__researcher');
const popupClosebigImage = document.querySelector('.popup_type_bigImage');

// закрыть попапы на ESC
function keyHandler(e){
  if(e.key === 'Escape'){
    const popopOpen = document.querySelector('.popup__open');
    closePopup(popopOpen)
  }
};

// закрыть попапы мышкой
popupAll.forEach(function(popupMouseClose) {
  popupMouseClose.addEventListener('mousedown', function(e) {
    if(e.target.classList.contains('popup__open')) {
      closePopup(popupMouseClose)
    }
    })
});
// Открытия форм
export default function openPopup(popup) {
window.addEventListener('keydown', keyHandler)
popup.classList.add('popup__open');
};

// закрытие форм
function closePopup (popup) {
  window.removeEventListener('keydown', keyHandler)
  popup.classList.remove('popup__open');
  };

function submitprofileEditform (e) {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileResearcher.textContent = jobInput.value;
  closePopup(popupProfile);
};
//добавление карт
function addCards(e){ 
  e.preventDefault();
  const card = new Card(InputPlace.value, InputLink.value, '#card__template');
  const cardElement = card.renderCard()
  Elements.prepend(cardElement);
  closePopup(popupAddCard);
};

const editFormValid = new FormValidator(validationData,profileEditForm);
const addformValid = new FormValidator(validationData,addCardsForm);

 initialCards.forEach(function(item){
  const card = new Card(item.name , item.link ,'#card__template');
  const cardElement = card.renderCard()
  Elements.prepend(cardElement);
  closePopup(popupAddCard)
  });

profileEditButton.addEventListener('click', function() { //редактор профиля 
  nameInput.value = profileName.textContent;
  jobInput.value = profileResearcher.textContent;
  editFormValid.enableValidation()
  openPopup(popupProfile);
});

profileAddButton.addEventListener('click', function(){ //редактор добавления карт
  addCardsForm.reset()
  addformValid.enableValidation()
  openPopup(popupAddCard)
});

profileEditForm.addEventListener('submit',submitprofileEditform); //сохранение редактора профиля
bigWindowCloseButton.addEventListener('click', function(){
  closePopup(popupClosebigImage)
});
addCardCloseButton.addEventListener('click', function(){
  addCardsForm.reset()
  closePopup(popupAddCard)
}); 
editProfileCloseButton.addEventListener('click', function(){
  editFormValid.enableValidation()
  closePopup(popupProfile)
}); 
addCardsForm.addEventListener('submit', addCards);








