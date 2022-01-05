import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentService } from '../../services/student.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {

  listStudents: Student[]= [];

  constructor(
    private studentService: StudentService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {

    this.obtenerProductos();
  }

  obtenerProductos(){
    this.studentService.getStudents().subscribe(data =>{
      console.log(data);
      this.listStudents = data;
    });
  }

  eliminarProducto(id: any){
    this.studentService.elminarStudent(id).subscribe(
      data => {
        this.toastrService.error('El producto fue eliminado con exito', 'Producto Eliminado');
        this.obtenerProductos();
      }
    )
  }

}
