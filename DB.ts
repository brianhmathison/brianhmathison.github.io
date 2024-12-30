interface Database<T, K> {
  get(id: K) : T;
  set(id: K, value: T): void;
}

interface Persistable {
  saveToString(): string;
  restoreFromString(storedState: string): void;
}

type DBKeyType = string | number | symbol;

class InMemoryDatabase<T, K extends DBKeyType> implements Database<T, K> {
  protected db: Record<K, T> = {} as Record<K, T>;

  get(id: K): T {
    return this.db[id];
  }

  set(id: K, value: T): void {
    this.db[id] = value;
  }
}

class PersistentMemoryDB<T, K extends DBKeyType> extends InMemoryDatabase<T, K> {
  saveToString(): string {
    return JSON.stringify(this.db);
  }

  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState);
  }
}

const myDb = new PersistentMemoryDB<number, string>();
myDb.set('foo', 123);
//
console.log(myDb.get('foo'));
const saved = myDb.saveToString();
myDb.set('foo', 456);
console.log(myDb.get('foo'));

const myDB2 = new PersistentMemoryDB<number, string>();
myDB2.restoreFromString(saved);
console.log(myDB2.get('foo'));
