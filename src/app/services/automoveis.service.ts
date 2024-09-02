import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutomoveisService {
  private apiUrl = 'https://66d5fa3af5859a70426807dc.mockapi.io/api/automoveis'; 

  constructor(private http: HttpClient) { }

  listAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}