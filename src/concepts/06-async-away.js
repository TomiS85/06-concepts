import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwayComponent = async (element) =>{


    const id1 = 'a5d86371f97c29d020f1e1f6d';
    const id2 = '5d86371fd55e2e2a30fe1ccb';

    try {
        const hero1 = await findhero( id1 );
        const hero2 = await findhero( id2 );
    
        element.innerHTML = `${hero1.name} / ${hero2.name}`;

    } catch (error) {
        element.innerHTML = error;
    }

}


const findhero = async( id ) => {

const hero = heroes.find( hero => hero.id === id);
if ( !hero)
    throw `hero not found`;

return hero;


}