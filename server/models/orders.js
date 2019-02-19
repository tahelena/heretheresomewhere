const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
    country: { type: "String", required: 'true' },
    postcode: { type: "String", required: 'true' },
    city: { type: "String", required: 'true' },
    state_province: { type: "String", required: 'true' },
    address: { type: "String", required: 'true' },
    complement: { type: "String", required: 'false' },
    name: { type: "String", required: 'true' },
    surname: { type: "String", required: 'true' },
    mobile: { type: "String", required: 'true' },
    email: { type: "String", required: 'true' },
    total: { type: "String", required: 'true' }
})

module.exports = mongoose.model('order', ordersSchema)