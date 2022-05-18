{"filter":false,"title":"async.js","tooltip":"/middleware/async.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":10,"column":29},"action":"insert","lines":["const asyncWrapper = (fn) => {","  return async (req, res, next) => {","    try {","      await fn (req, res, next)","    } catch (error) {","      next (error)","    }","  }","}","","module.exports = asyncWrapper"],"id":1}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":7,"column":3},"end":{"row":7,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1652902063605,"hash":"767d05a3c3147a3fafe154d2edd3085bbac29bf4"}