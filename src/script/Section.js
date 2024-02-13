export default class Section {
    constructor({items,renderer}, containerSelector){
        this._rendererItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    clear(){
        this._container.innerHTML = '';
          //чистим 
      }
      
    addItem(element){
        this._container.append(element);
        //засунули в конец
    }

    prependItem(element){
        this._container.prepend(element)
        }//подняли 

    renderItems() {
    this.clear();
    this._rendererItems.forEach(element => {
    this._renderer(element);//колбекнули функцию ко всем элементам 
    })
    };


}
