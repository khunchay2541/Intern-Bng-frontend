import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from 'src/app/services/global.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  title: string;
  cover: File;
  data: any;
  name: any;

  constructor(
    private router: Router,
    private http: HttpClient,
    private globalService: GlobalService,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:8000/books').subscribe(
      data => {
        this.data = data;
        console.log(this.data);
      }
    );
    this.profile()

  }

  profile(){
    const name = this.globalService.getProfile()
    this.name=name;
   
  }

  refresh(): void {
    window.location.reload();
  }

  tempA(): void {
    this.router.navigate(['/tempA']);
  }

  tempB(): void {
    this.router.navigate(['/tempB']);
  }

  onTitleChanged(event: any): void {
    this.title = event.target.value;
  }

  onFileChanged(event: any): void {
    this.cover = event.target.files[0];
  }

  newBook(): void {
    const uploadData = new FormData();
    uploadData.append('title' , this.title);
    uploadData.append('cover' , this.cover,this.cover.name);
    this.http.post('http://127.0.0.1:8000/books/' , uploadData).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  moveToSend(){
    this.router.navigate(['/send'])
  }

  moveToPage(){
    this.router.navigate(['/page'])
  }

}
