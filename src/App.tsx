import './App.css'
import { items } from './textSamples'
import { lorem } from './textSamples'

import { Button } from './components/buttons/Button'
import { Input } from './components/inputs/Input'
import { Chip } from './components/chips/Chip'
import { Swip } from './components/swips/Swip'
import { PrimaryCard } from './components/cards/PrimaryCard'
import { BackgroundImgCard } from './components/cards/BackgroundImgCard'
import { CropImgCard } from './components/cards/CropImgCard'
import { PrimaryActionCard } from './components/cards/PrimaryActionCard'
import SimpleAccordion from './components/accordeons/PrimaryAccordion'
import AccordionWithSubtitles from './components/accordeons/AccordionWithSubtitles'
import CircularProgress from './components/circularProgress/CircularProgress'
import Tooltip from './components/toolTip/Tooltip'

const pressAction = ()=> {
  alert("yep, you pressed me")
}
const successAction = ()=> {
  alert("Everything fine")
}
const dangerAction = ()=> {
  alert("Not so Fine")
}
function App() {

  return (
    <>
      <Button text='Default' action={pressAction} />
      <Button text='Success' type='success' action={successAction} />
      <Button text='Danger' type='danger' action={dangerAction} />
      <Button text='Disabled' type='disabled' />
      <Input name='name' placeholder='Design System'/>
      <Chip text='Default Chip' />
      <Chip text='Bordered' type='bordered' color='#00A962' />
      <Chip text='With Shadow' type='shadow' color='#FF4040' />
      <Swip />
      <CircularProgress label='Loading...' />
      <SimpleAccordion items = {items} />
      <AccordionWithSubtitles items = {items} />
      <BackgroundImgCard title = 'Cyberpunk Cat' subtitle = 'Subtitle' imageUrl="https://i.pinimg.com/564x/d5/45/97/d54597febda44e5d047fa5284462f15f.jpg" />
      <CropImgCard title = 'Cyberpunk Cat' subtitle = 'Subtitle' imageUrl='https://i.pinimg.com/564x/d5/45/97/d54597febda44e5d047fa5284462f15f.jpg' />
      <PrimaryActionCard title = 'Cyberpunk Cat' subtitle = 'Subtitle' imageUrl='https://i.pinimg.com/564x/d5/45/97/d54597febda44e5d047fa5284462f15f.jpg' />
      <PrimaryCard title='Primary Card' subtitle={lorem} />
      <Tooltip button='Hover Me' tipText=' Oh Hello There' position='bottom' />
      <Tooltip button='Hover Me' tipText=' Oh Hello There' position='top' backgroundColor='#00A962' />
      <Tooltip button='Hover Me' tipText=' Oh Hello There' position='left' backgroundColor='#FF4040' />
      <Tooltip button='Hover Me' tipText=' Oh Hello There' position='right' backgroundColor='#336CFF' />
    </>
  )
}

export default App
