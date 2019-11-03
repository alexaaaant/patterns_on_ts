(function () {
    interface IComponent {
        accept(visitor: IVisitor): void,
    }

    interface IVisitor {
        visitComp1(component: ConcreteComponent1): void,
        visitComp2(component: ConcreteComponent2): void,
    }

    class ConcreteComponent1 implements IComponent {
        accept(visitor: IVisitor) {
            visitor.visitComp1(this);
        }
        someOperationComp1() {
            console.log('someOperationComp1');
        }
    }

    class ConcreteComponent2 implements IComponent {
        accept(visitor: IVisitor) {
            visitor.visitComp2(this);
        }
        someOperationComp2() {
            console.log('someOperationComp2');
        }
    }

    class Visitor implements IVisitor {
        visitComp1(component: ConcreteComponent1) {
            component.someOperationComp1();
        }

        visitComp2(component: ConcreteComponent2) {
            component.someOperationComp2();
        }
    }

    const visitor = new Visitor();
    const component1 = new ConcreteComponent1();
    const component2 = new ConcreteComponent2();

    component1.accept(visitor);
    component2.accept(visitor);
})();