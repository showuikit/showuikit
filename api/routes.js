var router = require('./app').app;

var kitController = require(CONTROLLERS_PATH + '/kit_controller');

//Rotas da API
router.get('/api/kits', kitController.list);