import PluralitySocialConnect from 'plurality-social-connect';
import { useRef } from 'react';

const App = () => {
    const childRef: any = useRef(null);
    const abi = '[{"inputs":[],"name":"retrieve","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"num","type":"uint256"}],"name":"store","outputs":[],"stateMutability":"nonpayable","type":"function"}]';

    // Handle the data returned from the widget
    const handleDataReturned = (data: any) => {
        const receivedData = JSON.parse(JSON.stringify(data))
        console.log("dapp receives:", receivedData);
        alert(JSON.stringify(data));
        childRef.current.closeSocialConnectPopup();
        // Handle the received data in the external webpage
        // ... (perform actions with the received data)
    };

    return (
      <div>
        <div>
            <h1>Social Connect Integration</h1>
            <PluralitySocialConnect
                options={{ apps: 'facebook,twitter' }}
                onDataReturned={handleDataReturned}
                // all customization params are optional
                // customization={{ height: '200px', width: '500px', initialBackgroundColor: '#E8A123', initialTextColor: '#FFFFFF', flipBackgroundColor: '#12AE83', flipTextColor: '#FFFFFF'}}
                ref={childRef}
            />
        </div>
        <div>
          <h2>Web3 Functions</h2>
          <button onClick={() => PluralitySocialConnect.getAllAccounts()}>Get All Accounts</button>
            <br/>
            <button onClick={() => PluralitySocialConnect.getConnectedAccount()}>Get Connected Account</button>
            <br/>
            <button onClick={() => PluralitySocialConnect.getMessageSignature("Example `personal_sign` message.")}>Sign Message</button>
            <br/>
            <button onClick={() => PluralitySocialConnect.verifyMessageSignature("Example `personal_sign` message.", "0xa1379711716d214c84c146bbaa9d03d77895526b8620bcae67a76f824be6fd3a43795645a31f758eaed39ee6aa5490a979233711d4e9d6a2e30fa09a5e9c808a1b")}>Verify Message</button>
            <br/>
            <button onClick={() => PluralitySocialConnect.getBalance()}>Get Balance</button>
            <br/>
            <button onClick={() => PluralitySocialConnect.sendTransaction("0xe613B4cd69Fe20E8bd0F0D79a264210886bA1AA2","0.01")}>Send Transaction</button>
            <br/>
            <button onClick={() => PluralitySocialConnect.getBlockNumber()}>Get Block Number</button>
            <br/>
            <button onClick={() => PluralitySocialConnect.getTransactionCount("0xe613B4cd69Fe20E8bd0F0D79a264210886bA1AA2")}>Get Transaction count</button>
            <br/>
            <button onClick={() => PluralitySocialConnect.readFromContract("0x8E26aa0b6c7A396C92237C6a87cCD6271F67f937",abi,"retrieve")}>Read Contract</button>
            <br/>
            <button onClick={() => PluralitySocialConnect.writeToContract("0x8E26aa0b6c7A396C92237C6a87cCD6271F67f937",abi, "store", "5")}>Write Contract</button>

        </div>
      </div>
    );
};
export default App;