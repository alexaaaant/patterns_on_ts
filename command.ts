interface Command {
    execute(): void;
    undo(): void;
}

class SimpleCommand implements Command {
    execute() {
        console.log('simple command');
    }
    undo() { }
}

class Receiver {
    firstOperation(a: number, b: number) {
        console.log('firstOperation', a, b);
    }

    secondOperation(a: number, b: number) {
        console.log('secondOperation', a, b);
    }
}

class HardCommand implements Command {
    private receiver: Receiver;
    private a: number;
    private b: number;

    constructor(receiver: Receiver, a: number, b: number) {
        this.receiver = receiver;
        this.a = a;
        this.b = b;
    }

    execute() {
        console.log('hard command')
        this.receiver.firstOperation(this.a, this.b);
        this.receiver.secondOperation(this.a, this.b);
    }
    undo() { }
}

class Invoker {
    private command!: Command;
    private history!: CommandHistory;

    setCommand(command: Command) {

        this.command = command;
    }

    do() {
        if (this.command.execute) {
            this.history.push(this.command);
            this.command.execute();
        }
    }
    undo() {
        const lastCommand = this.history.pop();
        if (lastCommand) {
            lastCommand.undo();
        }
    }
}

class CommandHistory {
    private history!: Command[];

    push(command: Command) {
        this.history.push(command)
    }

    pop() {
        if (this.history.length) {
            return this.history.pop();
        }
    }
    // там где инициализация создаем стек CommandHistory и каждую команду добавляем в него
}

const invoker = new Invoker();
const receiver = new Receiver();
const simpleCommand = new SimpleCommand();
const hardCommand = new HardCommand(receiver, 10, 20);
invoker.setCommand(simpleCommand);
invoker.do();
invoker.setCommand(hardCommand);
invoker.do();