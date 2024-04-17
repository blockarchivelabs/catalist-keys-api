import { Key } from '../interfaces';
declare const worker: {
    <T extends Key>(keysPartSerialized: [serializedKey: string, index: number][]): [index: number, valid: boolean][];
    filename: string;
};
export default worker;
