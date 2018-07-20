# 명령어
- npm run generate [ --path='' --output='' --ext='' ]
- npm run concat [ --path='' --output='' --filename='' ext='' ]
- npm run watch-generate [ --path='' --output='' --ext='' ]


# 예제
### generate
npm run generate --path='./data/test' --output='./output/test'

### nconcat
npm run concat --path='./output/test' --output='./output/test' --filename='test2.js'

### watch-generate
npm run watch-generate --path='./data/test' --output='./output/test'


# 참고
https://www.npmjs.com/package/dummy-json

https://github.com/helpers/handlebars-helpers#math