import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../service/crud_autoecole.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './autoecole-list.component.html',
  styleUrls: ['./autoecole-list.component.css']
})
export class autoecoleListComponent implements OnInit {

  autoecole:any = [];

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.getauto_ecoles().subscribe( res=>{
      console.log(res)
      this.autoecole= res;
    })
  }

  delete(id:any,i:any){
    console.log(id);
    this.crudService.delete_autoecole(id).subscribe(res => {

      this.autoecole.splice(i,1);
    })
  }

}
