import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private jsonUrl = 'assets/users.json';
  constructor(private http: HttpClient) {}

  getUser(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}
