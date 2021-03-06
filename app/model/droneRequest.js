/**
 * TODO class level comment
 * @author Amila Karunathilaka
 */

var mongoose = require('mongoose');
require('mongoose-double')(mongoose);

var Schema = mongoose.Schema;
var SchemaTypes = mongoose.SchemaTypes;


var droneRequestSchema = new Schema({
    userId : {type: Schema.Types.ObjectId, ref: 'user'},
    id: Number,
    type: String,
    title: String,
    description: String,
    location: String,
    period: [Date],
    date: Date,
    priceRange: [Number], //TODO add validate array is equal 2
    areaCoordinates: [SchemaTypes.Double],
    active: {type: Boolean, default: true}
});


/**
 * persist date
 */
userSchema.pre("save", function (next) {
    var self = this;
    self.date = Date.now();
    next();
});

var droneRequest = mongoose.model('droneRequest', droneRequestSchema);

module.exports = droneRequest;
