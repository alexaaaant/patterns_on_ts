interface IHandler {
    handle(any: string): void,
    setNext(handler: IHandler): IHandler;
}

abstract class AbstractHandler implements IHandler {
    private nextHandler!: IHandler;

    setNext(nextHandler: IHandler) {
        this.nextHandler = nextHandler;
        return this.nextHandler;
    }

    handle(any: string) {
        if (this.nextHandler) {
            this.nextHandler.handle(any);
        } else {
            console.log('end', any);
        }
    }
}

class CatHandler extends AbstractHandler {
    handle(any: string) {
        if (any === 'cat') {
            console.log('yes, i cat');
        } else {
            super.handle(any);
        }
    }
}

class DogHandler extends AbstractHandler {
    handle(any: string) {
        if (any === 'dog') {
            console.log('yes, i dog');
        } else {
            super.handle(any);
        }
    }
}

const cat = new CatHandler();
const dog = new DogHandler();
cat.setNext(dog);
cat.handle('dog');
cat.handle('cat');
cat.handle('fdsfs');
