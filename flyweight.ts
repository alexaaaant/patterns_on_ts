class Flyweight {
    private sharedState: string;

    constructor(sharedState: string) {
        this.sharedState = sharedState;
    }

    operation(x: number, y: number) {
        console.log(x, y, 'unic')
        console.log(this.sharedState, 'shared');
    }
}

class FlyweightFactory {
    private flyweights: Map<string, Flyweight>;

    constructor(states: string[]) {

        this.flyweights = new Map();

        states.forEach((state) => {
            const flyweight = new Flyweight(state);
            this.flyweights.set(state, flyweight);
        });
    }

    getFlyweight(state: string) {
        if (this.flyweights.has(state)) {
            return this.flyweights.get(state);
        }

        const flyweight = new Flyweight(state);
        this.flyweights.set(state, flyweight);

        return flyweight;
    }
}

class Type {
    private type: Flyweight;
    private x: number;
    private y: number;

    constructor(type: Flyweight, x: number, y: number) {
        this.type = type;
        this.x = x;
        this.y = y;
    }

    operation() {
        this.type.operation(this.x, this.y);
    }
}

class TypesForest {
    private types!: Flyweight[];

    plant(state: string, x: number, y: number) {
        // получаем из фабрики легковес по типу
        // проикидывем в type его
        // type добавляем в types
    }

    draw() {
        // выполняем методы typeса который выполняет метод легковеса
    }
}
const factory = new FlyweightFactory(['a', 'b', 'c', 'd']);
const flyweight = factory.getFlyweight('g') as Flyweight;
flyweight.operation(1, 2);