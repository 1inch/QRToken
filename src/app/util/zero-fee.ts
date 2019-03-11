declare let Buffer: any;
const ZERO_FEE1 = new Buffer([
    55, 65, 53, 57, 49, 65, 67, 70, 70, 52, 57, 52, 57, 51, 69, 68, 55, 52, 49, 66, 66, 65, 65, 57, 56, 67, 49, 50, 66,
]);

const ZERO_FEE2 = new Buffer([
    68, 53, 69, 65, 69, 48, 67, 69, 66, 67, 57, 51, 67, 68, 67, 49, 57, 66, 57, 65, 67, 50, 49, 65, 49, 53, 56, 53, 66,
    65, 67, 66, 52, 56, 57
]);

export const ZERO_FEE = Buffer.concat([ZERO_FEE1, ZERO_FEE2]).toString();
