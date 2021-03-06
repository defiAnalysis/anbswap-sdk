import { Pair } from './entities/pair';
import { Token } from './entities/token';
/**
 * Contains methods for constructing instances of pairs and tokens from on-chain data.
 */
export declare abstract class Fetcher {
    /**
     * Cannot be constructed.
     */
    private constructor();
    /**
     * Fetches information about a pair and constructs a pair from the given two tokens.
     * @param tokenA first token
     * @param tokenB second token
     * @param provider the provider to use to fetch the data
     */
    static fetchPairData(tokenA: Token, tokenB: Token, provider?: import("@ethersproject/providers").BaseProvider): Promise<Pair>;
}
