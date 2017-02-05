import { Mongo } from 'meteor/mongo';

class EntriesCollection extends Mongo.Collection {
  insert(entry, callback) {
    return super.insert(entry, callback);
  }
}

export const Entries = new EntriesCollection('entries');
