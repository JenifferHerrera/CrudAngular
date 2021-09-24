const { Router } = require('express');
const router = Router();

const empleadoCtrl = require('../controlers/empleados.controller.js');

router.get('/', empleadoCtrl.getEmpleados);
router.post('/', empleadoCtrl.createEmpleado);
router.get('/:id', empleadoCtrl.getEmpleado);
router.put('/:id', empleadoCtrl.editEmpleado);
router.delete('/:id', empleadoCtrl.deleteEmpleado);

module.exports = router;