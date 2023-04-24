import WRContent from 'wrcomponents/dist/WRContent'
import WRHeader from 'wrcomponents/dist/WRHeader'
import WRFooter from 'wrcomponents/dist/WRFooter'
import WRTools from 'wrcomponents/dist/WRTools'
// import {ToastContainer, toast} from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
import Mint from './components/erc20/mint'
import { Claim, Compound, Deposit, Withdraw } from './components/staking'
import { Box } from './components/common'

function App() {

  return (
    <div className="App">
      {/* <ToastContainer position='top-center' autoclose={5000}/> */}
      <WRHeader title='ERC20 Staking' image={true}/>
      <WRContent>
        <div className='br-red-300'>

        </div>
        <Box title={"ERC20 Tokens"} imageAddress={"https://cdn-icons-png.flaticon.com/512/2272/2272825.png"}>
          <Mint/>
        </Box>
        <Box title={"Staking ERC20 Tokens"} imageAddress={"https://paycent.com/wp-content/themes/twentysixteen-child/assets/img/blue/img-gain-massive.png"}>
          <Deposit/>
          <Compound/>
          <Claim/>
          <Withdraw/>
        </Box>
      </WRContent>
      <WRTools react={true} hardhat={true} solidity={true} css={true} javascript={true} ethersjs={true}/>
      <WRFooter/>
    </div>
  )
}

export default App
