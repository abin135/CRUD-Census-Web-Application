import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../service/crud.service';

@Component({
  selector: 'app-censuses-list',
  templateUrl: './censuses-list.component.html',
  styleUrls: ['./censuses-list.component.css']
})
export class CensusesListComponent implements OnInit {

  Censuses:any = [];
 
  constructor(private crudService: CrudService) { }
 
  ngOnInit(): void {
    this.crudService.GetCensuses().subscribe(res => {
      console.log(res)
      this.Censuses =res;
    });    
  }
}
