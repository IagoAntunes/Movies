import React from "react";
import { ScreenScrollContainer, HomeList, Hero} from "../../components";

const FAKE_DATA_CHARACTERES = [
    {
        id: 0,
        image_url:
            'https://sm.ign.com/ign_br/screenshot/default/darth-vader_5yvm.jpg',
        title: 'Darth Vader',
        type: 'Personagem',
        subtitle: 'Anakin Skywalk',
        description: 'Darth Vader é um personagem fictício da saga de ficção científica Star Wars; um dos protagonistas centrais juntamente com Obi-Wan Kenobi'
    },
    {
        id: 1,
        image_url:
            'https://network.grupoabril.com.br/wp-content/uploads/sites/4/2020/02/desafio-jedi-de-mestre-yoda-consertar-as-frases-consegue-vocecc82.jpg?quality=100&strip=info',
            title: 'Darth Vader',
            type: 'Personagem',
            subtitle: 'Anakin Skywalk',
            description: 'Darth Vader é um personagem fictício da saga de ficção científica Star Wars; um dos protagonistas centrais juntamente com Obi-Wan Kenobi'
        
    },
    
]

export const Home = () => {
    return (
    <ScreenScrollContainer align="flex-start" justify="flex-start">
        <Hero 
            item={{
                title: 'Episodio 1',
                subtitle: 'A ameaça Fantasma',
                type: 'Filme',
                image_url:   'https://network.grupoabril.com.br/wp-content/uploads/sites/4/2020/02/desafio-jedi-de-mestre-yoda-consertar-as-frases-consegue-vocecc82.jpg?quality=100&strip=info'
        }}/>
        <HomeList title="Personagens" data={FAKE_DATA_CHARACTERES}/>
        <HomeList title="Filmes" data={FAKE_DATA_CHARACTERES}/>
    </ScreenScrollContainer>
    )
}