import { Mongo } from 'meteor/mongo';

class RecordsCollection extends Mongo.Collection {
  insert(record, callback) {
    return super.insert(record, callback);
  }
}

export const Records = new RecordsCollection('records');
