export var fetcher = function (url) {
    return fetch(url).then(function (res) { return res.json(); });
};
//# sourceMappingURL=fetcher.js.map