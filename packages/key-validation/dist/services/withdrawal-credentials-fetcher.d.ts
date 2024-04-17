import { PossibleWC, WithdrawalCredentialsExtractorInterface, WithdrawalCredentialsHex } from '../interfaces';
import 'reflect-metadata';
import { CHAINS } from '@catalist-nestjs/constants';
import { Catalist } from '@catalist-nestjs/contracts';
export declare class WithdrawalCredentialsFetcher implements WithdrawalCredentialsExtractorInterface {
    private readonly catalistContract;
    constructor(catalistContract: Catalist);
    /**
     * The value of currentWC should always represent actual on-chain value
     */
    getWithdrawalCredentials(): Promise<WithdrawalCredentialsHex>;
    getPossibleWithdrawalCredentials(): Promise<PossibleWC>;
    protected getPreviousWithdrawalCredentials(): Promise<PossibleWC['previousWC']>;
    getChainId(): Promise<CHAINS>;
}
