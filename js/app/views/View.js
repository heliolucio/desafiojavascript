class View {

    constructor(elemento) {
        this._elemento = elemento;
    }
    
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
    
    template() {
        throw new Error('Você deve sobrescrever este método em seu template');
    }
}
