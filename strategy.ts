(function () {

    class Context {
        private strategy: IStrategy;

        constructor(strategy: IStrategy) {
            this.strategy = strategy;
        }
        setStrategy(strategy: IStrategy) {
            this.strategy = strategy;
        }
        execute(a: number, b: number) {
            console.log('Контекст делегирует выполнение функции стратегии');
            this.strategy.execute(a, b);
        }
    }

    interface IStrategy {
        execute(a: number, b: number): void,
    }

    class SumStrategy implements IStrategy {
        execute(a: number, b: number) {
            console.log(a + b, 'Стратегия суммирования');
        }
    }

    class DiffStrategy implements IStrategy {
        execute(a: number, b: number) {
            console.log(a - b, 'Стратегия разности');
        }
    }

    const sum = new SumStrategy();
    const context = new Context(sum);

    context.execute(2, 3);

    const diff = new DiffStrategy();
    context.setStrategy(diff);

    context.execute(2, 3)
}
)();
