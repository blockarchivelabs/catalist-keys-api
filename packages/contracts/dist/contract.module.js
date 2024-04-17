'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ethers = require('ethers');
var providers = require('@ethersproject/providers');
var core = require('@nestjs/core');

class ContractModule {
    static forRoot(options) {
        return Object.assign({ global: true }, this.forFeature(options));
    }
    static forRootAsync(options) {
        return Object.assign({ global: true }, this.forFeatureAsync(options));
    }
    static forFeature(options) {
        return {
            module: this.module,
            providers: [
                {
                    provide: this.contractToken,
                    useFactory: async (moduleRef) => {
                        return await this.factory(moduleRef, options);
                    },
                    inject: [core.ModuleRef],
                },
            ],
            exports: [this.contractToken],
        };
    }
    static forFeatureAsync(options) {
        var _a;
        return {
            imports: options.imports,
            module: this.module,
            providers: [
                {
                    provide: this.contractToken,
                    useFactory: async (moduleRef, ...args) => {
                        const config = await options.useFactory(...args);
                        return this.factory(moduleRef, config);
                    },
                    inject: [core.ModuleRef, ...((_a = options.inject) !== null && _a !== void 0 ? _a : [])],
                },
            ],
            exports: [this.contractToken],
        };
    }
    static async factory(moduleRef, options) {
        const getFromScope = () => moduleRef.get(providers.Provider, { strict: false });
        const getFromOptions = () => options === null || options === void 0 ? void 0 : options.provider;
        const provider = getFromOptions() || getFromScope();
        const address = await this.extractAddress(options === null || options === void 0 ? void 0 : options.address, provider, this.defaultAddresses);
        return this.contractFactory.connect(address, provider);
    }
    static async detectChainId(providerOrSigner) {
        if (providers.Provider.isProvider(providerOrSigner)) {
            const network = await providerOrSigner.getNetwork();
            return network.chainId;
        }
        if (ethers.Signer.isSigner(providerOrSigner) && providerOrSigner.provider) {
            const network = await providerOrSigner.provider.getNetwork();
            return network.chainId;
        }
        throw new Error('Provider or signer is not supported');
    }
    static async extractAddress(address, providerOrSigner, addressMap) {
        if (address)
            return address;
        const chainId = await this.detectChainId(providerOrSigner);
        if (addressMap[chainId])
            return addressMap[chainId];
        const wrongChainIdErrorMessage = 'ChainId is not supported';
        throw new Error(wrongChainIdErrorMessage);
    }
}
ContractModule.module = ContractModule;

exports.ContractModule = ContractModule;
