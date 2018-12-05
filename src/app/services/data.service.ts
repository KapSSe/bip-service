import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  public data: Observable<any>;

  constructor(db: AngularFireDatabase) {
    this.data = db.object('/').valueChanges();
  }

}
