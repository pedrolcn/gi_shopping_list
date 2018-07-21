import * as uuid from 'uuid';
import * as moment from 'moment';

export class Item {
  key?: string;
  id?: string;
  title: string;
  checked: boolean;
  readonly createdAt?: Date;
  updatedAt?: Date;

  constructor(data: Partial<Item> = {}) {
    this.id =  data.id || uuid.v4();
    this.title = data.title || '';
    this.checked = data.checked || false;
    this.createdAt = moment().toDate();
    this.updatedAt = moment().toDate();
  }
}
