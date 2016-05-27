export default class Library {
    constructor() {
        this._name = 'Library';
        this._el = '';
        this._uri = 'uri';
    }
    get name() {
        return this._name;
    }
    start(data) {
        var file,
            uri = data.uri;
        var reader = new FileReader();

        this._el = document.getElementById(data.el);

        if (this._el.files.length <= 0) {
            alert('请选择文件!');
        }

        file = this._el.files[0];

        reader.onloadstart = function () {
            console.log('onloadstart');
        };

        reader.onprogress = function () {
            console.log('onprogress');
        };

        reader.onload = function () {
            console.log('onload');
        };

        reader.onloadend = function () {
            var xhr,
                fileData = new FormData(),
                nCountNum = 0,
                nSliceCount = 100,
                nFactSize = file.size / nSliceCount,
                nFactCount;

            var start = nCountNum * nFactSize,
                end = Math.min(start + nFactSize, file.size);

            fileData.append('file', file.slice(start, end));
            fileData.append('name', file.name);
            fileData.append('size', file.size);
            fileData.append('type', file.type);
            fileData.append('totalCount', nFactCount);
            fileData.append('indexCount', nCountNum);
            fileData.append('totalCount', 1);
            fileData.append('indexCount', 0);
            fileData.append('trueName', file.name.substring(0, file.name.lastIndexOf('.')));

            if (reader.error) {
                console.log(reader.error);
            } else {
                xhr = new XMLHttpRequest();
                xhr.open('POST', uri, true);
                xhr.overrideMimeType('application/octet-stream');
                xhr.send(fileData);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            console.log('upload complete');
                            console.log('response: ' + xhr.responseText);
                        };
                    };
                };
            }
        };

        reader.readAsBinaryString(file);
    }
    clear() {
        var self = this;

        self._el ? self._el.value = '' : '';
    }
}
