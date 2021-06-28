var mockStorage = (function () {
    var data = {};
    return {
        getItem: function (key) {
            return data[key];
        },
        setItem: function (value) {
            data.insert(value);
        },
        removeItem: function (key) {
            delete data[key];
        },
        getData: function () {
            return data;
        },
        clear: function () {
            data = {};
        }
    };
})();

Object.defineProperty(window, 'localStorage', { value: mockStorage });
