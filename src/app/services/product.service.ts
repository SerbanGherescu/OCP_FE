import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../commons/product';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/products'

  constructor(private httpClient: HttpClient) { }


  /*  Metoda intoarce o lista de tipul observable care print-un apel va intoarce toate info din API-ul de backend, 
  mapand obiectele de la DTO
  
  Maparea se face folosind o interfata GetTesponse care are aceasi structura ca raspunsul din backend
   */ 
  getProductList(): Observable<Product[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(map(response => response._embedded.products));
  }

}


/*  
return - intoarce rezultatul
get productList - numele metodei
observable - o lista
prin intermediul httpClient facem un apel de tip GetResponse


 */ 

/*  interfata preia lista de produse din interiorul obiectului JSON _embedded */ 
interface GetResponse{
  /* pot schimba _embedded cu links, doar sa fac si maparea corecta adica in lgitoc de response._embedded sa pun links
  sau cu ce am nevoie */ 
  _embedded: {
    products: Product[];
  }
}