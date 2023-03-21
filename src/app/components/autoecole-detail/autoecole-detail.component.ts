import { Component, OnInit, NgZone } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { CrudService } from '../../service/crud_autoecole.service';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-book-detail',
  templateUrl: './autoecole-detail.component.html',
  styleUrls: ['./autoecole-detail.component.css']
})
export class autoecoleDetailComponent implements OnInit {

  getId:any;
  updateForm: FormGroup;


  constructor(
    public formBiulder: FormBuilder,
    private router: Router,
    private activateRout: ActivatedRoute,
    private ngZone: NgZone,
    private crudService: CrudService
  ) {
    this.getId = this.activateRout.snapshot.paramMap.get('id');
    this.crudService.getauto_ecole(this.getId).subscribe(res=>{
      console.log(res['autoecole'])
      this.updateForm.setValue({
        mail: res['autoecole']['mail'],
        password: res['autoecole']['password'],
        num_tel: res['autoecole']['num_tel'],
        matricule: res['autoecole']['matricule'],
        nom: res['autoecole']['nom'],
      });
    });

    this.updateForm = this.formBiulder.group({
      mail: [''],
      password: [''],
      num_tel: [''],
      matricule: [''],
      nom: [''],
    })
   }

  ngOnInit(): void {
  }

  onUpdate(): any {
    this.crudService.update_autoecole(this.getId,this.updateForm.value)
      .subscribe(() => {
        console.log('Data updated successfully')
        this.ngZone.run(() => this.router.navigateByUrl('/autoecole-list'))
      }, (err) => {
        console.log(err)
      })
  }

}
