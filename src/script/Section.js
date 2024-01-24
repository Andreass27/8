class Section {
    constructor({items,renderer}, containerSelector){
        this._rendererItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }
    addItem(item){
        this._container.append(item);
    }
    clear(){
        this._container.innerHTML = '';
    }
    renderItems() {
        this.clear();

        this._rendererItems.forEach(item => {
            this._renderer(item);
        })
    }
    prependItem(item){
        this._container.prepend(item);
    }

}