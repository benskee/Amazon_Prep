// Min Stack - Medium


class MinStack {
    constructor() {
        this.stack = []
        this.currentMin = null
    }
}

MinStack.prototype.push = function(val) {
    if(val < this.currentMin || this.currentMin === null) this.currentMin = val
    this.stack.push([val, this.currentMin])
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
    
    if(!this.stack.length) {
        this.currentMin = null
    } else {
        this.currentMin = this.stack[this.stack.length-1][1]
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1][0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length-1][1]
};