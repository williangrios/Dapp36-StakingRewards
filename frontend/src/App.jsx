import WRContent from 'wrcomponents/dist/WRContent'
import WRHeader from 'wrcomponents/dist/WRHeader'
import WRFooter from 'wrcomponents/dist/WRFooter'
import WRTools from 'wrcomponents/dist/WRTools'
// import {ToastContainer, toast} from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
import Mint from './components/erc20/mint'
import { Claim, Compound, Deposit, StakingData, Withdraw } from './components/staking'
import { Box } from './components/common'
import Wallet from './components/wallet/Wallet'
import { useState } from 'react'


function App() {

    const [connection, setConnection] = useState({connected: false, account: '', provider: null, erc20Signer: null, stakingSigner: null});
    
  return (
    <div className="App">
      <WRHeader title='ERC20 Staking' image={true}/>
      <WRContent>
        {/* {JSON.stringify(connection)} */}
        <Box title={"Connect your wallet"} imageAddress={"https://images.vexels.com/media/users/3/157107/isolated/lists/ccd65f02db5b04645112801d922cdffe-icones-de-viagens-do-icone-da-carteira.png"}>
            <Wallet connection={connection} setConnection={setConnection}/>
        </Box>
        <Box title={"ERC20 Tokens"} imageAddress={"https://cdn-icons-png.flaticon.com/512/2272/2272825.png"}>
          <Mint connection={connection}/>
        </Box>
        <Box title={"Staking ERC20 Tokens"} imageAddress={"https://paycent.com/wp-content/themes/twentysixteen-child/assets/img/blue/img-gain-massive.png"}>
          <StakingData connection={connection}/>
          <Deposit connection={connection}/>
          <Compound connection={connection}/>
          <Claim connection={connection}/>
          <Withdraw connection={connection}/>
        </Box>
      </WRContent>
      <WRTools react={true} hardhat={true} solidity={true} css={true} javascript={true} ethersjs={true}/>
      <WRFooter/>
    </div>
  )
}

export default App
