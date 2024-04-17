/// <reference types="node" />
import { Pubkey, WithdrawalCredentialsBuffer } from '../interfaces';
export declare const validateOneKey: (key: Pubkey, depositSignature: string, withdrawalCredentials: WithdrawalCredentialsBuffer, genesisForkVersion: Buffer, amount?: number, domainDeposit?: Buffer, zeroHash?: Buffer) => boolean;
