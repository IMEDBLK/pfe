import { Component, OnInit ,NgZone} from '@angular/core';
import {Router} from '@angular/router';
import { CrudService } from '../../service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-pack',
  templateUrl: './add-pack.component.html',
  styleUrls: ['./add-pack.component.css']
})
export class AddpackComponent implements OnInit {


  bookForm: FormGroup;

  constructor(
    public formBiulder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private crudService: CrudService
  ) {
     this.bookForm = this.formBiulder.group({
       name: [''],
       price: [''],
       description: [''],
     })
  }

  ngOnInit(): void {
  }

  onSubmit():any{
    this.crudService.addpack(this.bookForm.value)
    .subscribe(()=>{
      console.log('Data added successfully')
      this.ngZone.run(()=> this.router.navigateByUrl('/pack-list'))
    },(err)=>{
      console.log(err)
    })
  }

}
