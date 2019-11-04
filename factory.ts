interface IButton {
    onClick(): void,
    render(): void,
}

class WebButton implements IButton {
    onClick() {
        console.log('click webButton')
    }
    render() {
        console.log('render webButton')
    }
}

class DeskButton implements IButton {
    onClick() {
        console.log('click deskButton')
    }
    render() {
        console.log('render deskButton')
    }
}


abstract class Factory {
    abstract createButton(): IButton

    render() {
        let button: IButton = this.createButton();
        button.onClick();
        button.render();
    }
}

class WebFactory extends Factory {
    createButton() {
        return new WebButton();
    }
}

class DeskFactory extends Factory {
    createButton() {
        return new DeskButton();
    }
}

class App {
    private dialog!: Factory;

    createWeb() {
        this.dialog = new WebFactory();
    }
    createDesk() {
        this.dialog = new DeskFactory();
    }

    render() {
        this.dialog.render();
    }
}

const app = new App();
app.createDesk();