const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
      return this.chain.length;
  },
  addLink(value) {
      this.chain.push(`( ${String(value)} )`);
      return this;
  },
  removeLink(position) {
      if (typeof(position) !== 'number') {
        this.chain = [];
        throw new Error ('You can\'t remove incorrect link!');
      }
      if (position <= 0 || position > this.chain.length) {
        this.chain = [];
        throw new Error ('You can\'t remove incorrect link!');
      }
      this.chain.splice(position - 1, 1);
      return this;
  },
  reverseChain() {
      this.chain.reverse();
      return this;
  },
  finishChain() {
      let a = this.chain.join('~~');
      console.log(this.chain.join('~~'));
      this.chain = [];
      return a;  
  }
};

module.exports = {
  chainMaker
};
