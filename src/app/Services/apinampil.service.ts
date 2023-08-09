import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Porto } from '../Model/Porto';

@Injectable({
  providedIn: 'root',
})
export class ApinampilService {
  private baseUrl: string = 'https://localhost:7288/api/Nampil';
  constructor(private http: HttpClient) {}

  public ambils(): Observable<Porto[]> {
    return this.http.get<Porto[]>(`${this.baseUrl}`);
  }

  public ambilById(id: number): Observable<Porto> {
    return this.http.get<Porto>(`${this.baseUrl}/${id}`);
  }

  public updatePortofolio(id: number, portofolio: Porto): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, portofolio);
  }
}
