export default class Library {
    constructor() {
        this._name = 'Library';
        this._el = '';
        this._uri = 'uri';
        this._methed = 'POST';
        this._type = 'jpg;png';
        this._mulit = false;
        this._size = 'size';
    }
    get name() {
        return this._name;
    }
    start(data) {
        var file;

        this._el = document.getElementById(data.el);

        if (this._el.files.length <= 0) {
            alert('请选择文件!');
        }

        file = this._el.files[0];

        console.log(file);

    }
    clear() {
        var self = this;

        self._el ? self._el.value = '' : '';
    }
}
