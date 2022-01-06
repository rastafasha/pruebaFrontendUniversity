import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentService } from '../../services/student.service';
import { ToastrService } from 'ngx-toastr';
import { University } from 'src/app/models/university';
import { UniversidadService } from 'src/app/services/universidad.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {

  listStudents: Student[]= [];
  listUniversity: University[]= [];

  constructor(
    private studentService: StudentService,
    private toastrService: ToastrService,
    private universidadService: UniversidadService,
  ) { }

  ngOnInit(): void {

    //this.obtenerProductos();
    this.getUniversityList();
    this.getStudentList();
  }



  // obtenerProductos(){
  //   this.studentService.getStudents().subscribe(data =>{
  //     console.log(data);
  //     this.listStudents = data;
  //   });
  // }



  eliminarProducto(id: any){
    this.studentService.elminarStudent(id).subscribe(
      data => {
        this.toastrService.error('El producto fue eliminado con exito', 'Producto Eliminado');
        // this.obtenerProductos();
        this.getStudentList();
        this.getUniversityList();
      }
    )
  }

  getUniversityList(): void{
    this.listUniversity = this.universidadService.getUniversitys();
    console.log(this.listUniversity);

  }

  getStudentList(): void{
    this.listStudents = this.studentService.getStudents();
    console.log(this.listStudents);

  }

}
