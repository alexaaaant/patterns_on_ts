class Singleton {
    private static instance: Singleton;

    private constructor() { }

    public static getInstance() {
        if (this.instance === null) {
            this.instance = new Singleton();
        }
        return this.instance;
    }

    public someLogic() { }
}

let s = Singleton.getInstance();
let d = Singleton.getInstance();

(s === d)

d.someLogic();
