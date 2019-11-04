(function () {
    class Singleton {
        private static instance: Singleton;

        private constructor() { }

        public static getInstance() {
            if (!this.instance) {
                this.instance = new Singleton();
            }
            return this.instance;
        }

        public someLogic() { }
    }

    let s = Singleton.getInstance();
    let d = Singleton.getInstance();
    console.log(s === d)

    d.someLogic();
})();