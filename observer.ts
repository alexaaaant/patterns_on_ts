interface ISubscriber {
    update(observer: IObserver): void,
}

interface IObserver {
    someLogic(): void,
    notify(): void;
    subscribe(subscriber: ISubscriber): void;
    unsubscribe(subscriber: ISubscriber): void;
}

class Observer implements IObserver {
    private subs: ISubscriber[] = [];

    someLogic() {
        console.log('some logic');
        this.notify();
    }

    subscribe(subscriber: ISubscriber) {
        this.subs.push(subscriber);
    }

    unsubscribe(subscriber: ISubscriber) {
        this.subs.pop();
    }

    notify() {
        this.subs.forEach((sub) => sub.update(this))
    }
}

class Subs1 implements ISubscriber {
    update(observer: IObserver) {
        console.log('sub1 update', this)
    }
}

class Subs2 implements ISubscriber {
    update(observer: IObserver) {
        console.log('sub2 update', this)
    }
}

const observer = new Observer();
const subs1 = new Subs1();
const subs2 = new Subs2();
observer.subscribe(subs1);
observer.subscribe(subs2);
observer.someLogic();
observer.unsubscribe(subs2);
observer.someLogic();
