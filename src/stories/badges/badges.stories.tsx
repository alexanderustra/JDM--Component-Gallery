import { Meta } from "@storybook/react";
import { Badge } from "../../components/badges/Badge";
import { UserCard } from "../../components/badges/UserCard";

export default {
  title: "Badge",
  component: Badge , UserCard
} as Meta;

export const PrimaryBadge= () => (
    <Badge img="https://cdna.artstation.com/p/assets/images/images/074/636/570/large/anato-finnstark-web-3.jpg?1712583261" content={3} />
);
export const UserCards= () => (
    <>
        <UserCard 
        type="square" 
        background 
        name="Lady Maria" 
        description="Artist : Anato Finnstark" 
        img="https://cdna.artstation.com/p/assets/images/images/074/636/570/large/anato-finnstark-web-3.jpg?1712583261" />
        <br />
        <UserCard 
        type="circle" 
        name="Lady Maria" 
        description="Artist : Anato Finnstark" 
        img="https://cdna.artstation.com/p/assets/images/images/074/636/570/large/anato-finnstark-web-3.jpg?1712583261" />
        <br />
        <UserCard
        longText 
        type="square" 
        background 
        name="Long Long Name to prove responsiveness" 
        description="Even longer description to prove aven more responsiveness" 
        img="https://cdna.artstation.com/p/assets/images/images/074/636/570/large/anato-finnstark-web-3.jpg?1712583261" />
        <br />
        <UserCard
        longText 
        type="square" 
        name="Long Long Name to prove responsiveness" 
        description="Even longer description to prove aven more responsiveness" 
        img="https://cdna.artstation.com/p/assets/images/images/074/636/570/large/anato-finnstark-web-3.jpg?1712583261" />
    </>
);
