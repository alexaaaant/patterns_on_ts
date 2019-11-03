interface Iterator<T> {
  getCurrentPosition(): any,
  getKey(): number,
  next(): T,
  valid(): boolean,
}

class ConcreteIterator implements Iterator<string> {
  private collection: ConcreteCollection;
  private currentPosition: number;
  private isReverse: boolean;

  constructor(collection: ConcreteCollection, reverse: boolean) {
    this.collection = collection;
    this.isReverse = reverse;
    this.currentPosition = this.isReverse ? this.collection.getSize() - 1 : 0;
  }

  getCurrentPosition() {
    return this.currentPosition;
  }

  getKey() {
    return this.collection.getKey(this.currentPosition);
  }

  next(): any {
    let currentElement = this.collection.getItems()[this.currentPosition];
    this.currentPosition = this.isReverse ? this.currentPosition - 1 : this.currentPosition + 1;
    return currentElement;
  }

  valid(): boolean {
    let valid = false;
    if (this.collection.getItems()[this.currentPosition]) {
      valid = true;
    }
    return valid;
  }
}

interface Collection {
  someLogic(): void,
  getIterator(): Iterator<number>,
  getIteratorReverce(): Iterator<number>,
  getSize(): number,
  getKey(id: number): number,
  getItems(): string[],
}


class ConcreteCollection implements Collection {
  private items: string[] = [];

  constructor(items: string[]) {
    this.items = items;
  }

  someLogic() {
    console.log('some collection\'s logic');
  }
  getIterator() {
    return new ConcreteIterator(this, false);
  }
  getIteratorReverce() {
    return new ConcreteIterator(this, true);
  }
  getSize() {
    return this.items.length;
  }
  getKey(id: number) {
    return 5;
  }
  getItems() {
    return this.items;
  }
}

const collection = new ConcreteCollection(['first', 'second', 'third']);
const iterator = collection.getIterator();

while (iterator.valid()) {
  console.log(iterator.next());
}

const revIterator = collection.getIteratorReverce();

while (revIterator.valid()) {
  console.log(revIterator.next());
}