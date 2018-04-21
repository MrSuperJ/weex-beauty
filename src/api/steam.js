var stream = weex.requireModule('stream');

module.exports.steamGet = function(url, body) {
    let me = this
    return new Promise(function(resolve, reject) {
        stream.fetch({
            method: 'GET',
            url: url,
            headers: {
                "Content-Type": "application/json"
            },
            type: 'json'
        }, function(ret) {
            if (!ret.ok) {
                reject(ret);
            } else {
                resolve(ret)
            }
        }, function(response) {});
    })
}