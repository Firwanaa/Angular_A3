import { Component, OnInit } from '@angular/core';
import { BookInfo } from '../bookInfo';
import { myFavBooks } from '../data/myBook';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  myBookInfo = myFavBooks;
   goodToGo: boolean[] = [];
   flag: boolean = false;
    num!: number;
    pic!:string;
    BTitle:string = "Book Info Will be displayed here !";
    BAuthor!:string;
    BGenre!:string;
    BYear!:string;

  constructor() { }

  ngOnInit(): void {
    this.pic ='assets/Images/empty.png';
  }
   onClick(i:any): void {
    this.goodToGo[i] = !this.goodToGo[i];
    this.num = i;
    this.pic = myFavBooks[i].picture;
    this.BTitle = myFavBooks[i].BookTitle;
    this.BAuthor = myFavBooks[i].author;
    this.BGenre = myFavBooks[i].gener;
    this.BYear = myFavBooks[i].year;
   }

}
