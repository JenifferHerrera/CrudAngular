import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  URL_API = 'http://localhost:3000/api/empleados';

  selectedEmpleado: Empleado = {
    name: '',
    position: '',
    office: '',
    salary: 0
  };
  
  empleados: Empleado[] = [];

  constructor(private http: HttpClient) { }

  getEmpleados(){
    return this.http.get<Empleado[]>(this.URL_API);
  }

  createEmpleado(empleado: Empleado){
    return this.http.post(this.URL_API, empleado);
  }

  putEmpleado(empleado: Empleado){
    return this.http.put(`${this.URL_API}/${empleado._id}`, empleado);
  }


  deleteEmpleado(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`);
  }
}
