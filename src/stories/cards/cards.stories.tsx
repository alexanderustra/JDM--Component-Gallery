import { Meta } from "@storybook/react";
import { BackgroundImgCard , PrimaryActionCard , CropImgCard} from "../../components/cards/ImgCards";
import { ButtonCard } from "../../components/cards/ButtonCards";

export default {
  title: "Cards",
  component: BackgroundImgCard , PrimaryActionCard , CropImgCard , ButtonCard
} as Meta;

export const ImgCards = ()=>(
    <div style={{display:'flex',flexWrap:'wrap'}}>
        <BackgroundImgCard 
        textColor="#FFFFFF" 
        imgPosition="50% 20%" 
        width="250px" 
        height="300px" 
        title=" Sister Sanavitius" 
        subtitle="Artist : Anato Finnstark" 
        imageUrl="https://cdnb.artstation.com/p/assets/images/images/072/697/147/large/anato-finnstark-web-petit.jpg?1707991667" 
        />

        <BackgroundImgCard 
        imgPosition="50% 10%"
        width="450px" 
        height="300px" 
        title=" Sister Sanavitius" 
        subtitle="Artist : Anato Finnstark" 
        imageUrl="https://cdnb.artstation.com/p/assets/images/images/072/697/147/large/anato-finnstark-web-petit.jpg?1707991667" 
        />

        <CropImgCard 
        width="300px"
        height="300px"
        imageUrl="https://picsum.photos/200/300" 
        title="Placeholder Image" 
        subtitle="Si lo tiene préndalo, el radio mi hermano" 
        />

        <PrimaryActionCard 
        width="500px"
        height="300px"
        imageUrl="https://picsum.photos/200/300" 
        title="Placeholder Image" 
        subtitle="Si lo tiene préndalo, el radio mi hermano" 
        />

        <PrimaryActionCard 
        width="250px"
        imageUrl="https://picsum.photos/200/300" 
        title="Placeholder Image" 
        subtitle="Si lo tiene préndalo, el radio mi hermano" 
        />
    </div>
)
export const ButtonCards = ()=>(
  <div  style={{display:'flex',flexWrap:'wrap'}}>
        <ButtonCard  
          style={{width:'400px',height:'160px'}}
          type="horizontal"
          imageUrl="https://picsum.photos/200/300" 
          title="Placeholder Image" 
          subtitle="Si lo tiene préndalo, el radio mi hermano" 
          primaryBtnText="Buy"
          secondaryBtnText="Add to Cart"
          primaryBtnAction={()=>{
            console.log('hola')
          }}
          secondaryBtnAction={()=>{
            console.log('hola')
          }} 
        />

        <ButtonCard  
          style={{width:'400px',height:'200px'}}
          type="horizontal"
          imageUrl="https://picsum.photos/200/300" 
          title="Placeholder Image" 
          subtitle="Si lo tiene préndalo, el radio mi hermano, fjsajsdnajkf jsdafjks fad khsb nfjsdkfsjk fsak kfsab ks dahk fsahk jh fksabfsabk" 
          primaryBtnText="Buy"
          secondaryBtnText="Add to Cart"
          primaryBtnAction={()=>{
            console.log('hola')
          }}
          secondaryBtnAction={()=>{
            console.log('hola')
          }} 
        />

        <ButtonCard  
        type="vertical"
        style={{width:'200px',height:'320px'}}
        imageUrl="https://picsum.photos/200/300" 
        title="Placeholder Image" 
        subtitle="Si lo tiene préndalo, el radio mi hermano" 
        primaryBtnText="Buy"
        primaryBtnAction={()=>{
          console.log('hola')
        }}
        />

        <ButtonCard  
          type="vertical"
          style={{width:'200px',height:'400px'}}
          imageUrl="https://picsum.photos/200/300" 
          title="Placeholder Image" 
          subtitle="Si lo tiene préndalo, el radio mi hermano ; escribir es como un vicio, ya lo dijo mi hermano, yo le rindo honor al vicio desde que es muy temprano" 
          primaryBtnText="Buy"
        secondaryBtnText="Add to Cart"
        primaryBtnAction={()=>{
          console.log('hola')
        }}
        secondaryBtnAction={()=>{
          console.log('hola')
        }} 
        />

        <ButtonCard  
         style={{width:'200px',height:'400px'}}
          type="vertical"
          imageUrl="https://picsum.photos/200/300" 
          title="Placeholder Image" 
          subtitle="Si lo tiene préndalo, el radio mi hermano ; escribir es como un vicio, ya lo dijo mi hermano, yo le rindo honor al vicio desde que es muy temprano" 
          primaryBtnText="Buy"
        secondaryBtnText="Add to Cart"
        primaryBtnAction={()=>{
          console.log('hola')
        }}
        secondaryBtnAction={()=>{
          console.log('hola')
        }} 
        />
  </div>
 )