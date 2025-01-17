import JSBI from 'jsbi'
import { ChainId, SolidityType } from '../constants'
import { validateSolidityTypeInstance } from '../utils'

/** 
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` are protocol currencies.
 */
export class Currency {
  public readonly decimals: number
  public readonly symbol?: string
  public readonly name?: string

  /**
   * The only instances of the base class `Currency`.
   */
  public static readonly ETHER: Currency = new Currency(18, 'ETH', 'Ether')
  public static readonly RBTC: Currency = new Currency(18, 'RBTC', 'Rootstock Smart Bitcoin')

  public static readonly forChainId: { [chainId in ChainId]: Currency } = {
    [ChainId.MAINNET]: Currency.ETHER,
    [ChainId.ROPSTEN]: Currency.ETHER,
    [ChainId.RINKEBY]: Currency.ETHER,
    [ChainId.GÖRLI]: Currency.ETHER,
    [ChainId.KOVAN]: Currency.ETHER,
    [ChainId.LOCAL]: Currency.ETHER,
    [ChainId.RSK_MAINNET]: Currency.RBTC,
    [ChainId.RSK_TESTNET]: Currency.RBTC
  }

  /**
   * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  protected constructor(decimals: number, symbol?: string, name?: string) {
    validateSolidityTypeInstance(JSBI.BigInt(decimals), SolidityType.uint8)

    this.decimals = decimals
    this.symbol = symbol
    this.name = name
  }

  static isBaseCurrency(currency: Currency | undefined | null) {
    return currency === Currency.ETHER || currency === Currency.RBTC
  }

}

//const ETHER = Currency.ETHER
//const RBTC = Currency.RBTC

//export { ETHER }