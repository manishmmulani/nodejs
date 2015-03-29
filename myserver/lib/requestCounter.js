function requestCounter() {
    this.count = 0;
}

requestCounter.prototype.increment = function() {
    this.count ++;
};

requestCounter.prototype.getCount = function() {
    return this.count;
}

module.exports = requestCounter;