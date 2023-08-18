/*
path = /api/login
*/

const {Router} = require('express');
const { check } = require('express-validator');
const { crearUsuario } = require('../controllers/auth');
const { validarCampos } = require('../middleware/validar-campos');


const router = Router();


router.post('/new',
[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('password','La contraseña es obligatoria').not().isEmpty(),
    check('email','No es un correo válido').isEmail(),
validarCampos],
crearUsuario);


module.exports = router;