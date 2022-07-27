import { isEscapeKey } from './util.js';

const uploadForm = document.querySelector('.img-upload__form');
const textDescription = document.querySelector('.text__description');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'form-item__invalid',
  successClass: 'form-item__valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'form__error'
}, false);

const maxCommentlength = 140;
const validateComment = (value) => value.length <= maxCommentlength;

pristine.addValidator(textDescription, validateComment,
  'Комментарий должен быть короче 140 символов');

uploadForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});

const onEscapeDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    evt.stopPropagation();
  }
};

textDescription.addEventListener('keydown', onEscapeDown);
