'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// TODO: remove decommissioned chains
exports.CHAINS = void 0;
(function (CHAINS) {
    CHAINS[CHAINS["Mainnet"] = 1] = "Mainnet";
    CHAINS[CHAINS["Ropsten"] = 3] = "Ropsten";
    CHAINS[CHAINS["Rinkeby"] = 4] = "Rinkeby";
    CHAINS[CHAINS["Goerli"] = 5] = "Goerli";
    CHAINS[CHAINS["Kovan"] = 42] = "Kovan";
    CHAINS[CHAINS["Moonriver"] = 1285] = "Moonriver";
    CHAINS[CHAINS["Moonbase"] = 1287] = "Moonbase";
    CHAINS[CHAINS["Kintsugi"] = 1337702] = "Kintsugi";
    CHAINS[CHAINS["Kiln"] = 1337802] = "Kiln";
    CHAINS[CHAINS["Zhejiang"] = 1337803] = "Zhejiang";
    CHAINS[CHAINS["Holesky"] = 17000] = "Holesky";
    CHAINS[CHAINS["Sepolia"] = 11155111] = "Sepolia";
    CHAINS[CHAINS["EnduranceMainnet"] = 648] = "EnduranceMainnet";
    CHAINS[CHAINS["EnduranceDevnet"] = 6480000002] = "EnduranceDevnet";
})(exports.CHAINS || (exports.CHAINS = {}));
