import { Injectable } from "@angular/core";
import { Observable,of } from "rxjs";

@Injectable({
  providedIn:'root'
})
export class WebCallService{
constructor(){}
getMenuItems():Observable<any>{
  let itemAray=[
    {item:'Menu Item1'},
    {item:'Menu Item2'},
    {item:'Menu Item3'},
    {item:'Menu Item4'}
  ];
  return of(itemAray);
}
}