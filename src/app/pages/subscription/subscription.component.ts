import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UniversidadService } from '../../services/universidad.service';
import { University } from '../../models/university';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  universityForm: FormGroup;
  titulo = 'Crear Carrera y Pensum';
  id: string | null;
  universities= [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private universidadService: UniversidadService,

    private aRoute: ActivatedRoute
  ) {
    this.universityForm = this.fb.group({
      universityName: ['', Validators.required],
      infoUniversity: [''],
      pensumName: ['', Validators.required],
      infoPensum: [''],
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarProducto(){
    console.log(this.universityForm);

    const university: University = {
      universityName: this.universityForm.get('universityName')?.value,
      infoUniversity: this.universityForm.get('infoUniversity')?.value,
      pensumName: this.universityForm.get('pensumName')?.value,
      infoPensum: this.universityForm.get('infoPensum')?.value,
    }

    if(this.id !== null){
      //editamos
      this.universidadService.editarUniversity(this.id, university).subscribe(
        data =>{
          this.toastr.info('El university fue actualizado con exito', 'university Actualizado');
        this.router.navigate(['/']);
        console.log('edit1', this.universityForm.value);

        }
      )
    }else{
      //creamos
      console.log(university);
      this.universidadService.guardarUniversity(university).subscribe(
        data => {
          this.toastr.success('El university fue registrado con exito', 'university Registrado');
          this.router.navigate(['/']);
          console.log('create', this.universityForm.value);
      })
    }



  }

  esEditar(){
    if(this.id !== null){
      this.titulo = 'Editar Producto';
      this.universidadService.obtenerUniversity(this.id).subscribe(
        data => {
          this.universityForm.setValue({
            universityName: data.universityName,
            infoUniversity: data.infoUniversity,
            pensumName: data.pensumName,
            infoPensum: data.infoPensum,

          })
          console.log('edit', this.universityForm.value);
        }
      )
    }
  }

}
