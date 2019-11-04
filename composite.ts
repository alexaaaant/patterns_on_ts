class Component {
    operation() { }
    setParent(component: Container) { }
    getParent() { }
    addChild(component: Component) { }
    removeChild() { }
}

class Leaf extends Component {
    operation() { }
}

class Container extends Component {
    private children!: Component[];

    operation() {
        this.children.forEach((child) => child.operation());
    }
    addChild(component: Component) {
        this.children.push(component);
        component.setParent(this);
    }
    removeChild() { }
}

let cont = new Container();
let leaf = new Leaf();
cont.addChild(leaf);
cont.operation();
