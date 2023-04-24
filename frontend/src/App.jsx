import WRContent from 'wrcomponents/dist/WRContent'
import WRHeader from 'wrcomponents/dist/WRHeader'
import WRFooter from 'wrcomponents/dist/WRFooter'
import WRTools from 'wrcomponents/dist/WRTools'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Mint from './components/erc20/mint'
import { Claim, Compound, Deposit, Withdraw } from './components/staking'
import { Box } from './components/common'


function App() {

  return (
    <div className="App">
      <ToastContainer position='top-center' autoclose={5000}/>
      <WRHeader title='ERC20 Staking' image={true}/>
      <WRContent>
        <p className='testa'>testa</p>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
  <div className="flex-shrink-0">
    
  </div>
  <div>
    <div className="text-xl font-medium text-black">ChitChat</div>
    <p className="text-gray-500">You have a new message!</p>
  </div>
</div>
        <Box title={"ERC20 Tokens"}>
          <Mint/>
        </Box>
        <Box title={"Staking ERC20 Tokens"}>
          <Claim/>
          <Deposit/>
          <Withdraw/>
          <Compound/>
        </Box>
      </WRContent>
      <WRTools react={true} hardhat={true} solidity={true} css={true} javascript={true} ethersjs={true}/>
      <WRFooter/>
    </div>
  )
}

export default App
