import * as uuid from 'uuid';
import * as moment from 'moment';

export class Item {
  id: string;
  title: string;
  checked: boolean;
  protected readonly createdAt: Date;
  protected updatedAt: Date;

  constructor(data: Partial<Item> = {}) {
    this.id =  data.id || uuid.v4();
    this.title = data.title;
    this.checked = data.checked || false;
    this.createdAt = moment().toDate();
    this.updatedAt = moment().toDate();
  }
}
