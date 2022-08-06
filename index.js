// class Calculator have two methods: sum and min
class Calculator {
    constructor(...args) {
        this.args = [...args]
    }
    
    sum() {
        const result = this.a.reduce((a, b) => a += b, 0)
        return result
    }

    min() {
        const result = this.a.reduce((a, b) => a -= b, 0)
        return result
    }

}
