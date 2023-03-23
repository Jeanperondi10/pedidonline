const passport = require("../../auth/passport");

function validate() {
    return passport.authenticate('chaveprivada', {session: false});
}

module.exports = validate;