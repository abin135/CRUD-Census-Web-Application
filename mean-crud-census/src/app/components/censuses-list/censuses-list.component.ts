import { Component, OnInit, NgZone } from '@angular/core';
import { CrudService } from '../../service/crud.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-censuses-list',
  templateUrl: './censuses-list.component.html',
  styleUrls: ['./censuses-list.component.css']
})
export class CensusesListComponent implements OnInit {

  Censuses:any = [];
 
  constructor(private crudService: CrudService,
    private router: Router,
    private ngZone: NgZone ) { }
 
  ngOnInit(): void {
    this.crudService.GetCensuses().subscribe(res => {
      console.log(res)
      this.Censuses =res;
    });    
  }

  onDelete(id: any): any {
    this.crudService.DeleteCensus(id)
      .subscribe(res => {
        console.log(res)
      })
    location.reload();
  }

  onUpdate(id: any): any {
  //  this.crudService.GetCensus(id)
  //  .subscribe(res => { 
  //    console.log(res)
  //  })
    this.ngZone.run(() => this.router.navigateByUrl(`/update-census/${id}`))
  }
}
