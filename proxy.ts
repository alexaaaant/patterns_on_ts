interface Subject {
    operation(): void;
}

class TargetSubject implements Subject {
    operation() {
        console.log('target subject')
    }
}

class ProxySubject implements Subject {
    private targetSubject: Subject;

    constructor(targetSubject: Subject) {
        this.targetSubject = targetSubject;
    }

    checkAccess() {
        console.log('checkAccess');
    }

    operation() {
        this.checkAccess();
        this.targetSubject.operation();
    }
}

const targetSubject = new TargetSubject();
const proxySubject = new ProxySubject(targetSubject);
proxySubject.operation();