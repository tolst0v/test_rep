class Calculator {
    constructor(...a) {
        this.a = [...a]
    }

    sum() {
        return this.a.reduce((a, b) => a += b, 0)
    }

    min() {
        return this.a.reduce((a, b) => a -= b, 0)
    }

}