const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
    recordid : String,
    fields : {
        latitude: String,
    provides_meals: String,
    program_name: String,
    address_extra_info: String,
    local_areas: String,
    longitude: String,
    description: String,
    provides_hampers: String,
    program_status: String,
    location_address: String,
    wheelchair_accessible: String,
    delivery_available: String,
    takeout_available: String,
    signup_required: String,
    requires_referral: String,
    organization_name: String,
    last_update_date: String,
    }
})

const program = mongoose.model("program", programSchema)

module.exports = program