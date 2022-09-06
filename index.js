// если экспорт был именованный, то при импорте указываются точные названия и используются синтаксис с {}

import {osversion} from './welcome.js'
// ❌ такая запись не верна
// import APP_VERSION, DEVELOPER from './constants'
    console.log(osversion())
// можно давать любое имя при импорте, если экспорт был по умолчанию




//