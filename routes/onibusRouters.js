const express = require('express');
const onibusController = require('../controllers/onibusController');
const router = express.Router();

router.post('/produtos/create', onibusController.createOnibus);
router.get('/produtos/listar', onibusController.listarOnibus);

module.exports = router;
