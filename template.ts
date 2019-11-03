(function () {
    abstract class AbstractClass {

        public mainMethod() {
            this.operation1();
            this.baseOperation();
            this.operation2();
        }

        protected baseOperation() {
            console.log('base operation')
        }

        protected abstract operation1(): void;
        protected abstract operation2(): void;
    }

    class ConcreteClass extends AbstractClass {

        protected operation1() {
            console.log('operation 1 from concrete class 1');
        }

        protected operation2() {
            console.log('operation 2 from concrete class 1');
        }
    }

    class ConcreteClass2 extends AbstractClass {

        protected operation1() {
            console.log('operation 1 from concrete class 2');
        }

        protected operation2() {
            console.log('operation 2 from concrete class 2');
        }
    }

    const concreteClass = new ConcreteClass();
    concreteClass.mainMethod();

    const concreteClass2 = new ConcreteClass2();
    concreteClass2.mainMethod();
})();