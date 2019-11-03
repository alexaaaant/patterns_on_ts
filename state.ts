interface IContext {
    changeState(state: State): void,
    someFunc1(): void,
    someFunc2(): void,
}

abstract class State {
    protected context!: Context;
    setContext(context: Context) {
        this.context = context;
    }
    someFunc1(): void { };
    someFunc2(): void { };
}

class Context implements IContext {
    private state!: State;

    constructor(state: State) {
        this.changeState(state);
    }

    changeState(state: State) {
        state.setContext(this);
        this.state = state;
    }

    someFunc1() {
        this.state.someFunc1();
    }

    someFunc2() {
        this.state.someFunc2();
    }
}

class ConcreteState extends State {
    someFunc1() {
        console.log('Concrete state 1 some func 1');
        this.context.changeState(new ConcreteState2());
    }

    someFunc2() {
        console.log('Concrete state 1 some func 2');
    }
}

class ConcreteState2 extends State {
    someFunc1() {
        console.log('Concrete state 2 some func 1');
        this.someFunc2();
    }

    someFunc2() {
        console.log('Concrete state 2 some func 2');
        this.context.changeState(new ConcreteState());
    }
}

const state1= new ConcreteState();
const state2= new ConcreteState2();

const context = new Context(state1);
context.someFunc1();
context.someFunc1();
context.someFunc1();