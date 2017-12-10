import { default as Web3} from 'web3';

export let web3 = new Web3(Web3.givenProvider);

const CONSTANTS_ADDRESS = '0x8342e810fc144272d5614e1b4c4763793f2b2363'
const CONSTANTS_META = {"compiler":{"version":"0.4.19+commit.c4cbbb05"},"language":"Solidity","output":{"abi":[{"constant":true,"inputs":[],"name":"tokensPerStream","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"verificationRequirement","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"weiPerTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"weiPerETH","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"centsPerDollar","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"captchaMultiplier","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_ethPrice","type":"uint256"}],"name":"setWeiPerTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"setCaptchaMultiplier","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"setCentsPerStream","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"centsPerStream","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"setVerificationRequirement","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"setTokensPerStream","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"captchaReward","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ethPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}],"devdoc":{"methods":{"transferOwnership(address)":{"details":"Allows the current owner to transfer control of the contract to a newOwner.","params":{"newOwner":"The address to transfer ownership to."}}}},"userdoc":{"methods":{}}},"settings":{"compilationTarget":{"localhost/core/Constants.sol":"Constants"},"libraries":{},"optimizer":{"enabled":false,"runs":200},"remappings":[]},"sources":{"localhost/core/Constants.sol":{"keccak256":"0x0eecb5c801e4c36492cfbaca9028ff4055279607e4d34192589d50615bbb69fd","urls":["bzzr://4874a07bd873e26ecf7f1e4d7cff1bcafd822637805f0b272e61fb31a531b7f7"]},"localhost/math/SafeMath.sol":{"keccak256":"0xf4aa780b0c92d8d14805167ff517ba9ca475caf6b5b1e5a6a92457c66f81e460","urls":["bzzr://1d8384e3c762488bee3c7151da5e5254e3d79a1ca80fa7c9d7545177e62a3ece"]},"localhost/ownership/Ownable.sol":{"keccak256":"0x834ad56229d33ee70d86b398f30e49a1b9eae871a3c500a50e2e1d6153f3a3e7","urls":["bzzr://6616fb81a4099cc7471880e103e3a9131707ac53f9545bcfa5e0b04731991a4c"]}},"version":1}
export let Constants = new web3.eth.Contract(CONSTANTS_META.output.abi, CONSTANTS_ADDRESS)

export const CROWDSALE_ADDRESS = '0xab0fc8daf29f78a3f8d216e235039a2d26c69c07'
export const CROWDSALE_META = {"compiler":{"version":"0.4.19+commit.c4cbbb05"},"language":"Solidity","output":{"abi":[{"constant":true,"inputs":[],"name":"rate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"setMP3Address","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"setConstantsAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"weiRaised","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"constantsAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"wallet","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"mp3Address","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"beneficiary","type":"address"}],"name":"buyTokens","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_wallet","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"purchaser","type":"address"},{"indexed":true,"name":"beneficiary","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"TokenPurchase","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}],"devdoc":{"methods":{"transferOwnership(address)":{"details":"Allows the current owner to transfer control of the contract to a newOwner.","params":{"newOwner":"The address to transfer ownership to."}}},"title":"Crowdsale"},"userdoc":{"methods":{}}},"settings":{"compilationTarget":{"localhost/crowdsale/Crowdsale.sol":"Crowdsale"},"libraries":{},"optimizer":{"enabled":false,"runs":200},"remappings":[]},"sources":{"localhost/core/Constants.sol":{"keccak256":"0x0eecb5c801e4c36492cfbaca9028ff4055279607e4d34192589d50615bbb69fd","urls":["bzzr://4874a07bd873e26ecf7f1e4d7cff1bcafd822637805f0b272e61fb31a531b7f7"]},"localhost/crowdsale/Crowdsale.sol":{"keccak256":"0x3654348d5e5997e6d6dffe21d150f2cb008afe230cc472e699a332c16ec04277","urls":["bzzr://4270c185de3a5970c04a4ce8d1ade27833fbbe9636a6908bce3a40ffbb573af2"]},"localhost/crowdsale/CrowdsaleSpecificAddresses.sol":{"keccak256":"0x0bb5912459de231a67796056f6e2ae2ef996dc8846943cc6014d872048bc5d83","urls":["bzzr://066dc5badb2d0114eb099f492a9a8474e15f9e8ec63fba1b9068aa08e8b5828c"]},"localhost/math/SafeMath.sol":{"keccak256":"0xf4aa780b0c92d8d14805167ff517ba9ca475caf6b5b1e5a6a92457c66f81e460","urls":["bzzr://1d8384e3c762488bee3c7151da5e5254e3d79a1ca80fa7c9d7545177e62a3ece"]},"localhost/ownership/Ownable.sol":{"keccak256":"0x834ad56229d33ee70d86b398f30e49a1b9eae871a3c500a50e2e1d6153f3a3e7","urls":["bzzr://6616fb81a4099cc7471880e103e3a9131707ac53f9545bcfa5e0b04731991a4c"]},"localhost/tokens/BasicToken.sol":{"keccak256":"0xec40ac03752325afea845a3b1b070a3328b898a5e0aad7f1ab6ed954577b854e","urls":["bzzr://91da8750b00ecd03768d4ef5a19c9a40bf575a30d33dd023996e9f3923118c86"]},"localhost/tokens/ERC20.sol":{"keccak256":"0x9804033db5da480a9a92eaaa18f2e8e4619af3ef5877f5285f06af1c127238f5","urls":["bzzr://59605540921a25a7af77ee5f8add6509fcc626b829818526356314e318dec730"]},"localhost/tokens/ERC20Basic.sol":{"keccak256":"0x443e60276f47171d3966e7f4c3880f3e0a8f9b7b1d6f0471adfa0f2b15e5e55c","urls":["bzzr://35d4dfe229974545fd0c8168fe5ff23f1a1b9b5bfb71612e6f18929babf49fa7"]},"localhost/tokens/MP3.sol":{"keccak256":"0x9568a39174ae85bc8b94b217382921e511a5ad84789f505d848698e14c062707","urls":["bzzr://1036043f5846d111e6042d5e12b520fd1b821a83934558937b92476934f73c55"]},"localhost/tokens/MintableToken.sol":{"keccak256":"0x946282a84a71f6766a47017643e65355bae0090d21bfb856bb479d22f9f806c1","urls":["bzzr://298363ec20e11eeaa6ddfd70ee41b24f8adfae10fb3fa98dabfd1b2000271f77"]},"localhost/tokens/StandardToken.sol":{"keccak256":"0xb364de3420f13f662651497942e5a130b9824a178355d523b9b83bcb8d52cd3e","urls":["bzzr://fe4474791d8894144b1fa34b5d6b54944eb7e465a29559a8743483be26509013"]},"localhost/tokens/TokenSpecificAddresses.sol":{"keccak256":"0x4f0930926d38d585afb7fd8757128b807b01a366d7bd871ca812f408db6d1b17","urls":["bzzr://8a47d455c36dab178db3b40dd144afaad990f70158ee3aa759c9f66bce0e7058"]},"localhost/tokens/TrackTransferableToken.sol":{"keccak256":"0xe26546c660adf8378a376f537777a1f2fa21646de1c3a1db3a6bb636a0227846","urls":["bzzr://76147ef9de0ea16a6bd7edca6f4cd0558b344e2141bf73e0c26f2705136ed6e0"]}},"version":1}
export let Crowdsale = new web3.eth.Contract(CROWDSALE_META.output.abi, CROWDSALE_ADDRESS)

const DATA_ADDRESS = '0xa5eb7ce6753c64bb38bfdf1c11e88a10193c604e'
const DATA_META = {"compiler":{"version":"0.4.19+commit.c4cbbb05"},"language":"Solidity","output":{"abi":[{"constant":true,"inputs":[{"name":"keccakTrackHash","type":"bytes32"}],"name":"convertKeccackHashToIPFSHash","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"setPlayerAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"setMP3Address","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"setConstantsAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"constantsAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"trackHash","type":"bytes32"}],"name":"getPlayCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"playerAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"trackHash","type":"bytes32"},{"name":"_key","type":"string"}],"name":"getTrackBasicMetadataByHash","outputs":[{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"trackHash","type":"bytes32"},{"name":"_key","type":"string"},{"name":"_value","type":"string"},{"name":"userToPay","type":"address"}],"name":"uploadMetadata","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"trackHash","type":"bytes32"}],"name":"getIpfsHashMetadata","outputs":[{"name":"","type":"bytes1"},{"name":"","type":"bytes1"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"mp3Address","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"hashFunction","type":"bytes1"},{"name":"size","type":"bytes1"},{"name":"trackHash","type":"bytes32"},{"name":"artist","type":"string"},{"name":"title","type":"string"}],"name":"uploadTrack","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"trackHash","type":"bytes32"}],"name":"incrementPlayCount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"trackHash","type":"bytes32"}],"name":"newUpload","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}],"devdoc":{"methods":{"transferOwnership(address)":{"details":"Allows the current owner to transfer control of the contract to a newOwner.","params":{"newOwner":"The address to transfer ownership to."}}}},"userdoc":{"methods":{}}},"settings":{"compilationTarget":{"localhost/data/Data.sol":"Data"},"libraries":{},"optimizer":{"enabled":false,"runs":200},"remappings":[]},"sources":{"localhost/core/Constants.sol":{"keccak256":"0x0eecb5c801e4c36492cfbaca9028ff4055279607e4d34192589d50615bbb69fd","urls":["bzzr://4874a07bd873e26ecf7f1e4d7cff1bcafd822637805f0b272e61fb31a531b7f7"]},"localhost/data/Data.sol":{"keccak256":"0x82a3044fae70ec25fb94ec15d96add2c722e087dbd65548f1feecb3872490a97","urls":["bzzr://f333b0226b812f0e6f55cb1a36bb67b48cfb170c6aa47cb04b7b9ef7cfa42e4a"]},"localhost/data/DataSpecificAddresses.sol":{"keccak256":"0xbb94ff3d69512b40a0cc8e8ad93ef2be32909a682a0d872c5a92773a69db09b7","urls":["bzzr://827cb7cc583d2eefcd1edc58287edbb222caad8618603cb1718331da085a4c42"]},"localhost/math/SafeMath.sol":{"keccak256":"0xf4aa780b0c92d8d14805167ff517ba9ca475caf6b5b1e5a6a92457c66f81e460","urls":["bzzr://1d8384e3c762488bee3c7151da5e5254e3d79a1ca80fa7c9d7545177e62a3ece"]},"localhost/ownership/Ownable.sol":{"keccak256":"0x834ad56229d33ee70d86b398f30e49a1b9eae871a3c500a50e2e1d6153f3a3e7","urls":["bzzr://6616fb81a4099cc7471880e103e3a9131707ac53f9545bcfa5e0b04731991a4c"]},"localhost/tokens/BasicToken.sol":{"keccak256":"0xec40ac03752325afea845a3b1b070a3328b898a5e0aad7f1ab6ed954577b854e","urls":["bzzr://91da8750b00ecd03768d4ef5a19c9a40bf575a30d33dd023996e9f3923118c86"]},"localhost/tokens/ERC20.sol":{"keccak256":"0x9804033db5da480a9a92eaaa18f2e8e4619af3ef5877f5285f06af1c127238f5","urls":["bzzr://59605540921a25a7af77ee5f8add6509fcc626b829818526356314e318dec730"]},"localhost/tokens/ERC20Basic.sol":{"keccak256":"0x443e60276f47171d3966e7f4c3880f3e0a8f9b7b1d6f0471adfa0f2b15e5e55c","urls":["bzzr://35d4dfe229974545fd0c8168fe5ff23f1a1b9b5bfb71612e6f18929babf49fa7"]},"localhost/tokens/MP3.sol":{"keccak256":"0x9568a39174ae85bc8b94b217382921e511a5ad84789f505d848698e14c062707","urls":["bzzr://1036043f5846d111e6042d5e12b520fd1b821a83934558937b92476934f73c55"]},"localhost/tokens/MintableToken.sol":{"keccak256":"0x946282a84a71f6766a47017643e65355bae0090d21bfb856bb479d22f9f806c1","urls":["bzzr://298363ec20e11eeaa6ddfd70ee41b24f8adfae10fb3fa98dabfd1b2000271f77"]},"localhost/tokens/StandardToken.sol":{"keccak256":"0xb364de3420f13f662651497942e5a130b9824a178355d523b9b83bcb8d52cd3e","urls":["bzzr://fe4474791d8894144b1fa34b5d6b54944eb7e465a29559a8743483be26509013"]},"localhost/tokens/TokenSpecificAddresses.sol":{"keccak256":"0x4f0930926d38d585afb7fd8757128b807b01a366d7bd871ca812f408db6d1b17","urls":["bzzr://8a47d455c36dab178db3b40dd144afaad990f70158ee3aa759c9f66bce0e7058"]},"localhost/tokens/TrackTransferableToken.sol":{"keccak256":"0xe26546c660adf8378a376f537777a1f2fa21646de1c3a1db3a6bb636a0227846","urls":["bzzr://76147ef9de0ea16a6bd7edca6f4cd0558b344e2141bf73e0c26f2705136ed6e0"]}},"version":1}
export let Data = new web3.eth.Contract(DATA_META.output.abi, DATA_ADDRESS)

export const PLAYER_ADDRESS = '0x27f58b61f0efc224f433b073c020e0f9a7621715'
const PLAYER_META = {"compiler":{"version":"0.4.19+commit.c4cbbb05"},"language":"Solidity","output":{"abi":[{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"setDataAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"dataAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"setMP3Address","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"setConstantsAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"constantsAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"keccakTrackHash","type":"bytes32"}],"name":"stream","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"mp3Address","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"listener","type":"address"}],"name":"getCurrentTrack","outputs":[{"name":"","type":"bytes1"},{"name":"","type":"bytes1"},{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}],"devdoc":{"methods":{"transferOwnership(address)":{"details":"Allows the current owner to transfer control of the contract to a newOwner.","params":{"newOwner":"The address to transfer ownership to."}}}},"userdoc":{"methods":{}}},"settings":{"compilationTarget":{"localhost/player/Player.sol":"Player"},"libraries":{},"optimizer":{"enabled":false,"runs":200},"remappings":[]},"sources":{"localhost/core/Constants.sol":{"keccak256":"0x0eecb5c801e4c36492cfbaca9028ff4055279607e4d34192589d50615bbb69fd","urls":["bzzr://4874a07bd873e26ecf7f1e4d7cff1bcafd822637805f0b272e61fb31a531b7f7"]},"localhost/data/Data.sol":{"keccak256":"0x82a3044fae70ec25fb94ec15d96add2c722e087dbd65548f1feecb3872490a97","urls":["bzzr://f333b0226b812f0e6f55cb1a36bb67b48cfb170c6aa47cb04b7b9ef7cfa42e4a"]},"localhost/data/DataSpecificAddresses.sol":{"keccak256":"0xbb94ff3d69512b40a0cc8e8ad93ef2be32909a682a0d872c5a92773a69db09b7","urls":["bzzr://827cb7cc583d2eefcd1edc58287edbb222caad8618603cb1718331da085a4c42"]},"localhost/math/SafeMath.sol":{"keccak256":"0xf4aa780b0c92d8d14805167ff517ba9ca475caf6b5b1e5a6a92457c66f81e460","urls":["bzzr://1d8384e3c762488bee3c7151da5e5254e3d79a1ca80fa7c9d7545177e62a3ece"]},"localhost/ownership/Ownable.sol":{"keccak256":"0x834ad56229d33ee70d86b398f30e49a1b9eae871a3c500a50e2e1d6153f3a3e7","urls":["bzzr://6616fb81a4099cc7471880e103e3a9131707ac53f9545bcfa5e0b04731991a4c"]},"localhost/player/Player.sol":{"keccak256":"0x620b45a2a29debb7631cefe55a2b8bd6083e2e2722dead42aca4d405455ffcad","urls":["bzzr://9b155dada1ed89b8c8eac682e6f98ca0b992cef5a7f46a54fb59f312355a0641"]},"localhost/player/PlayerSpecificAddresses.sol":{"keccak256":"0x9820268c2583506f17f796a83e25bace4c078db31149525e5588c44b28a23371","urls":["bzzr://a1dbd0dcb5e4c5f4dad370f57f1a549a8ee76c34e8c864535cbc41aaad0c28dc"]},"localhost/tokens/BasicToken.sol":{"keccak256":"0xec40ac03752325afea845a3b1b070a3328b898a5e0aad7f1ab6ed954577b854e","urls":["bzzr://91da8750b00ecd03768d4ef5a19c9a40bf575a30d33dd023996e9f3923118c86"]},"localhost/tokens/ERC20.sol":{"keccak256":"0x9804033db5da480a9a92eaaa18f2e8e4619af3ef5877f5285f06af1c127238f5","urls":["bzzr://59605540921a25a7af77ee5f8add6509fcc626b829818526356314e318dec730"]},"localhost/tokens/ERC20Basic.sol":{"keccak256":"0x443e60276f47171d3966e7f4c3880f3e0a8f9b7b1d6f0471adfa0f2b15e5e55c","urls":["bzzr://35d4dfe229974545fd0c8168fe5ff23f1a1b9b5bfb71612e6f18929babf49fa7"]},"localhost/tokens/MP3.sol":{"keccak256":"0x9568a39174ae85bc8b94b217382921e511a5ad84789f505d848698e14c062707","urls":["bzzr://1036043f5846d111e6042d5e12b520fd1b821a83934558937b92476934f73c55"]},"localhost/tokens/MintableToken.sol":{"keccak256":"0x946282a84a71f6766a47017643e65355bae0090d21bfb856bb479d22f9f806c1","urls":["bzzr://298363ec20e11eeaa6ddfd70ee41b24f8adfae10fb3fa98dabfd1b2000271f77"]},"localhost/tokens/StandardToken.sol":{"keccak256":"0xb364de3420f13f662651497942e5a130b9824a178355d523b9b83bcb8d52cd3e","urls":["bzzr://fe4474791d8894144b1fa34b5d6b54944eb7e465a29559a8743483be26509013"]},"localhost/tokens/TokenSpecificAddresses.sol":{"keccak256":"0x4f0930926d38d585afb7fd8757128b807b01a366d7bd871ca812f408db6d1b17","urls":["bzzr://8a47d455c36dab178db3b40dd144afaad990f70158ee3aa759c9f66bce0e7058"]},"localhost/tokens/TrackTransferableToken.sol":{"keccak256":"0xe26546c660adf8378a376f537777a1f2fa21646de1c3a1db3a6bb636a0227846","urls":["bzzr://76147ef9de0ea16a6bd7edca6f4cd0558b344e2141bf73e0c26f2705136ed6e0"]}},"version":1}
export let Player = new web3.eth.Contract(PLAYER_META.output.abi, PLAYER_ADDRESS)

const TOKENS_ADDRESS = '0x82bca59493aa61ce9ae60cd98f6f8eb2673a58c3'
const TOKENS_META = {"compiler":{"version":"0.4.19+commit.c4cbbb05"},"language":"Solidity","output":{"abi":[{"constant":true,"inputs":[{"name":"trackHash","type":"bytes32"}],"name":"trackBalanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"mintingFinished","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"setDataAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"dataAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"setCrowdsaleAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"crowdsaleAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"finishMinting","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"bytes32"},{"name":"_value","type":"uint256"}],"name":"transferFromUserToTrack","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_to","type":"bytes32"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"TransferFromUserToTrack","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[],"name":"MintFinished","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}],"devdoc":{"methods":{"allowance(address,address)":{"details":"Function to check the amount of tokens that an owner allowed to a spender.","params":{"_owner":"address The address which owns the funds.","_spender":"address The address which will spend the funds."},"return":"A uint256 specifying the amount of tokens still available for the spender."},"approve(address,uint256)":{"details":"Approve the passed address to spend the specified amount of tokens on behalf of msg.sender.    * Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729","params":{"_spender":"The address which will spend the funds.","_value":"The amount of tokens to be spent."}},"balanceOf(address)":{"details":"Gets the balance of the specified address.","params":{"_owner":"The address to query the the balance of."},"return":"An uint256 representing the amount owned by the passed address."},"finishMinting()":{"details":"Function to stop minting new tokens.","return":"True if the operation was successful."},"mint(address,uint256)":{"details":"Function to mint tokens","params":{"_amount":"The amount of tokens to mint.","_to":"The address that will receive the minted tokens."},"return":"A boolean that indicates if the operation was successful."},"trackBalanceOf(bytes32)":{"details":"Get the balance of the specified track hash.","params":{"trackHash":"The track hash to query the the balance of."}},"transfer(address,uint256)":{"details":"transfer token for a specified address","params":{"_to":"The address to transfer to.","_value":"The amount to be transferred."}},"transferFrom(address,address,uint256)":{"details":"Transfer tokens from one address to another","params":{"_from":"address The address which you want to send tokens from","_to":"address The address which you want to transfer to","_value":"uint256 the amount of tokens to be transferred"}},"transferFromUserToTrack(address,bytes32,uint256)":{"details":"Transfer token to a specified track hash","params":{"_from":"The address to transfer from.","_to":"The track hash to transfer to.","_value":"The amount to be transferred."}},"transferOwnership(address)":{"details":"Allows the current owner to transfer control of the contract to a newOwner.","params":{"newOwner":"The address to transfer ownership to."}}},"title":"MP3"},"userdoc":{"methods":{"increaseApproval(address,uint256)":{"notice":"approve should be called when allowed[_spender] == 0. To increment allowed value is better to use this function to avoid 2 calls (and wait until the first transaction is mined) From MonolithDAO Token.sol"}}}},"settings":{"compilationTarget":{"localhost/tokens/MP3.sol":"MP3"},"libraries":{},"optimizer":{"enabled":false,"runs":200},"remappings":[]},"sources":{"localhost/math/SafeMath.sol":{"keccak256":"0xf4aa780b0c92d8d14805167ff517ba9ca475caf6b5b1e5a6a92457c66f81e460","urls":["bzzr://1d8384e3c762488bee3c7151da5e5254e3d79a1ca80fa7c9d7545177e62a3ece"]},"localhost/ownership/Ownable.sol":{"keccak256":"0x834ad56229d33ee70d86b398f30e49a1b9eae871a3c500a50e2e1d6153f3a3e7","urls":["bzzr://6616fb81a4099cc7471880e103e3a9131707ac53f9545bcfa5e0b04731991a4c"]},"localhost/tokens/BasicToken.sol":{"keccak256":"0xec40ac03752325afea845a3b1b070a3328b898a5e0aad7f1ab6ed954577b854e","urls":["bzzr://91da8750b00ecd03768d4ef5a19c9a40bf575a30d33dd023996e9f3923118c86"]},"localhost/tokens/ERC20.sol":{"keccak256":"0x9804033db5da480a9a92eaaa18f2e8e4619af3ef5877f5285f06af1c127238f5","urls":["bzzr://59605540921a25a7af77ee5f8add6509fcc626b829818526356314e318dec730"]},"localhost/tokens/ERC20Basic.sol":{"keccak256":"0x443e60276f47171d3966e7f4c3880f3e0a8f9b7b1d6f0471adfa0f2b15e5e55c","urls":["bzzr://35d4dfe229974545fd0c8168fe5ff23f1a1b9b5bfb71612e6f18929babf49fa7"]},"localhost/tokens/MP3.sol":{"keccak256":"0x9568a39174ae85bc8b94b217382921e511a5ad84789f505d848698e14c062707","urls":["bzzr://1036043f5846d111e6042d5e12b520fd1b821a83934558937b92476934f73c55"]},"localhost/tokens/MintableToken.sol":{"keccak256":"0x946282a84a71f6766a47017643e65355bae0090d21bfb856bb479d22f9f806c1","urls":["bzzr://298363ec20e11eeaa6ddfd70ee41b24f8adfae10fb3fa98dabfd1b2000271f77"]},"localhost/tokens/StandardToken.sol":{"keccak256":"0xb364de3420f13f662651497942e5a130b9824a178355d523b9b83bcb8d52cd3e","urls":["bzzr://fe4474791d8894144b1fa34b5d6b54944eb7e465a29559a8743483be26509013"]},"localhost/tokens/TokenSpecificAddresses.sol":{"keccak256":"0x4f0930926d38d585afb7fd8757128b807b01a366d7bd871ca812f408db6d1b17","urls":["bzzr://8a47d455c36dab178db3b40dd144afaad990f70158ee3aa759c9f66bce0e7058"]},"localhost/tokens/TrackTransferableToken.sol":{"keccak256":"0xe26546c660adf8378a376f537777a1f2fa21646de1c3a1db3a6bb636a0227846","urls":["bzzr://76147ef9de0ea16a6bd7edca6f4cd0558b344e2141bf73e0c26f2705136ed6e0"]}},"version":1}
export let Tokens = new web3.eth.Contract(TOKENS_META.output.abi, TOKENS_ADDRESS)


export const GAS = 200000;
export const GAS_PRICE = 2000000000;

export const ZERO_HEX = "0x0000000000000000000000000000000000000000000000000000000000000000"



