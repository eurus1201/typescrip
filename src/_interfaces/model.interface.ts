  
import { Action, Thunk, Computed } from 'easy-peasy';

import Entry from './entery.interface';

export default interface Model {
  entries: Entry[];
  reverseEntries: Computed<Model, Entry[]>;
  setEntries: Action<Model, Entry[]>;
  addEntry: Action<Model, Entry>;
  createEntry: Thunk<Model, Entry>;
  getEntries: Thunk<Model>;
}