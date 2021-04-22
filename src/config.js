import yVaultV2 from "./abi/yVaultV2.json";
import LidoVault from "./abi/LidoVault.json";

// Main config file for common parameters
export default Object.freeze({
  yusdcidle: {
    // route path
    TITLE: "USDc Idle",
    LOGO: "🏆🚀",
    VAULT_ABI: yVaultV2,
    VAULT_TYPE: "experimental",
    VAULT_ADDR: "0x33bd0f9618cf38fea8f7f01e1514ab63b9bde64b",
    WANT_ADDR: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    WANT_SYMBOL: "USDC",
    COINGECKO_SYMBOL: "usd-coin",
    VAULT_DEV: "emilianobonassi",
    BLOCK_ACTIVATED: 1606599919,
    VAULT_STATUS: "withdraw",
    CHAIN_ID: 1,
  },
  icecreath2: {
    TITLE: "iceCREATH2",
    LOGO: "🍦TH2",
    VAULT_ABI: yVaultV2,
    VAULT_TYPE: "experimental",
    VAULT_ADDR: "0x20Eb2A369b71C29FC4aFCddBbc1CAB66CCfcB062",
    WANT_ADDR: "0xcBc1065255cBc3aB41a6868c22d1f1C573AB89fd",
    WANT_SYMBOL: "CRETH2",
    COINGECKO_SYMBOL: "CRETH2",
    VAULT_DEV: "arbingsam",
    BLOCK_ACTIVATED: 1606599919,
    VAULT_STATUS: "withdraw",
    CHAIN_ID: 1,
  },
  sushirocket: {
    TITLE: "Sushi YFI-ETH",
    LOGO: "🍣🍬",
    VAULT_ABI: yVaultV2,
    VAULT_TYPE: "experimental",
    VAULT_ADDR: "0x27Eb83254D900AB4F9b15d5652d913963FeC35e3",
    WANT_ADDR: "0x088ee5007C98a9677165D78dD2109AE4a3D04d0C",
    WANT_SYMBOL: "SLP",
    COINGECKO_SYMBOL: "SLP",
    VAULT_DEV: "andy8052",
    BLOCK_ACTIVATED: 1606599919,
    VAULT_STATUS: "withdraw",
    CHAIN_ID: 1,
  },
  daihard: {
    TITLE: "DAI Hard",
    LOGO: "🏅💪",
    VAULT_ABI: yVaultV2,
    VAULT_TYPE: "experimental",
    VAULT_ADDR: "0xBFa4D8AA6d8a379aBFe7793399D3DdaCC5bBECBB",
    WANT_ADDR: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    WANT_SYMBOL: "DAI",
    COINGECKO_SYMBOL: "DAI",
    VAULT_DEV: "arbingsam",
    BLOCK_ACTIVATED: 1606599919,
    VAULT_STATUS: "withdraw",
    CHAIN_ID: 1,
  },
  usdc: {
    TITLE: "USd Coin",
    LOGO: "🇺🇸🪙",
    VAULT_ABI: yVaultV2,
    VAULT_TYPE: "experimental",
    VAULT_ADDR: "0xe2f6b9773bf3a015e2aa70741bde1498bdb9425b",
    WANT_ADDR: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    WANT_SYMBOL: "USDC",
    COINGECKO_SYMBOL: "USDC",
    VAULT_DEV: "arbingsam",
    BLOCK_ACTIVATED: 1606599919,
    VAULT_STATUS: "withdraw",
    CHAIN_ID: 1,
  },
  yvsteth: {
    TITLE: "Lido St. Ether",
    LOGO: "👼🏦",
    VAULT_ABI: LidoVault,
    VAULT_TYPE: "weird",
    VAULT_ADDR: "0x15a2B3CfaFd696e1C783FE99eed168b78a3A371e",
    WANT_ADDR: "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
    WANT_SYMBOL: "stETH",
    COINGECKO_SYMBOL: "staked-ether",
    VAULT_DEV: "bantg",
    BLOCK_ACTIVATED: 1606599919,
    VAULT_STATUS: "active",
    CHAIN_ID: 1,
  },
  daiironbank: {
    TITLE: "DAI Ironbank",
    LOGO: "🦾🏦",
    VAULT_ABI: yVaultV2,
    VAULT_TYPE: "experimental",
    VAULT_ADDR: "0x07dbC20B84fF63F3cc542F6A22E5a71cbA5670A4",
    WANT_ADDR: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    WANT_SYMBOL: "DAI",
    COINGECKO_SYMBOL: "dai",
    VAULT_DEV: "arbingsam",
    BLOCK_ACTIVATED: 1606599919,
    VAULT_STATUS: "withdraw",
    CHAIN_ID: 1,
  },
  wethmaker: {
    TITLE: "WETH Maker",
    LOGO: "🖲🏰",
    VAULT_ABI: yVaultV2,
    VAULT_TYPE: "experimental",
    VAULT_ADDR: "0x6392e8fa0588CB2DCb7aF557FdC9D10FDe48A325",
    WANT_ADDR: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    WANT_SYMBOL: "WETH",
    COINGECKO_SYMBOL: "WETH",
    VAULT_DEV: "orbxball",
    BLOCK_ACTIVATED: 1606599919,
    VAULT_STATUS: "withdraw",
    CHAIN_ID: 1,
  },
  stecrv: {
    TITLE: "st. Ether-ETH Pool",
    LOGO: "💧🎱",
    VAULT_ABI: yVaultV2,
    VAULT_TYPE: "experimental",
    VAULT_ADDR: "0xdCD90C7f6324cfa40d7169ef80b12031770B4325",
    WANT_ADDR: "0x06325440D014e39736583c165C2963BA99fAf14E",
    WANT_SYMBOL: "steCRV",
    COINGECKO_SYMBOL: "ethereum",
    VAULT_DEV: "arbingsam",
    BLOCK_ACTIVATED: 1606599919,
    VAULT_STATUS: "active",
    CHAIN_ID: 1,
  },
  ironlender: {
    TITLE: "WETH Iron Lender",
    LOGO: "🦾💰",
    VAULT_ABI: yVaultV2,
    VAULT_TYPE: "experimental",
    VAULT_ADDR: "0xED0244B688cF059f32f45E38A6ac6E479D6755f6",
    WANT_ADDR: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    WANT_SYMBOL: "WETH",
    COINGECKO_SYMBOL: "ethereum",
    VAULT_DEV: "arbingsam",
    BLOCK_ACTIVATED: 1606599919,
    VAULT_STATUS: "active",
    CHAIN_ID: 1,
  },
  mmwbtc: {
    TITLE: "Mushroom Worker",
    LOGO: "🍄🧑‍🌾",
    VAULT_ABI: yVaultV2,
    VAULT_TYPE: "weird",
    VAULT_ADDR: "0x0e8A7717A4FD7694682E7005957dD5d7598bF14A",
    WANT_ADDR: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    WANT_SYMBOL: "WBTC",
    COINGECKO_SYMBOL: "wrapped-bitcoin",
    VAULT_DEV: "mushroomsfinan1",
    BLOCK_ACTIVATED: 1606599919,
    VAULT_STATUS: "withdraw",
    CHAIN_ID: 1,
  },
  ecrvseth: {
    TITLE: "Egyptian God sETH/ETH",
    LOGO: "𓀀☀︎",
    VAULT_ABI: yVaultV2,
    VAULT_TYPE: "experimental",
    VAULT_ADDR: "0x0e880118C29F095143dDA28e64d95333A9e75A47",
    WANT_ADDR: "0xA3D87FffcE63B53E0d54fAa1cc983B7eB0b74A9c",
    WANT_SYMBOL: "eCRV",
    COINGECKO_SYMBOL: "ethereum",
    VAULT_DEV: "matkam",
    BLOCK_ACTIVATED: 1606599919,
    VAULT_STATUS: "withdraw",
    CHAIN_ID: 1,
  },
  wethgenlender: {
    TITLE: "WETH Gen Lender",
    LOGO: "🧬💰",
    VAULT_ABI: yVaultV2,
    VAULT_TYPE: "experimental",
    VAULT_ADDR: "0xac333895ce1a73875cf7b4ecdc5a743c12f3d82b",
    WANT_ADDR: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    WANT_SYMBOL: "WETH",
    COINGECKO_SYMBOL: "ethereum",
    VAULT_DEV: "arbingsam",
    BLOCK_ACTIVATED: 1606599919,
    VAULT_STATUS: "active",
    CHAIN_ID: 1,
  },
  susdidle: {
    TITLE: "sUSD Idle",
    LOGO: "🏆⚔️",
    VAULT_ABI: yVaultV2,
    VAULT_TYPE: "experimental",
    VAULT_ADDR: "0x3466c90017F82DDA939B01E8DBd9b0f97AEF8DfC",
    WANT_ADDR: "0x57ab1ec28d129707052df4df418d58a2d46d5f51",
    WANT_SYMBOL: "sUSD",
    COINGECKO_SYMBOL: "nusd",
    VAULT_DEV: "emilianobonassi",
    BLOCK_ACTIVATED: 1606599919,
    VAULT_STATUS: "active",
    CHAIN_ID: 1,
  },
  creamyswords: {
    TITLE: "Creamy Swords SNX",
    LOGO: "🍦⚔️",
    VAULT_ABI: yVaultV2,
    VAULT_TYPE: "experimental",
    VAULT_ADDR: "0x7356f09c294cb9c6428ac7327b24b0f29419c181",
    WANT_ADDR: "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
    WANT_SYMBOL: "SNX",
    COINGECKO_SYMBOL: "havven",
    VAULT_DEV: "jmonteer23",
    BLOCK_ACTIVATED: 1606599919,
    VAULT_STATUS: "withdraw",
    CHAIN_ID: 1,
  },
  spadavault: {
    TITLE: "SpadaVault",
    LOGO: "s🦡",
    VAULT_ABI: yVaultV2,
    VAULT_TYPE: "experimental",
    VAULT_ADDR: "0x1Ae8Ccd120A05080d9A01C3B4F627F865685D091",
    WANT_ADDR: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    WANT_SYMBOL: "WBTC",
    COINGECKO_SYMBOL: "wrapped-bitcoin",
    VAULT_DEV: "arbingsam",
    BLOCK_ACTIVATED: 1606599919,
    VAULT_STATUS: "stealth",
    CHAIN_ID: 1,
  },
  fantomsfury: {
    TITLE: "Fantom's Fury",
    LOGO: "👻⚡",
    VAULT_ABI: yVaultV2,
    VAULT_TYPE: "experimental",
    VAULT_ADDR: "0x36e7aF39b921235c4b01508BE38F27A535851a5c",
    WANT_ADDR: "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
    WANT_SYMBOL: "WFTM",
    COINGECKO_SYMBOL: "fantom",
    VAULT_DEV: "poolpitako",
    BLOCK_ACTIVATED: 1606599919,
    VAULT_STATUS: "active",
    CHAIN_ID: 250,
  },
  fantomsdollar: {
    TITLE: "Fantom's Dollar",
    LOGO: "👻💵",
    VAULT_ABI: yVaultV2,
    VAULT_TYPE: "experimental",
    VAULT_ADDR: "0x4b2de374d480efa96cb093cefcca23d97903a6ea",
    WANT_ADDR: "0xAd84341756Bf337f5a0164515b1f6F993D194E1f",
    WANT_SYMBOL: "fUSD",
    COINGECKO_SYMBOL: "usd-coin",
    VAULT_DEV: "poolpitako",
    BLOCK_ACTIVATED: 1606599919,
    VAULT_STATUS: "active",
    CHAIN_ID: 250,
  },
  hotcoins: {
    TITLE: "HotCoins",
    LOGO: "🔥🪙",
    VAULT_ABI: yVaultV2,
    VAULT_TYPE: "experimental",
    VAULT_ADDR: "0xBF7AA989192b020a8d3e1C65a558e123834325cA",
    WANT_ADDR: "0x0316eb71485b0ab14103307bf65a021042c6d380",
    WANT_SYMBOL: "HBTC",
    COINGECKO_SYMBOL: "huobi-btc",
    VAULT_DEV: "arbingsam",
    BLOCK_ACTIVATED: 1606599919,
    VAULT_STATUS: "stealth",
    CHAIN_ID: 1,
  },
  fullmetalfarmer: {
    TITLE: "Full Metal Farmer",
    LOGO: "🧙‍♂️🧪",
    VAULT_ABI: yVaultV2,
    VAULT_TYPE: "experimental",
    VAULT_ADDR: "0x56A5Fd5104a4956898753dfb060ff32882Ae0eb4",
    WANT_ADDR: "0xdBdb4d16EdA451D0503b854CF79D55697F90c8DF",
    WANT_SYMBOL: "ALCX",
    COINGECKO_SYMBOL: "alchemix",
    VAULT_DEV: "akshaynexust",
    BLOCK_ACTIVATED: 1606599919,
    VAULT_STATUS: "active",
    CHAIN_ID: 1,
  },
  badgergoat: {
    TITLE: "Badger's GOAT",
    LOGO: "🦡🐐",
    VAULT_ABI: yVaultV2,
    VAULT_TYPE: "experimental",
    VAULT_ADDR: "0x3149950258FbBcE1638d6C23ac93A692604Ef864",
    WANT_ADDR: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    WANT_SYMBOL: "WBTC",
    COINGECKO_SYMBOL: "wrapped-bitcoin",
    VAULT_DEV: "orbxball",
    BLOCK_ACTIVATED: 1606599919,
    VAULT_STATUS: "stealth",
    CHAIN_ID: 1,
  },
  oceanofdata: {
    TITLE: "Ocean of Data",
    LOGO: "🌊💿",
    VAULT_ABI: yVaultV2,
    VAULT_TYPE: "experimental",
    VAULT_ADDR: "0x1133b2E2F51becCF25b2f8d0cA48c1d93DD5ab12",
    WANT_ADDR: "0x967da4048cD07aB37855c090aAF366e4ce1b9F48",
    WANT_SYMBOL: "OCEAN",
    COINGECKO_SYMBOL: "ocean-protocol",
    VAULT_DEV: "akshaynexust",
    BLOCK_ACTIVATED: 1606599919,
    VAULT_STATUS: "withdraw",
    CHAIN_ID: 1,
  },
  dataaave: {
    TITLE: "Data AAVE",
    LOGO: "💿🕊",
    VAULT_ABI: yVaultV2,
    VAULT_TYPE: "experimental",
    VAULT_ADDR: "0xac1c90b9c76d56ba2e24f3995f7671c745f8f308",
    WANT_ADDR: "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9",
    WANT_SYMBOL: "AAVE",
    COINGECKO_SYMBOL: "aave",
    VAULT_DEV: "0xangelfish",
    BLOCK_ACTIVATED: 1606599919,
    VAULT_STATUS: "active",
    CHAIN_ID: 1,
  },
  idletether: {
    TITLE: "Idle Tether",
    LOGO: "🛌T",
    VAULT_ABI: yVaultV2,
    VAULT_TYPE: "experimental",
    VAULT_ADDR: "0xAf322a2eDf31490250fdEb0D712621484b09aBB6",
    WANT_ADDR: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    WANT_SYMBOL: "USDT",
    COINGECKO_SYMBOL: "tether",
    VAULT_DEV: "emilianobonassi",
    BLOCK_ACTIVATED: 1606599919,
    VAULT_STATUS: "active",
    CHAIN_ID: 1,
  },
  trueidle: {
    TITLE: "True Idle",
    LOGO: "T🛌",
    VAULT_ABI: yVaultV2,
    VAULT_TYPE: "experimental",
    VAULT_ADDR: "0x49b3e44e54b6220af892dba48ae45f1ea6bc4ae9",
    WANT_ADDR: "0x0000000000085d4780B73119b644AE5ecd22b376",
    WANT_SYMBOL: "TUSD",
    COINGECKO_SYMBOL: "true-usd",
    VAULT_DEV: "emilianobonassi",
    BLOCK_ACTIVATED: 1606599919,
    VAULT_STATUS: "active",
    CHAIN_ID: 1,
  },
  poolwithus: {
    TITLE: "Pool with Us",
    LOGO: "🏊‍♂️👩‍👩‍👧‍👧",
    VAULT_ABI: yVaultV2,
    VAULT_TYPE: "experimental",
    VAULT_ADDR: "0x2F194Da57aa855CAa02Ea3Ab991fa5d38178B9e6",
    WANT_ADDR: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
    WANT_SYMBOL: "UNI",
    COINGECKO_SYMBOL: "uniswap",
    VAULT_DEV: "mattdwest",
    BLOCK_ACTIVATED: 1606599919,
    VAULT_STATUS: "active",
    CHAIN_ID: 1,
  },
  vesperusdc: {
    TITLE: "Vesper-bell USDC",
    LOGO: "🛐🪙",
    VAULT_ABI: yVaultV2,
    VAULT_TYPE: "experimental",
    VAULT_ADDR: "0x477faf103dadc5fe5baa40951cf7512dcbc18126",
    WANT_ADDR: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    WANT_SYMBOL: "USDC",
    COINGECKO_SYMBOL: "usd-coin",
    VAULT_DEV: "real_mills",
    BLOCK_ACTIVATED: 1606599919,
    VAULT_STATUS: "withdraw",
    CHAIN_ID: 1,
  },
  ghostysusd: {
    TITLE: "Ghosty Dollar",
    LOGO: "𓀀💵",
    VAULT_ABI: yVaultV2,
    VAULT_TYPE: "experimental",
    VAULT_ADDR: "0xa5cA62D95D24A4a350983D5B8ac4EB8638887396",
    WANT_ADDR: "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51",
    WANT_SYMBOL: "SUSD",
    COINGECKO_SYMBOL: "nusd",
    VAULT_DEV: "jmonteer23",
    BLOCK_ACTIVATED: 1606599919,
    VAULT_STATUS: "active",
    CHAIN_ID: 1,
  },
  sushibank: {
    TITLE: "Bank Sushi",
    LOGO: "🏦🍣",
    VAULT_ABI: yVaultV2,
    VAULT_TYPE: "experimental",
    VAULT_ADDR: "0xb32747B4045479B77a8b8Eb44029ba12580214F8",
    WANT_ADDR: "0x6B3595068778DD592e39A122f4f5a5cF09C90fE2",
    WANT_SYMBOL: "SUSHI",
    COINGECKO_SYMBOL: "sushi",
    VAULT_DEV: "akshaynexust",
    BLOCK_ACTIVATED: 1606599919,
    VAULT_STATUS: "active",
    CHAIN_ID: 1,
  },
  fantombaby: {
    TITLE: "Fantom's Ape Ape Baby",
    LOGO: "🧊👶",
    VAULT_ABI: yVaultV2,
    VAULT_TYPE: "experimental",
    VAULT_ADDR: "0xEea0714eC1af3b0D41C624Ba5ce09aC92F4062b1",
    WANT_ADDR: "0xf16e81dce15b08f326220742020379b855b87df9",
    WANT_SYMBOL: "ICE",
    COINGECKO_SYMBOL: "ice-token",
    VAULT_DEV: "poolpitako",
    BLOCK_ACTIVATED: 1606599919,
    VAULT_STATUS: "active",
    CHAIN_ID: 250,
  },
  bscbaby: {
    TITLE: "BSC's Ape Ape Baby",
    LOGO: "🧊👶",
    VAULT_ABI: yVaultV2,
    VAULT_TYPE: "experimental",
    VAULT_ADDR: "0x78bef219b3348CD65387F6f7B27c9ee3Bf525704",
    WANT_ADDR: "0xf16e81dce15b08f326220742020379b855b87df9",
    WANT_SYMBOL: "ICE",
    COINGECKO_SYMBOL: "ice-token",
    VAULT_DEV: "poolpitako",
    BLOCK_ACTIVATED: 1606599919,
    VAULT_STATUS: "active",
    CHAIN_ID: 56,
  },
  ellipsoidal: {
    TITLE: "Ellipsoidal Farmer",
    LOGO: "🍩3️⃣",
    VAULT_ABI: yVaultV2,
    VAULT_TYPE: "experimental",
    VAULT_ADDR: "0xC8057Fd6F7917b5398f52d861d50685E6AbbED14",
    WANT_ADDR: "0xaF4dE8E872131AE328Ce21D909C74705d3Aaf452",
    WANT_SYMBOL: "3EPS",
    COINGECKO_SYMBOL: "DAI",
    VAULT_DEV: "akshaynexust",
    BLOCK_ACTIVATED: 1606599919,
    VAULT_STATUS: "active",
    CHAIN_ID: 56,
  },
  baghunter: {
    TITLE: "Bag Hunter",
    LOGO: "👜⚔️",
    VAULT_ABI: yVaultV2,
    VAULT_TYPE: "experimental",
    VAULT_ADDR: "0xA696a63cc78DfFa1a63E9E50587C197387FF6C7E",
    WANT_ADDR: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    WANT_SYMBOL: "WBTC",
    COINGECKO_SYMBOL: "wrapped-bitcoin",
    VAULT_DEV: "akshaynexust",
    BLOCK_ACTIVATED: 1606599919,
    VAULT_STATUS: "active",
    CHAIN_ID: 1,
  },
  ethbaby: {
    TITLE: "ETH's Ape Ape Baby",
    LOGO: "🧊👶",
    VAULT_ABI: yVaultV2,
    VAULT_TYPE: "experimental",
    VAULT_ADDR: "0xD2C65E20C3fDE3F18097e7414e65596e0C83B1a9",
    WANT_ADDR: "0xf16e81dce15b08f326220742020379b855b87df9",
    WANT_SYMBOL: "ICE",
    COINGECKO_SYMBOL: "ice-token",
    VAULT_DEV: "poolpitako",
    BLOCK_ACTIVATED: 1606599919,
    VAULT_STATUS: "active",
    CHAIN_ID: 1,
  },
  spartanbank: {
    TITLE: "Spartan Bank",
    LOGO: "⚔️🏦",
    VAULT_ABI: yVaultV2,
    VAULT_TYPE: "experimental",
    VAULT_ADDR: "0xF29AE508698bDeF169B89834F76704C3B205aedf",
    WANT_ADDR: "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
    WANT_SYMBOL: "SNX",
    COINGECKO_SYMBOL: "havven",
    VAULT_DEV: "jmonteer23",
    BLOCK_ACTIVATED: 1606599919,
    VAULT_STATUS: "active",
    CHAIN_ID: 1,
  },
  tetheredape: {
    TITLE: "Tethered Ape",
    LOGO: "🕸🦧",
    VAULT_ABI: yVaultV2,
    VAULT_TYPE: "experimental",
    VAULT_ADDR: "0x7Da96a3891Add058AdA2E826306D812C638D87a7",
    WANT_ADDR: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    WANT_SYMBOL: "USDT",
    COINGECKO_SYMBOL: "tether",
    VAULT_DEV: "dudesahn",
    BLOCK_ACTIVATED: 1606599919,
    VAULT_STATUS: "active",
    CHAIN_ID: 1,
  },
  frappedape: {
    TITLE: "BSC's Frapped Ape",
    LOGO: "☕️🦧",
    VAULT_ABI: yVaultV2,
    VAULT_TYPE: "experimental",
    VAULT_ADDR: "0x626530FCD25a8c9A949B024AAbbAe4BAE7D5F320",
    WANT_ADDR: "0x049d68029688eabf473097a2fc38ef61633a3c7a",
    WANT_SYMBOL: "fUSDT",
    COINGECKO_SYMBOL: "tether",
    VAULT_DEV: "poolpitako",
    BLOCK_ACTIVATED: 1606599919,
    VAULT_STATUS: "active",
    CHAIN_ID: 56,
  },
  bscfusdtproxyeth: {
    TITLE: "BSC's fUSDT proxy to ETH",
    LOGO: "😷🐙",
    VAULT_ABI: yVaultV2,
    VAULT_TYPE: "experimental",
    VAULT_ADDR: "0x2A3020a71Ab92D5CdBAfEB72f0b90D1DfdF1B6E2",
    WANT_ADDR: "0x049d68029688eabf473097a2fc38ef61633a3c7a",
    WANT_SYMBOL: "fUSDT",
    COINGECKO_SYMBOL: "tether",
    VAULT_DEV: "poolpitako",
    BLOCK_ACTIVATED: 1606599919,
    VAULT_STATUS: "stealth",
    CHAIN_ID: 56,
  }

});
