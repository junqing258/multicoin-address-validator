var BTCValidator = require('./bitcoin_validator');
var ETHValidator = require('./ethereum_validator');

function checkBothValidators(address, currency, networkType) {
    return ETHValidator.isValidAddress(address, currency, networkType) ||
        TRXValidator.isValidAddress(address, currency, networkType) ||
        BTCValidator.isValidAddress(address, currency, networkType);
}

module.exports = {
    isValidAddress: function (address, currency, opts) {
        if (opts) {
            if (opts.chainType === 'erc20') {
                return ETHValidator.isValidAddress(address, currency, opts.networkType);
            } else if (opts.chainType === "trc20") {
                return TRXValidator.isValidAddress(address, currency, opts.networkType);
            } else if (opts.chainType === 'omni') {
                return BTCValidator.isValidAddress(address, currency, opts.networkType);
            }
        }
        return checkBothValidators(address, currency, opts);
    }
};
