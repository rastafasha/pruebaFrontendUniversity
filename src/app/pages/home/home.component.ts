import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  studentForm: FormGroup;
  titulo = 'Crear Carrera y Pensum';
  id: string | null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private studentService: StudentService,

    private aRoute: ActivatedRoute
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
  }

  agregarProducto(){
    console.log(this.studentForm);

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
        }
      )
    }else{
      //creamos
      console.log(student);
      this.studentService.guardarStudent(student).subscribe(
        data => {
          this.toastr.success('El producto fue registrado con exito', 'Producto Registrado');
          this.router.navigate(['/']);
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
        }
      )
    }
  }

}
