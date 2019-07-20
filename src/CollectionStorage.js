const STORE_NAME = 'nasa-collection';

class CollectionStorage {
  constructor() {
    this.data = this._getData();
  }

  _getData() {
    return JSON.parse(localStorage.getItem(STORE_NAME) || '[]');
  }
  _setData() {
    localStorage.setItem(STORE_NAME, JSON.stringify(this.data))
  }

  list() {
    return this.data;
  }

  add(item) {
    const t = this.data.find(i => i.id === item.id);
    if (t) {
      throw new Error('The selected item is in the collection already!');
    }
    this.data = this.data.concat(item);
    this._setData();
  }

  removeItemById(id) {
    this.data = this.data.filter(i => i.id !== id);
    this._setData();
  }

  updateItemById(id, item) {
    this.data = this.data.map(i => {
      if (i.id === id) {
        return {
          ...i,
          ...item,
        };
      }
      return i;
    });
    this._setData();
  }
}

export default new CollectionStorage;
