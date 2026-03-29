const mongoose = require("mongoose")
const roles = require("../constants/roles")

const UserSchema = mongoose.Schema({
    login: {
        type: String,
        required: true,
        unique: true,
        index: true  // явно указываем создание индекса
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        default: roles.USER
    }
}, {timestamps: true})

// Гарантируем создание уникального индекса
UserSchema.index({ login: 1 }, { unique: true })

const User = mongoose.model("User", UserSchema)

// Принудительное создание индексов при запуске (для production лучше использовать миграции)
User.syncIndexes().catch(console.error)

module.exports = User