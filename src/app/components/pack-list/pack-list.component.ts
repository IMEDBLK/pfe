import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../service/crud.service';

@Component({
  selector: 'app-pack-list',
  templateUrl: './pack-list.component.html',
  styleUrls: ['./pack-list.component.css']
})
export class packListComponent implements OnInit {







  packs:any = [];

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.getpacks().subscribe( res=>{
      console.log(res)
      this.packs = res;
    })
  }

  delete(id:any,i:any){
    console.log(id);
    this.crudService.deletepack(id).subscribe( res=> {

      this.packs.splice(i,1);
    })
  }

}
