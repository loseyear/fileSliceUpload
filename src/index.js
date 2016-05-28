export default class Library {
    constructor() {
        this._name = 'Library';
    }
    get name() {
        return this._name;
    }
    start(data) {
        var file,
            uri,
            el,
            nCountNum = 0,
            nSliceSize = 500000,
            nTotalCount;

        var reader = new FileReader();

        el = document.getElementById(data.el);

        if (el.files.length <= 0) {
            alert('请选择文件!');
        }

        file = el.files[0];
        uri = data.uri;
        nTotalCount = Math.ceil(file.size / nSliceSize);

        reader.onloadend = function () {
            var xhr,
                fileData = new FormData();

            var start = nCountNum * nSliceSize,
                end = Math.min(start + nSliceSize, file.size);

            fileData.append('file', file.slice(start, end));
            fileData.append('name', file.name);
            fileData.append('size', file.size);
            fileData.append('type', file.type);
            fileData.append('totalCount', nTotalCount);
            fileData.append('indexCount', nCountNum);
            fileData.append('trueName', file.name.substring(0, file.name.lastIndexOf('.')));

            if (reader.error) {
                console.log(reader.error);
            } else {
                xhr = new XMLHttpRequest();
                xhr.open('POST', uri, true);
                xhr.overrideMimeType('application/octet-stream');
                xhr.send(fileData);
                xhr.onreadystatechange = function () {
                    var rst;

                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            rst = xhr.responseText;
                            console.log(nCountNum, nTotalCount);
                            console.log(rst);
                            if (rst) {
                                // console.log(JSON.parse(data));
                            }
                        };
                    };
                };
            }
            if (nCountNum < nTotalCount - 1) {
                nCountNum++ ;
                reader.onloadend();
            }
        };

        reader.readAsBinaryString(file);
    }
}
