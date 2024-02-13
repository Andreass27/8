import '../vendor/index.css';
import '../src/script/script.js'
import Card from '../src/script/Card.js';
import Popup from '../src/script/Popup.js';
import PopupWithForm from '../src/script/PopupWithForm.js';
import PopupWithImage from '../src/script/PopupWithImage.js';
import Section from '../src/script/Section.js';
import UserInfo from '../src/script/UserInfo.js';
import {validationData} from'../src/script/validate.js';
import {initialCards} from'../src/script/initialCards.js';
import FormValidator from '../src/script/FormValidator.js';
import {addCardsForm,jobInput,profileEditForm,nameInput,profileEditButton,profileAddButton} from '../src/script/script.js'


const userInfowindow = new UserInfo('.profile__name', '.profile__researcher'); 
const openBigImage = new PopupWithImage('.popup_type_bigImage'); //большие картинки 
const addCardForm = new FormValidator(validationData,addCardsForm);//карточки
const editProfileForm = new FormValidator(validationData,profileEditForm);// профиль жака

openBigImage.setEventListeners(); //евент для открытия

const openPopup = new PopupWithForm({
    popupSelector: '.popup_type_profile',
    FormSubmit: (input)=>{
    userInfowindow.setUserInfo(input.profile_name, input.profile_researcher)
    }
})
openPopup.setEventListeners()


const makeCard = (name,link,selector) =>{
    const card = new Card (name, link, selector,() =>{
    openBigImage.open(name,link)    
    })
    const cardElement = card.renderCard()
    return cardElement
}
const renderCard = new Section({
  items: initialCards,
  renderer: (item) =>{
    const card = makeCard(item.name,item.link, '#card__template')
    renderCard.addItem(card);
  }
},'.elements')

renderCard.renderItems();

const loadCard = new PopupWithForm({
  popupSelector: '.popup_type_card-add',
  FormSubmit:(item)=>{
  const card = makeCard(item.addFormName, item.addLinkUrl, '#card__template')
  renderCard.prependItem(card);
  }
  })
  loadCard.setEventListeners();

const closeBigImage = new Popup('.popup_type_bigImage')
closeBigImage.setEventListeners()
addCardForm.enableValidation()
editProfileForm.enableValidation()

profileEditButton.addEventListener('click',function(){
const userInfo = userInfowindow.getUserInfo();
nameInput.value = userInfo.profileName;
jobInput.value = userInfo.profileResearcher;
editProfileForm._resetInputError()
openPopup.open()
})

profileAddButton.addEventListener('click', function(){
    addCardForm._resetInputError() 
    loadCard.open()
    
})