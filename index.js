const dateFormat = require('date-format')

class UploadInteger {

    prefix(ops) {
        return ops.prefix || 1
    }

    random(length = 3) {
        return Math.random().toString().slice(2, 2 + length)
    }

    baseTimestamp() {
        return dateFormat('MMddhhmmssSSS', new Date())
    }

    fullTimestamp() {
        return dateFormat('yyMMddhhmmssSSS', new Date())
    }

    create(ops) {
        return [
            this.prefix(ops),
            ops.timestamp,
            this.random(3),
            this.random(3),
        ].join('')
    }
}

const uid = new UploadInteger()

function generate(options) {
    return uid.create({ ...options, timestamp: uid.baseTimestamp() })
}

generate.long = () => uid.create({ timestamp: uid.fullTimestamp() })

module.exports = generate
