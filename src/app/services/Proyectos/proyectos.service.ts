import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GLOBAL } from '../global.service';


@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  public url!: string;
  public metodo!: string;

  constructor(private http: HttpClient) { 
    console.log('cargando nuestro servicio');
  }

  private httpOptions = {
    headers: new HttpHeaders({
        "Content-Type": "application/json; charset=utf-8"
        , 'Access-Control-Allow-Origin': '*'
        , 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, HEAD'   
        , 'Authorization': 'No Auth '    
    })
}

getDataService(objetoM: any,nameProyectoEstado:String):Observable<any>{
  let body = JSON.stringify(objetoM);
  
  switch (nameProyectoEstado) {
    case "ProyectoPriorizado":
      this.metodo = "Proyecto/Priorizado";
          break;
    default:
        break;
}
  this.url = GLOBAL.url_repadie + this.metodo;
  return this.http.post(this.url, body, this.httpOptions);
}
}
