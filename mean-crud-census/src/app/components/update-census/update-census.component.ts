import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Census } from 'src/app/service/Census';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-update-census',
  templateUrl: './update-census.component.html',
  styleUrls: ['./update-census.component.css']
})
export class UpdateCensusComponent implements OnInit {
  censusForm: FormGroup;
  Census: any = [];
  paramsObserver: any;
  id: any

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private ngZone: NgZone,
    private crudService: CrudService
  ) {
    this.censusForm = this.formBuilder.group({
      householdAddress: [''],
      householdCity: [''],
      householdState: [''],
      householdZip: [''],
      numPeople: [''],
      year: [''],
      takerName: ['']
    })
  }

  ngOnInit(): void { 
    this.paramsObserver = this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log('editing', this.id);
      this.crudService.GetCensus(this.id).subscribe(Census => {
        console.log('got cencus by id', Census)
        this.Census = Census;
        this.censusForm = this.formBuilder.group(Census);
      })
    })
  }

  onUpdate(): any {
    console.log('opening form to update', this.id, this.censusForm.value);

    this.crudService.UpdateCensus(this.id, this.censusForm.value)
      .subscribe(
        res => {
          console.log(res)
      })
    this.ngZone.run(() => this.router.navigateByUrl('/censuses-list'));
  }
}