import { Component, OnInit, NgZone } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { CrudService } from '../../service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-pack-detail',
  templateUrl: './pack-detail.component.html',
  styleUrls: ['./pack-detail.component.css']
})
export class packDetailComponent implements OnInit {

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
    this.crudService.getpack(this.getId).subscribe(res=>{
      console.log(res['pack'])
      this.updateForm.setValue({
        name: res['pack']['name'],
        price: res['pack']['price'],
        description: res['pack']['description'],
      });
    });

    this.updateForm = this.formBiulder.group({
      name: [''],
      price: [''],
      description: [''],
    })
   }

  ngOnInit(): void {
  }

  onUpdate(): any {
    this.crudService.updatepack(this.getId,this.updateForm.value)
      .subscribe(() => {
        console.log('Data updated successfully')
        this.ngZone.run(() => this.router.navigateByUrl('/pack-list'))
      }, (err) => {
        console.log(err)
      })
  }

}
