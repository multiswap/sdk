import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  LOCAL = 5777,
  RSK_MAINNET = 30,
  RSK_TESTNET = 31
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  [ChainId.ROPSTEN]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  [ChainId.RINKEBY]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  [ChainId.GÖRLI]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  [ChainId.KOVAN]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  [ChainId.LOCAL]: '',
  [ChainId.RSK_MAINNET]: '0xfaA7762f551bBa9b0EBa34D6443d49d0A577c0e1',
  [ChainId.RSK_TESTNET]: '0xfaA7762f551bBa9b0EBa34D6443d49d0A577c0e1'
}

export const INIT_CODE_HASH: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
  [ChainId.ROPSTEN]: '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
  [ChainId.RINKEBY]: '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
  [ChainId.GÖRLI]: '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
  [ChainId.KOVAN]: '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
  [ChainId.LOCAL]: '',
  [ChainId.RSK_MAINNET]: '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f',
  [ChainId.RSK_TESTNET]: '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
