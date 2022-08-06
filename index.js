// class Calculator have two methods: sum and min
class Calculator {
    constructor(...args) {
        this.args = [...args]
    }

    sum() {
        return this.a.reduce((a, b) => a += b, 0)
    }

    min() {
        return this.a.reduce((a, b) => a -= b, 0)
    }

}