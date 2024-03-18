import './App.css'
import { items } from './textSamples'
import { lorem } from './textSamples'

import { PrimaryButton } from './components/buttons/PrimaryButton'
import { PrimaryInput } from './components/inputs/PrimaryInput'
import { PrimaryChip } from './components/chips/PrimaryChip'
import { PrimarySwip } from './components/swips/PrimarySwip'
import { PrimaryCard } from './components/cards/PrimaryCard'
import { BackgroundImgCard } from './components/cards/BackgroundImgCard'
import { CropImgCard } from './components/cards/CropImgCard'
import { PrimaryActionCard } from './components/cards/PrimaryActionCard'
import SimpleAccordion from './components/accordeons/PrimaryAccordion'
import AccordionWithSubtitles from './components/accordeons/AccordionWithSubtitles'
import CircularProgress from './components/circularProgress/PrimaryCircularProgress'
import PrimaryTooltip from './components/toolTip/PrimaryTooltip'

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
      <PrimaryButton text='Default' action={pressAction} />
      <PrimaryButton text='Success' type='success' action={successAction} />
      <PrimaryButton text='Danger' type='danger' action={dangerAction} />
      <PrimaryButton text='Disabled' type='disabled' />
      <PrimaryInput />
      <PrimaryChip text='Default Chip' />
      <PrimaryChip text='Bordered' type='bordered' color='#00A962' />
      <PrimaryChip text='With Shadow' type='shadow' color='#FF4040' />
      <PrimarySwip />
      <CircularProgress label='Loading' />
      <SimpleAccordion items = {items} />
      <AccordionWithSubtitles items = {items} />
      <BackgroundImgCard title = 'Cyberpunk Cat' subtitle = 'Subtitle' imageUrl="https://i.pinimg.com/564x/d5/45/97/d54597febda44e5d047fa5284462f15f.jpg" />
      <CropImgCard title = 'Cyberpunk Cat' subtitle = 'Subtitle' imageUrl='https://i.pinimg.com/564x/d5/45/97/d54597febda44e5d047fa5284462f15f.jpg' />
      <PrimaryActionCard title = 'Cyberpunk Cat' subtitle = 'Subtitle' imageUrl='https://i.pinimg.com/564x/d5/45/97/d54597febda44e5d047fa5284462f15f.jpg' />
      <PrimaryCard title='Primary Card' subtitle={lorem} />
      <PrimaryTooltip button='Hover Me' tipText=' Oh Hello There' position='bottom' />
      <PrimaryTooltip button='Hover Me' tipText=' Oh Hello There' position='top' backgroundColor='#00A962' />
      <PrimaryTooltip button='Hover Me' tipText=' Oh Hello There' position='left' backgroundColor='#FF4040' />
      <PrimaryTooltip button='Hover Me' tipText=' Oh Hello There' position='right' backgroundColor='#336CFF' />
    </>
  )
}

export default App
