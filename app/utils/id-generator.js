/**
 * Created by Tommy on 11/27/15.
 */

//
export default class IdGenerator {

    static config(config) {
        IdGenerator.increment = config.increment ? config.increment : IdGenerator.increment;
        IdGenerator.resultGenFunc = config.resultGenFunc ? config.resultGenFunc : IdGenerator.resultGenFunc;
    }

    // a function: (previousValue) => nextValue
    static increment(previousValue) {
        return previousValue+=1;
    }

    //
    static resultGenFunc(id, value) {
        return id.toString() + value.toString();
    }

    // reset all generator in storage
    static resetAll() {
        throw new Error('resetAll() has not implemented yet')
    }

    // delete all generators
    static cleanAll() {
        IdGenerator.__generators = {};
    }

    // get a generator by id, init it if can't find it
    static get(id, initValue) {
        if (IdGenerator.__generators.hasOwnProperty(id)) {
            return IdGenerator.__generators[id];
        } else {
            return new IdGenerator(id, initValue);
        }
    }

    constructor(id, initValue) {
        this.id = id;
        this.initValue = initValue ? initValue : 0;
        this.counter = this.initValue;
        this.next = this.next.bind(this);
        this.now = this.now.bind(this);
        this.reset = this.reset.bind(this);
        this.clean = this.clean.bind(this);
        Object.assign(IdGenerator.__generators, {[id]: this});
    }

    next() {
        this.counter = IdGenerator.increment(this.counter);
        return IdGenerator.resultGenFunc(this.id, this.counter);
    }

    now() {
        return this.counter;
    }

    reset() {
        this.counter = this.initValue;
        return this;
    }

    clean() {
        delete IdGenerator.__generators[this.id];
    }

};

IdGenerator.__generators = {};