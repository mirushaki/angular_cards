import { Component, OnInit } from '@angular/core';
import { RouterMap } from 'src/app/routermap';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data:any = [
    { name: 'James', age: 24, job: 'Designer', employed: true },
    { name: 'Jill', age: 26, job: 'Engineer', employed: false },
    { name: 'Elyse', age: 25, job: 'Engineer', employed: true }
  ];
  headers = [
    { key: 'employed', label: 'Has a Job?' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' }
  ];

  constructor() {}

  ngOnInit() {}


  

  getCompanyRoute()
  {
    return RouterMap.routes.collections.companies.path;
  }

  getPartnersRoute()
  {
    return RouterMap.routes.collections.partners.path;
  }
}
