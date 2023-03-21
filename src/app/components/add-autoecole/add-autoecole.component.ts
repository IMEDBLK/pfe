import { Component, OnInit ,NgZone} from '@angular/core';
import {Router} from '@angular/router';
import { CrudService } from '../../service/crud_autoecole.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-autoecole',
  templateUrl: './add-autoecole.component.html',
  styleUrls: ['./add-autoecole.component.css']
})
export class AddautoecoleComponent implements OnInit {


  autoecoleForm: FormGroup;

  constructor(
    public formBiulder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private crudService: CrudService
  ) {
     this.autoecoleForm = this.formBiulder.group({
       mail: [''],
       password: [''],
       num_tel: [''],
       matricule: [''],
       nom: [''],
     })
  }

  ngOnInit(): void {
  }

  onSubmit():any{
    this.crudService.addautoecole(this.autoecoleForm.value)
    .subscribe(()=>{
      console.log('Data added successfully')
      this.ngZone.run(()=> this.router.navigateByUrl('/autoecole-list'))
    },(err)=>{
      console.log(err)
    })
  }

}
