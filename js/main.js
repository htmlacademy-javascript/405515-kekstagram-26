//Поиск случайного целого числа//
const getRandomInt = (min, max) => {
  if (min >= 0 && max >= 0) {
    if (min === max) {
      return max;
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (Math.max(min, max) - Math.min(min, max) + 1)) + Math.min(min, max);
  }
};
getRandomInt(1, 10);

//Проверка длины строки//
const checkStringLength = (checkString, maxLength) => checkString.length <= maxLength;
checkStringLength(20);

//Входные данные//
const DESCRIPTIONS = ['Кот', 'Бабочка', 'Снежинка', 'Автомобиль', 'Колокольчик', 'Мороженое'];
const MESSAGES = ['Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В целом всё неплохо. Но не всё.'];
const NAMES = ['Римма', 'Света', 'Федор', 'Галя', 'Ваня', 'Илья', 'Олег', 'Коля', 'Аля'];
const itemsCount = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_ID_AVATAR = 1;
const MAX_ID_AVATAR = 6;

//Создаём массив случайных элементов//
const getRandomElement = (elements) => elements[getRandomInt(0, elements.length - 1)];


const galleryPhotos = [];

//Генерируем случайный комментарий//
const getComment = () => (
  {
    id: getRandomInt(MIN_ID_AVATAR, MAX_ID_AVATAR),
    avatar: `img/avatar-${getRandomInt(MIN_ID_AVATAR, MAX_ID_AVATAR)}.svg`,
    message: getRandomElement(MESSAGES),
    name: getRandomElement(NAMES),
  });

  //Добавляем фото с описанием//
const getPhoto = (i) => {
  return {
    id: i,
    url: `photos/${i}.jpg`,
    description: getRandomElement(DESCRIPTIONS),
    likes: getRandomInt(MIN_LIKES, MAX_LIKES),
    comments: Array.from({ length: getRandomInt(1, 10) }, getComment),
}
};

  for (let i = 1; i <= itemsCount; i++) {
    const photo = getPhoto(i);
    galleryPhotos.push(photo);
  }

  const photos = Array.from({length: 25}, (_, i) => getPhoto(i))
  console.log(photos);




