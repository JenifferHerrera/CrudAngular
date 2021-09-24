const empleadoCtrl = {};

const Empleado = require('../models/empleado');

empleadoCtrl.getEmpleados = async (req, res) => {
    //res.send('get empleados');
    const empleados = await Empleado.find();
    res.json(empleados);
};
empleadoCtrl.createEmpleado = async (req, res) => {
    //res.send('create empleado');
    const newEmpleado = new Empleado(req.body);

    await newEmpleado.save();
    
    res.send({message: 'Empleado creado'});
};
empleadoCtrl.getEmpleado = async (req, res) => {
    //res.send('get empleado');
    const empleado = await Empleado.findById(req.params.id);
    res.send(empleado);
};
empleadoCtrl.editEmpleado = async (req, res) => {
    //res.send('edit empleados');
    await Empleado.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: 'empleado actualizado'});
};
empleadoCtrl.deleteEmpleado = async (req, res) => {
    //res.send('delete empleados');
    await Empleado.findByIdAndDelete(req.params.id);
    res.json({status: 'Empleado eliminado'});
};


module.exports = empleadoCtrl;