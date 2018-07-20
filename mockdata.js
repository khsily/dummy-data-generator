const dummyjson = require('dummy-json');
const helpers = require('handlebars-helpers');

/**
 * 헬퍼 등록
 */
module.exports = {
  math: helpers.math(),
  link: (index) => renderArray([
    'https://www.youtube.com/watch?v=Bjk0gOCinyc',
    'http://www.naver.com',
    'http://www.daum.net',
    'http://www.google.com',
  ], index),
  image: (index) => renderArray([
    'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
    'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
    'https://images.pexels.com/photos/1076812/pexels-photo-1076812.jpeg',
    'https://cdn.pixabay.com/photo/2015/12/11/09/30/mobile-phone-1087845_1280.jpg',

  ], index),
  icon: (index) => renderArray([
    'https://png.icons8.com/material-sharp/2x/add-contact-to-company.png',
    'https://png.icons8.com/material-sharp/2x/sorting-answers.png',
    'https://png.icons8.com/material-outlined/2x/conflict.png',
    'https://png.icons8.com/material-sharp/2x/invite.png',
    'https://png.icons8.com/material-sharp/2x/thumbs-down.png',
  ], index),
}

/**
 * 
 * @param {Array<any>} arr : 헬퍼 랜덤 데이터 배열
 * @param {number} index : @index를 인자로 넘겨받을경우, 랜덤이 아닌 순서를 가진 결과 리턴
 */
function renderArray(arr = [], index) {
  if (typeof index === 'number') return arr[index % arr.length];
  return dummyjson.utils.randomArrayItem(arr);
}