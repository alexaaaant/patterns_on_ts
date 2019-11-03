interface IComponent {
    operation(): string;
}

class ConcreteComponent implements IComponent {
    operation() {
        return '123';
    }
}

class BaseDecorator implements IComponent {
    protected component: IComponent;

    constructor(component: IComponent) {
        this.component = component;
    }

    operation() {
        return this.component.operation();
    }
}

class ConcreteDecorator extends BaseDecorator {
    operation() {
        return `первый(${super.operation()}`;
    }
}

class ConcreteDecorator2 extends BaseDecorator {
    operation() {
        return `второй(${super.operation()}`;
    }
}

let component = new ConcreteComponent();
let dec1 = new ConcreteDecorator(component);
let dec2 = new ConcreteDecorator2(dec1);
console.log(dec2.operation())