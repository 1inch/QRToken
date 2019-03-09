declare let require: any;
declare let Buffer: any;
const {keccak256, bufferToHex} = require('ethereumjs-util');

const keccak160 = function (input) {
  return keccak256(input).slice(12);
};

export class MerkleTree {

  layers = null;
  elements: Array<any> = null;

  constructor(elements) {
    // Create layers

    this.elements = elements;
    this.layers = this.getLayers(elements.map(el => keccak160(el)));

    return this;
  }

  public static applyProof(account, proof) {

    let index = 0;

    console.log('Account0', account);

    account = keccak160(account);

    console.log('keccak160(Account0)', account);

    console.log('Proof1', proof);

    proof = proof.map(el => new Buffer(el.substr(2), 'hex'));

    console.log('Proof2', proof);

    for (let i = 0; i < proof.length; i++) {

      if (account < proof[i]) {
        account = keccak160(Buffer.concat([account, proof[i]]));
      } else {
        account = keccak160(Buffer.concat([proof[i], account]));
        index += 1 << i;
      }
    }

    return {
      root: account,
      index: index
    };
  }

  getLayers(elements) {
    let emptyLeveled = keccak160('');
    if ((elements.length % 2) === 1) {
      elements.push(emptyLeveled);
    }

    const tree = [elements];
    const maxLevel = Math.log2(elements.length);
    for (let level = 1; level <= maxLevel; level++) {
      const current = [];
      for (let i = 0; i < tree[level - 1].length / 2; i++) {
        const a = tree[level - 1][i * 2];
        const b = tree[level - 1][i * 2 + 1];
        let hash;
        if (a < b) {
          hash = keccak160(Buffer.concat([a, b]));
        } else {
          hash = keccak160(Buffer.concat([b, a]));
        }
        current.push(hash);
      }

      if (current.length & 1 && level < maxLevel) {
        current.push(emptyLeveled);
      }
      emptyLeveled = keccak160(Buffer.concat([emptyLeveled, emptyLeveled]));

      tree.push(current);
    }
    return tree;
  }

  getRoot() {
    return this.layers[this.layers.length - 1][0];
  }

  getHexRoot() {
    return bufferToHex(this.getRoot());
  }

  getProof(idx) {
    if (idx === -1) {
      throw new Error('Element does not exist in Merkle tree');
    }
    return this.layers.reduce((proof, layer) => {
      const pairElement = this.getPairElement(idx, layer);
      if (pairElement) {
        proof.push(pairElement);
      }

      idx = Math.floor(idx / 2);
      return proof;
    }, []);
  }

  getHexProof(idx) {
    const result = this.getProof(idx);
    return this.bufArrToHexArr(result);
  }

  getPairElement(idx, layer) {
    const pairIdx = idx % 2 === 0 ? idx + 1 : idx - 1;
    if (pairIdx < layer.length) {
      return layer[pairIdx];
    } else {
      return null;
    }
  }

  bufIndexOf(el, arr) {
    let hash;

    // Convert element to 32 byte hash if it is not one already
    if (el.length !== 32 || !Buffer.isBuffer(el)) {
      hash = keccak160(el);
    } else {
      hash = el;
    }

    for (let i = 0; i < arr.length; i++) {
      if (hash.equals(arr[i])) {
        return i;
      }
    }

    return -1;
  }

  bufArrToHexArr(arr) {
    if (arr.some(el => !Buffer.isBuffer(el))) {
      throw new Error('Array is not an array of buffers');
    }

    return arr.map(el => '0x' + el.toString('hex'));
  }
}
