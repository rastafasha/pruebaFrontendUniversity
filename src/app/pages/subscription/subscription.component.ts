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

    const product: University = {
      universityName: this.universityForm.get('universityName')?.value,
      infoUniversity: this.universityForm.get('infoUniversity')?.value,
      pensumName: this.universityForm.get('pensumName')?.value,
      infoPensum: this.universityForm.get('infoPensum')?.value,
    }

    if(this.id !== null){
      //editamos
      this.universidadService.editarUniversity(this.id, product).subscribe(
        data =>{
          this.toastr.info('El producto fue actualizado con exito', 'Producto Actualizado');
        this.router.navigate(['/']);
        }
      )
    }else{
      //creamos
      console.log(product);
      this.universidadService.guardarUniversity(product).subscribe(
        data => {
          this.toastr.success('El producto fue registrado con exito', 'Producto Registrado');
          this.router.navigate(['/']);
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
        }
      )
    }
  }

}
