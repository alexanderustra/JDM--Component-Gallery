import './App.css'

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

const items = [
  {
    title: 'Título del elemento 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laborum numquam accusamus autem sequi quibusdam minima laudantium repellendus consequuntur cupiditate? Ullam autem non fuga enim dolorum adipisci maiores similique possimus?'
  },
  {
    title: 'Título del elemento 2',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laborum numquam accusamus autem sequi quibusdam minima laudantium repellendus consequuntur cupiditate? Ullam autem non fuga enim dolorum adipisci maiores similique possimus?'
  },
  {
    title: 'Título del elemento 3',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laborum numquam accusamus autem sequi quibusdam minima laudantium repellendus consequuntur cupiditate? Ullam autem non fuga enim dolorum adipisci maiores similique possimus?'
  }
];
const press = ()=> {
  alert("yep, you pressed me")
}
const success = ()=> {
  alert("Everything fine")
}
const danger = ()=> {
  alert("Not so Fine")
}
function App() {

  return (
    <>
      <PrimaryButton text='Default' action={press} />
      <PrimaryButton text='Success' type='success' action={success} />
      <PrimaryButton text='Danger' type='danger' action={danger} />
      <PrimaryButton text='Disabled' type='disabled' />
      <PrimaryInput />
      <PrimaryChip />
      <PrimarySwip />
      <SimpleAccordion items = {items} />
      <AccordionWithSubtitles items = {items} />
      <BackgroundImgCard title = 'Cyberpunk Cat' subtitle = 'Subtitle' imageUrl="https://i.pinimg.com/564x/d5/45/97/d54597febda44e5d047fa5284462f15f.jpg" />
      <CropImgCard title = 'Cyberpunk Cat' subtitle = 'Subtitle' imageUrl='https://i.pinimg.com/564x/d5/45/97/d54597febda44e5d047fa5284462f15f.jpg' />
      <PrimaryActionCard title = 'Cyberpunk Cat' subtitle = 'Subtitle' imageUrl='https://i.pinimg.com/564x/d5/45/97/d54597febda44e5d047fa5284462f15f.jpg' />
      <PrimaryCard />
      <CircularProgress />
      <PrimaryTooltip button='Hover Me' tipText=' Oh Hello There' position='bottom' />
      <PrimaryTooltip button='Hover Me' tipText=' Oh Hello There' position='top' backgroundColor='#00A962' />
      <PrimaryTooltip button='Hover Me' tipText=' Oh Hello There' position='left' backgroundColor='#FF4040' />
      <PrimaryTooltip button='Hover Me' tipText=' Oh Hello There' position='right' backgroundColor='#336CFF' />
    </>
  )
}

export default App
