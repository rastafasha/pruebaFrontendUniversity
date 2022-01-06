import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Student } from 'src/app/models/student';
import { University } from 'src/app/models/university';
import { UniversidadService } from 'src/app/services/universidad.service';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  studentForm: FormGroup;
  titulo = 'Crear Student';
  id: string | null;
  listUniversity: University[]= [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private studentService: StudentService,
    private aRoute: ActivatedRoute,
    private universidadService: UniversidadService,
  ) {
    this.studentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      idCard: ['', Validators.required],
      bornDate: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      homeAddress: ['', Validators.required],
      university: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      carrer: ['', Validators.required],
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
    this.getUniversityList();
  }

  getUniversityList(): void{
    this.listUniversity = this.universidadService.getUniversitys();
    console.log(this.listUniversity);

  }

  agregarProducto(){
    // console.log(this.studentForm);

    const student: Student = {
      firstName: this.studentForm.get('firstName')?.value,
      lastName: this.studentForm.get('lastName')?.value,
      idCard: this.studentForm.get('idCard')?.value,
      bornDate: this.studentForm.get('bornDate')?.value,
      phoneNumber: this.studentForm.get('phoneNumber')?.value,
      homeAddress: this.studentForm.get('homeAddress')?.value,
      university: this.studentForm.get('university')?.value,
      email: this.studentForm.get('email')?.value,
      password: this.studentForm.get('password')?.value,
      carrer: this.studentForm.get('carrer')?.value,
    }

    if(this.id !== null){
      //editamos
      this.studentService.editarStudent(this.id, student).subscribe(
        data =>{
          this.toastr.info('El producto fue actualizado con exito', 'Producto Actualizado');
        this.router.navigate(['/']);
        console.log('edit1', this.studentForm.value);
        }
      )
    }else{
      //creamos
      console.log(student);
      this.studentService.guardarStudent(student).subscribe(
        data => {
          this.toastr.success('El producto fue registrado con exito', 'Producto Registrado');
          this.router.navigate(['/']);
          console.log('edit2', this.studentForm.value);
      })
    }



  }

  esEditar(){
    if(this.id !== null){
      this.titulo = 'Editar Producto';
      this.studentService.obtenerStudent(this.id).subscribe(
        data => {
          this.studentForm.setValue({
            firstName: data.firstName,
            lastName: data.lastName,
            idCard: data.idCard,
            bornDate: data.bornDate,
            phoneNumber: data.phoneNumber,
            homeAddress: data.homeAddress,
            university: data.university,
            email: data.email,
            password: data.password,
            carrer: data.carrer,

          })
          console.log('edit3', this.studentForm.value);
        }
      )
    }
  }

}
