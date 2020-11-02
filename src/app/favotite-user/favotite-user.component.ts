import { Component, OnInit } from '@angular/core';
import {User} from "../user";

@Component({
  selector: 'app-favotite-user',
  templateUrl: './favotite-user.component.html',
  styleUrls: ['./favotite-user.component.css']
})
export class FavotiteUserComponent implements OnInit {
  favouritesUser: User[];
  selectedFavouritesUser: User;
  constructor() { }

  ngOnInit(): void {
    this.getFavouritesUser()
  }

  getFavouritesUser(){
    const data =  localStorage.getItem('favourites');
    this.favouritesUser =  JSON.parse(<string>data);
  }

  onSelect(favouritesUser: User): void {
    this.selectedFavouritesUser = favouritesUser;
    console.log('selected')
  }
}
