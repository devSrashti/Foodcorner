import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Foods[]{
  return[

    {

      id:1,
      name:'Kaju Barfi',
      cookTime:'10-20',
      price:10,
      favourite:false,
      origins:['indian'],
      star:4.5,
      imageUrl:'/assets/food-1.jpg',
      tags:['sweets'],
      
      },
      {
      
      id:2,
      name:'Chole Bhature',
      cookTime:'10-20',
      price:10,
      favourite:false,
      origins:['indian'],
      star:4.5,
      imageUrl:'/assets/food-2.jpg',
      tags:['sweets'],
      
      },
      {
      
      id:3,
      name:'Masala Dosa',
      cookTime:'10-20',
      price:10,
      favourite:false,
      origins:['indian'],
      star:4.5,
      imageUrl:'/assets/food-3.jpg',
      tags:['sweets'],
      
      },
      {
      
      id:4,
      name:'Gulab Jamun',
      cookTime:'10-20',
      price:10,
      favourite:false,
      origins:['indian'],
      star:4.5,
      imageUrl:'/assets/food-4.jpg',
      tags:['sweets'],
      
      },
      {
      
      id:5,
      name:'Spicy Taco',
      cookTime:'10-20',
      price:10,
      favourite:false,
      origins:['indian'],
      star:4.5,
      imageUrl:'/assets/food-5.jpg',
      tags:['sweets'],
      
      },
      {
      
      id:6,
      name:'Puri Sabji',
      cookTime:'10-20',
      price:10,
      favourite:false,
      origins:['indian'],
      star:4.5,
      imageUrl:'/assets/food-6.jpg',
      tags:['sweets'],
      
      },
      {
      
      id:7,
      name:'Pastry',
      cookTime:'10-20',
      price:10,
      favourite:false,
      origins:['indian'],
      star:4.5,
      imageUrl:'/assets/food-7.jpg',
      tags:['sweets'],
      
      },
      {
      
      id:8,
      name:'Pizza',
      cookTime:'10-20',
      price:10,
      favourite:false,
      origins:['indian'],
      star:4.5,
      imageUrl:'/assets/food-8.jpg',
      tags:['sweets'],
      
      }

  ];

  }
}
