class Prototype {
    public primitive: any;
    public component: Object;
    public circleRef: ComponentWithBackRef;

    clone() {
        let clone = Object.create(this);
        clone.component = Object.create(this.component);
        clone.circleRef = {
            ...this.circleRef,
            prototype: { ...this },
        }
        return clone;
    }
}

class ComponentWithBackRef {
    public prototype: Prototype;

    constructor(prototype: Prototype) {
        this.prototype = new Prototype();
    }
}

let pr = new Prototype();
pr.component = new Date();
pr.primitive = 'sadwada';
pr.circleRef = new ComponentWithBackRef(pr);
let pr2 = pr.clone();