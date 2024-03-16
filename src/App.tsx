import './App.css'
import { useState } from 'react'

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
const items2 = [
  {
    title: 'Título del elemento 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laborum numquam accusamus autem sequi quibusdam minima laudantium repellendus consequuntur cupiditate? Ullam autem non fuga enim dolorum adipisci maiores similique possimus?'
  },
  {
    title: 'Título del elemento 2',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laborum numquam accusamus autem sequi quibusdam minima laudantium repellendus consequuntur cupiditate? Ullam autem non fuga enim dolorum adipisci maiores similique possimus?'
  }
];

function App() {

  return (
    <>
      <PrimaryButton text='Button' type='primary-button' />
      <PrimaryButton text='Success' type='success' />
      <PrimaryButton text='Danger' type='danger' />
      <PrimaryButton text='Disabled' type='disabled' />
      <PrimaryInput />
      <PrimaryChip />
      <PrimarySwip />
      <SimpleAccordion items = {items} />
      <AccordionWithSubtitles items = {items2} />
      <BackgroundImgCard title = 'Cyberpunk Cat' subtitle = 'Subtitle' imageUrl="https://i.pinimg.com/564x/d5/45/97/d54597febda44e5d047fa5284462f15f.jpg" />
      <CropImgCard title = 'Cyberpunk Cat' subtitle = 'Subtitle' imageUrl='https://i.pinimg.com/564x/d5/45/97/d54597febda44e5d047fa5284462f15f.jpg' />
      <PrimaryActionCard title = 'Cyberpunk Cat' subtitle = 'Subtitle' imageUrl='https://i.pinimg.com/564x/d5/45/97/d54597febda44e5d047fa5284462f15f.jpg' />
      <PrimaryCard />
      <CircularProgress />
    </>
  )
}

export default App
