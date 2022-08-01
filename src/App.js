import logo from './logo.svg';
import './App.css';

import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from '@web3-react/core';

const CoinbaseWallet = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
  appName: "Web3-react Demo",
  supportedChainIds: [1, 3, 4, 5, 42],
});

const WalletConnect = new WalletConnectConnector({
 rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
 bridge: "https://bridge.walletconnect.org",
 qrcode: true,
});

const Injected = new InjectedConnector({
 supportedChainIds: [1, 3, 4, 5, 42]
});

function App() {
  const {
    activate,
    deactivate,
    active,
    chainId,
    account
  } = useWeb3React();
  console.log('active,chainId,account', active, chainId, account);
  return (
    <div className="App">
      <div>Connection Status: {active}</div>
      <div>Account: {account}</div>
      <div>Network ID: {chainId}</div>
      <button onClick={() => { activate(CoinbaseWallet) }}>Coinbase Wallet</button>
      <button onClick={() => { activate(WalletConnect) }}>Wallet Connect</button>
      <button onClick={() => { activate(Injected) }}>Metamask</button>
      <button onClick={deactivate}>Disconnect</button>
    </div>
  );
}

export default App;
