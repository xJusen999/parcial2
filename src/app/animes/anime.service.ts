import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Anime } from './anime';

import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private apiUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getAnimes(): Observable<Anime[]> {

    return this.http.get<Anime[]>(this.apiUrl);
  }

}
