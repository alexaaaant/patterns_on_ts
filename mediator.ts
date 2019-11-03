interface Mediator {
    notify(event: string): void
}

class ComponentHTML {
    protected mediator!: Mediator;

    someEvent() { };
    setMediator(mediator: Mediator) {
        this.mediator = mediator;
    };
}

class ConcreteMediator implements Mediator {
    private elem1: ComponentHTML;
    private elem2: ComponentHTML;

    constructor(elem1: ComponentHTML, elem2: ComponentHTML) {
        this.elem1 = elem1;
        this.elem2 = elem2;
        this.elem1.setMediator(this);
        this.elem2.setMediator(this);
    }

    notify(event: string) {
        if (event === 'A') {
            this.elem2.someEvent();
        }
        if (event === 'B') {
            this.elem1.someEvent();
        }
    }
}

class ConcreteComponent1 extends ComponentHTML {
    someEvent() {
        console.log('some event 1 comp');
        this.mediator.notify('A');
    }
}

class ConcreteComponent2 extends ComponentHTML {
    someEvent() {
        console.log('some event 2 comp');
    }
}

const comp1 = new ConcreteComponent1();
const comp2 = new ConcreteComponent2();
const med = new ConcreteMediator(comp1, comp2);
comp1.someEvent();
comp2.someEvent();