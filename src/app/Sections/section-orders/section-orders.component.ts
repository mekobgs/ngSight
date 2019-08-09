import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/Shared/order';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

  orders: Order[] = [
    {id: 1, customer: {id: 1, name: 'Main St Bakery', state: 'CO', email: 'echacon@gmail.com'}, total: 230, placed: new Date(2017,12,1), fulfilled: new Date(2017,12,2), status:'Completed'},
    {id: 2, customer: {id: 2, name: 'Main St Simon', state: 'CO', email: 'echacon@gmail.com'}, total: 2, placed: new Date(2017,12,1), fulfilled: new Date(2017,12,2), status:'Completed'},
    {id: 3, customer: {id: 3, name: 'Main St Ronald', state: 'CO', email: 'echacon@gmail.com'}, total: 150, placed: new Date(2017,12,1), fulfilled: new Date(2017,12,2), status:'Completed'},
    {id: 4, customer: {id: 4, name: 'Main St Firulais', state: 'CO', email: 'echacon@gmail.com'}, total: 520, placed: new Date(2017,12,1), fulfilled: new Date(2017,12,2), status:'Completed'},
    {id: 5, customer: {id: 5, name: 'Main St Bakery', state: 'CO', email: 'echacon@gmail.com'}, total: 230, placed: new Date(2017,12,1), fulfilled: new Date(2017,12,2), status:'Completed'}
  ]

  ngOnInit() {
  }

}
