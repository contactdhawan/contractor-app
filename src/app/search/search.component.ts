// search.component.ts
import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private http: HttpClient) { }
  searchQuery: string = '';
  searchResults: any;

  getData(id: string): Observable<any> {
    return this.http.get<any>(`https://c6fvebzudk.execute-api.us-west-2.amazonaws.com/items/` + id);
  }
  search(): void {
    console.log(this.searchQuery)
    this.getData(this.searchQuery).subscribe(data => {
      this.searchResults = data;
    });
  //   // Implement your search logic here
  //   // For demonstration, we'll just split the search query into words
  //   if (this.searchQuery.trim() !== '') {
  //     console.log(this.searchQuery)
  //     this.searchResults = this.searchQuery.split(' ');
  //   } else {
  //     this.searchResults = [];
  //   }
  // }
}
}