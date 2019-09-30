import { Injectable } from '@angular/core';
import { Pin } from './pin.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { map, catchError } from 'rxjs/operators';
import { Observable, Subject, of } from 'rxjs';
import { Photo } from 'src/app/photo.model';
@Injectable({
  providedIn: 'root'
})

export class PinDataService {
  public loadingError$ = new Subject<String>();
  constructor(private http: HttpClient) { 

  }

  get pins$():Observable< Pin[]>{
    return this.http.get(`${environment.apiUrl}/pins`).pipe(
      catchError(error => {
        this.loadingError$.next(error.statusText);
        return of(null);
      }),
      map(
        (list : any[]) : Pin[] => list.map(Pin.fromJSON)
      )
    );
  }

  addNewPin(pin : Pin){
    return this.http.post(`${environment.apiUrl}/pins`,pin.toJSON()).pipe(
      catchError(error => {
        this.loadingError$.next(error.statusText);
        return of(null);
      })
    );
  }
  
  getPin$(lat,long): Observable<Pin>{
    return this.http.get(`${environment.apiUrl}/pins/${lat}&${long}`).pipe(
      catchError(error => {
        this.loadingError$.next(error.statusText);
        return of(null);
      }),
      map(
        (jsonPin : any) : Pin => Pin.fromJSON(jsonPin)
      )
    );
  }

  getPinById$(id): Observable<Pin>{
    return this.http.get(`${environment.apiUrl}/pins/${id}`).pipe(
      catchError(error => {
        this.loadingError$.next(error.statusText);
        return of(null);
      }),
      map(
        (jsonPin : any) : Pin => Pin.fromJSON(jsonPin)
      )
    );
  }

  updatePin$(pin :Pin){
    pin.images.forEach(i => console.log(i.toString()));
    return this.http.put(`${environment.apiUrl}/pins/${pin.id}`,pin.toJSON()).pipe(
      catchError(error => {
        this.loadingError$.next(error.statusText);
        return of(null);
      })
    );
  }

  deletePin$(pin :Pin){
    return this.http.delete(`${environment.apiUrl}/pins/${pin.id}`).pipe(
      catchError(error => {
        this.loadingError$.next(error.statusText);
        return of(null);
      })
    );
  }

  deleteAllImages$(pin :Pin){
    return this.http.delete(`${environment.apiUrl}/pins/${pin.id}/images`).pipe(
      catchError(error => {
        this.loadingError$.next(error.statusText);
        return of(null);
      })
    );
  }

  deleteImagePin$(pin :Pin,photo :Photo){
    return this.http.delete(`${environment.apiUrl}/pins/${pin.id}/images/${photo.id}`).pipe(
      catchError(error => {
        this.loadingError$.next(error.statusText);
        return of(null);
      })
    );
  }

  deleteImagePinBySrc$(pin :Pin,photo :Photo){
    return this.http.delete(`${environment.apiUrl}/pins/${pin.id}/images/${photo.src}`).pipe(
      catchError(error => {
        this.loadingError$.next(error.statusText);
        return of(null);
      })
    );
  }
}
