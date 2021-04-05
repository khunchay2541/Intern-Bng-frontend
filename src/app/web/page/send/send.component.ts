import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from 'src/app/services/global.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss']
})
export class SendComponent implements OnInit {
  title: string;
  cover: File;
 // name: any;
  user_name: any;  //สรา้งเงื่อนไขแสดงปุ่มส่ง data ให้ user 

  books1:any
  books2:any
  books3:any
  books4:any
  books5:any
  booksTest:any
  

  constructor(
    private router: Router,
    private http: HttpClient,
    private globalService: GlobalService,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    this.profile()
    this.list_books1();
    this.list_books2();
    this.list_books3();
    this.list_books4();
    this.list_books5();
    this.list_booksTest();
  }

  profile(){
    const name = this.globalService.getProfile()
    this.user_name=name;
   
  }

  moveToPage(){
    this.router.navigate(['/page'])
  }

  refresh(): void {
    window.location.reload();
  }

  logout(){
    this.cookieService.deleteAll()
    this.router.navigate(['/login'])
  }


//ไว้สร้างปุ่มและไว้ส่งให้อีก user-----------------------------------
  sendA(): void {
    const uploadData = new FormData();
    uploadData.append('title' , this.title);
    uploadData.append('sender' , this.user_name);
    uploadData.append('cover' ,this.cover, this.cover.name);
    this.http.post('http://127.0.0.1:8000/books_1/' , uploadData).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }
  sendB(): void {
    const uploadData = new FormData();
    uploadData.append('title' , this.title);
    uploadData.append('sender' , this.user_name);
    uploadData.append('cover' ,this.cover, this.cover.name);
    this.http.post('http://127.0.0.1:8000/books_2/' , uploadData).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }
  sendC(): void {
    const uploadData = new FormData();
    uploadData.append('title' , this.title);
    uploadData.append('sender' , this.user_name);
    uploadData.append('cover' ,this.cover, this.cover.name);
    this.http.post('http://127.0.0.1:8000/books_3/' , uploadData).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }
  sendD(): void {
    const uploadData = new FormData();
    uploadData.append('title' , this.title);
    uploadData.append('sender' , this.user_name);
    uploadData.append('cover' ,this.cover, this.cover.name);
    this.http.post('http://127.0.0.1:8000/books_4/' , uploadData).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }
  sendE(): void {
    const uploadData = new FormData();
    uploadData.append('title' , this.title);
    uploadData.append('sender' , this.user_name);
    uploadData.append('cover' ,this.cover, this.cover.name);
    this.http.post('http://127.0.0.1:8000/books_5/' , uploadData).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }
  
  onTitleChanged(event: any): void {
    this.title = event.target.value;
  }
  onFileChanged(event: any): void {
    this.cover = event.target.files[0];
  }

//ไว้แสดง list pdf---------------------------------------
  list_books1(){
    this.http.get('http://127.0.0.1:8000/books_1').subscribe(
        data => {
          this.books1 = data;
          console.log(this.books1);
        }
      );
  }
  list_books2(){
    this.http.get('http://127.0.0.1:8000/books_2').subscribe(
        data => {
          this.books2 = data;
          console.log(this.books2);
        }
      );
  }
  list_books3(){
    this.http.get('http://127.0.0.1:8000/books_3').subscribe(
        data => {
          this.books3 = data;
          console.log(this.books3);
        }
      );
  }
  list_books4(){
    this.http.get('http://127.0.0.1:8000/books_4').subscribe(
        data => {
          this.books4 = data;
          console.log(this.books4);
        }
      );
  }
  list_books5(){
    this.http.get('http://127.0.0.1:8000/books_5').subscribe(
        data => {
          this.books5 = data;
          console.log(this.books5);
        }
      );
  }

  list_booksTest(){
    this.http.get('http://127.0.0.1:8000/books_test').subscribe(
        data => {
          this.booksTest = data;
          console.log(this.booksTest);
        }
      );
  }



}

