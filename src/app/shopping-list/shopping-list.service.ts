import { take, map } from 'rxjs/operators';
import { Item } from './../models/item';
import { AuthService } from './../auth/auth.service';
import { AngularFireDatabase, AngularFireList, AngularFireObject  } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private listRef: AngularFireList<Item>;
  public taskList: Observable<Item[]>;
  private path: string;

  constructor(private auth: AuthService, private db: AngularFireDatabase) {
    auth.uid.pipe(
      take(1)
    ).subscribe(uid => {
      this.path = `/tasks/${uid}`;

      this.listRef = db.list(this.path);

      this.taskList = db.list<Item>(this.path).snapshotChanges().pipe(
        map(changes =>
          changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
        )
      );
    });
  }

  createTask() {
    return this.listRef.push(new Item());
  }

  updateTask(item: Item) {
    return this.listRef.update(item.key, { title: item.title, checked: item.checked });
  }

  removeTask(item: Item) {
    return this.listRef.remove(item.key);
  }
}
