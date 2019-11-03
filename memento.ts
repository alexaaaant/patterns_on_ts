interface IOriginator {
    createMemento(): IMemento,
    restore(memento: IMemento): void;
    someLogic(): void;
}

class Originator implements IOriginator {
    private state: string;

    constructor(state: string) {
        this.state = state;
    }

    createMemento(): IMemento {
        return new Memento(this.state);
    }

    someLogic() {
        this.state = this.state + '***&'
        console.log('some logic');
    }

    restore(memento: IMemento) {
        this.state = memento.getState();
    }

}

interface IMemento {
    getName(): string;
    getDate(): Date;
    getState(): string;
}

class Memento implements IMemento {
    private state: string;
    constructor(state: string) {
        this.state = state;
    }

    getName() {
        return 'name';
    }

    getState() {
        return this.state;
    }

    getDate() {
        return new Date();
    }
}

interface ICaretaker {
    doBackup(): void;
    undo(): void,
    getHistory(): IMemento[],
}

class Caretaker implements ICaretaker {
    private originator: IOriginator;
    private history: IMemento[] = [];

    constructor(originator: IOriginator) {
        this.originator = originator;
    }

    doBackup() {
        const memento = this.originator.createMemento();
        this.history.push(memento);
    }

    getHistory() {
        console.log(this.history, 'history')
        return this.history;
    }

    undo() {
        const memento = this.history.pop();
        if (memento) {
            this.originator.restore(memento);
        }
    }
}

const originator = new Originator('abcbd some state');
const caretaker = new Caretaker(originator);
caretaker.doBackup();
originator.someLogic();
caretaker.undo();
caretaker.doBackup();
originator.someLogic();
originator.someLogic();
originator.someLogic();
caretaker.doBackup();
caretaker.getHistory();

