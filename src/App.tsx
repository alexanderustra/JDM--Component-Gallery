import './App.css'
import { Button } from './components/buttons/Button'
import { BackgroundImgCard, CropImgCard } from './components/cards/ImgCards'
import { Input } from './components/inputs/Inputs'
import { BorderedRadio } from './components/radios/PrimaryRadio'
import { RadioGroup } from './components/radios/radioGroup'
function App() {

  return (
    <div style={{display:'flex',flexWrap:"wrap"}}>
      <Button text='Button' />
      <Button text='Button' type='success' /> 
      <BackgroundImgCard title='Card' subtitle='Card Subtitle' imageUrl='https://i.pinimg.com/564x/c9/2a/18/c92a18e398195f6c1e47e515e7c3ff38.jpg' />
      <CropImgCard height='320px' title='Card' subtitle='Card Subtitle' imageUrl='https://i.pinimg.com/564x/0f/ec/d5/0fecd5ca8f9eaac757db1b355a4a51cf.jpg' />
      <Input label='Label' style={{width:'300px'}} name='input' onChange={(value)=>{
        console.log(value)
      }} />
      <Input label='Label'  invalid invalidMessage='Invalid' style={{width:'300px'}} name='input' onChange={(value)=>{
        console.log(value)
      }} />
      <RadioGroup label='Radio Group' onChange={(value)=>{
        console.log(value)
      }} >
        <BorderedRadio id='1' label='Label' />
        <BorderedRadio id='2' label='Label' />
      </RadioGroup>
      
    </div>
  )
}

export default App