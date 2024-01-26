import { ethers, BigNumber } from "ethers";

function createProvider(name: string, defaultRpc: string, chainId: number) {
  if (process.env.HISTORICAL) {
    if (chainId === 1) {
      console.log(
        "RPC providers set to historical, only the first RPC provider will be used"
      );
    }
    return new ethers.providers.StaticJsonRpcProvider(
      process.env[name.toUpperCase() + "_RPC"]?.split(",")[0] ?? defaultRpc,
      {
        name,
        chainId,
      }
    );
  } else {
    return new ethers.providers.FallbackProvider(
      (process.env[name.toUpperCase() + "_RPC"] ?? defaultRpc)
        .split(",")
        .map((url, i) => ({
          provider: new ethers.providers.StaticJsonRpcProvider(url, {
            name,
            chainId,
          }),
          priority: i,
        })),
      1
    );
  }
}

export const providers = {
  // https://ethereumnodes.com/
  ethereum: createProvider(
    "ethereum",
    "https://eth-mainnet.gateway.pokt.network/v1/5f3453978e354ab992c4da79,https://cloudflare-eth.com/,https://main-light.eth.linkpool.io/,https://api.mycryptoapi.com/eth",
    1
  ),
  bsc: createProvider(
    "bsc",
    "https://bsc-dataseed.binance.org/,https://bsc-dataseed1.defibit.io/,https://bsc-dataseed1.ninicoin.io/,https://bsc-dataseed2.defibit.io/,https://bsc-dataseed2.ninicoin.io/",
    56
  ),
  polygon: createProvider(
    "polygon",
    "https://polygon-rpc.com/,https://rpc-mainnet.maticvigil.com/",
    137
  ),
  heco: createProvider(
    "heco",
    "https://http-mainnet.hecochain.com,https://http-mainnet-node.huobichain.com,https://pub001.hg.network/rpc",
    128
  ),
  fantom: createProvider(
    "fantom",
    "https://rpc.ankr.com/fantom,https://rpc.ftm.tools/,https://rpcapi.fantom.network",
    250
  ),
  rsk: createProvider("rsk", "https://public-node.rsk.co", 30),
  tomochain: createProvider("tomochain", "https://rpc.tomochain.com", 88),
  xdai: createProvider(
    "xdai",
    "https://rpc.xdaichain.com/,https://xdai.poanetwork.dev,https://dai.poa.network,https://xdai-archive.blockscout.com",
    100
  ),
  avax: createProvider("avax", "https://api.avax.network/ext/bc/C/rpc", 43114),
  wan: createProvider("wan", "https://gwan-ssl.wandevs.org:56891", 888),
  harmony: createProvider(
    "harmony",
    "https://harmony-0-rpc.gateway.pokt.network,https://api.harmony.one,https://api.s0.t.hmny.io",
    1666600000
  ),
  thundercore: createProvider(
    "thundercore",
    "https://mainnet-rpc.thundercore.com",
    108
  ),
  okexchain: createProvider("okexchain", "https://exchainrpc.okex.org", 66),
  optimism: createProvider("optimism", "https://mainnet.optimism.io/", 10),
  arbitrum: createProvider("arbitrum", "https://arb1.arbitrum.io/rpc", 42161),
  kcc: createProvider("kcc", "https://rpc-mainnet.kcc.network", 321),
  celo: createProvider("celo", "https://forno.celo.org", 42220),
  iotex: createProvider("iotex", "https://babel-api.mainnet.iotex.io", 4689),
  moonriver: createProvider(
    "moonriver",
    "https://rpc.api.moonriver.moonbeam.network/,https://moonriver.api.onfinality.io/public",
    1285
  ),
  shiden: createProvider(
    "shiden",
    "https://rpc.astar.network:8545,https://astar.api.onfinality.io/public",
    336
  ),
  palm: createProvider(
    "palm",
    "https://palm-mainnet.infura.io/v3/3a961d6501e54add9a41aa53f15de99b",
    11297108109
  ),
  energyweb: createProvider("energyweb", "https://rpc.energyweb.org", 246),
  songbird: createProvider("songbird", "https://songbird.towolabs.com/rpc", 19),
  hpb: createProvider("hpb", "https://hpbnode.com", 269),
  gochain: createProvider("gochain", "https://rpc.gochain.io", 60),
  ethereumclassic: createProvider(
    "ethereumclassic",
    "https://www.ethercluster.com/etc,https://blockscout.com/etc/mainnet/api/eth-rpc",
    61
  ),
  xdaiarb: createProvider("xdaiarb", "https://arbitrum.xdaichain.com", 200),
  kardia: createProvider("kardia", "https://rpc.kardiachain.io/", 0),
  fuse: createProvider("fuse", "https://rpc.fuse.io", 122),
  smartbch: createProvider(
    "smartbch",
    "https://smartbch.fountainhead.cash/mainnet",
    10000
  ),
  elastos: createProvider(
    "elastos",
    "https://api.elastos.io/eth,https://api.trinity-tech.cn/eth",
    20
  ),
  hoo: createProvider("hoo", "https://http-mainnet.hoosmartchain.com", 70),
  fusion: createProvider(
    "fusion",
    "https://mainnet.anyswap.exchange,https://mainway.freemoon.xyz/gate",
    32659
  ),
  aurora: createProvider("aurora", "https://mainnet.aurora.dev", 1313161554),
  ronin: createProvider("ronin", "https://api.roninchain.com/rpc", 2020),
  boba: createProvider("boba", "https://mainnet.boba.network/", 288),
  cronos: createProvider("cronos", "https://evm-cronos.crypto.org/", 25),
  polis: createProvider("polis", "https://rpc.polis.tech", 333999),
  zyx: createProvider(
    "zyx",
    "https://rpc-1.zyx.network/,https://rpc-2.zyx.network/,https://rpc-3.zyx.network/,https://rpc-5.zyx.network/",
    55
  ),
  telos: createProvider(
    "telos",
    "https://mainnet.telos.net/evm,https://rpc1.eu.telos.net/evm,https://rpc1.us.telos.net/evm",
    40
  ),
  metis: createProvider(
    "metis",
    "https://andromeda.metis.io/?owner=1088",
    1088
  ),
  ubiq: createProvider("ubiq", "https://rpc.octano.dev", 8),
  velas: createProvider("velas", "https://evmexplorer.velas.com/rpc", 106),
  callisto: createProvider("callisto", "https://clo-geth.0xinfra.com/", 820),
  klaytn: createProvider(
    "klaytn",
    "https://public-node-api.klaytnapi.com/v1/cypress,http://175.209.78.135:8551",
    8217
  ),
  csc: createProvider(
    "csc",
    "https://rpc.coinex.net/,https://rpc1.coinex.net/,https://rpc2.coinex.net/,https://rpc3.coinex.net/,https://rpc4.coinex.net/",
    52
  ),
  nahmii: createProvider("nahmii", "https://l2.nahmii.io/", 5551),
  liquidchain: createProvider(
    "xlc",
    "https://rpc.liquidchain.net/,https://rpc.xlcscan.com/",
    5050
  ),
  meter: createProvider("meter", "https://rpc.meter.io", 82),
  theta: createProvider("theta", "https://eth-rpc-api.thetatoken.org/rpc", 361),
  oasis: createProvider("oasis", "https://emerald.oasis.dev/", 42262),
  syscoin: createProvider("syscoin", "https://rpc.syscoin.org", 57),
  moonbeam: createProvider(
    "moonbeam",
    "https://rpc.api.moonbeam.network",
    1284
  ),
  curio: createProvider(
    "curio",
    "https://mainnet-api.skalenodes.com/v1/fit-betelgeuse",
    836542336838601
  ),
  astar: createProvider("astar", "https://rpc.astar.network:8545", 592),
  godwoken: createProvider(
    "godwoken",
    "https://mainnet.godwoken.io/rpc/eth-wallet",
    71394
  ),
  evmos: createProvider("evmos", "https://eth.bd.evmos.org:8545/", 9001),
  conflux: createProvider("conflux", "https://evm.confluxrpc.com", 1030),
  milkomeda: createProvider(
    "milkomeda",
    "https://rpc-mainnet-cardano-evm.c1.milkomeda.com",
    2001
  ),
  dfk: createProvider(
    "dfk",
    "https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc",
    53935
  ),
  crab: createProvider("crab", "https://crab-rpc.darwinia.network", 44),
} as {
  [chain: string]: ethers.providers.BaseProvider;
};

export type Chain =
  | "ethereum"
  | "bsc"
  | "polygon"
  | "heco"
  | "fantom"
  | "rsk"
  | "tomochain"
  | "xdai"
  | "avax"
  | "wan"
  | "iotex"
  | "harmony"
  | "thundercore"
  | "okexchain"
  | "optimism"
  | "arbitrum"
  | "energyweb"
  | "songbird"
  | "hpb"
  | "gochain"
  | "ethereumclassic"
  | "xdaiarb"
  | "kardia"
  | "fuse"
  | "smartbch"
  | "elastos"
  | "hoo"
  | "fusion"
  | "aurora"
  | "ronin"
  | "boba"
  | "cronos"
  | "polis"
  | "zyx"
  | "telos"
  | "metis"
  | "ubiq"
  | "velas"
  | "callisto"
  | "csc"
  | "nahmii"
  | "liquidchain"
  | "meter"
  | "theta"
  | "oasis"
  | "syscoin"
  | "moonbeam"
  | "curio"
  | "astar"
  | "godwoken"
  | "evmos"
  | "conflux"
  | "milkomeda"
  | "dfk";
export function getProvider(chain: Chain = "ethereum") {
  return providers[chain];
}

export const TEN = BigNumber.from(10);

export function handleDecimals(num: BigNumber, decimals?: number): string {
  if (decimals === undefined) {
    return num.toString();
  } else {
    return num.div(TEN.pow(decimals)).toString();
  }
}

export const ETHER_ADDRESS = "0x0000000000000000000000000000000000000000";

export function setProvider(
  chain: Chain,
  provider: ethers.providers.BaseProvider
) {
  providers[chain] = provider;
}
