import { heroes } from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = ( element ) =>{

    const renderHero = ( hero ) =>{
        element.innerHTML = hero.name;
    }

    const renderTwoHeros = (hero1, hero2) =>{
        element.innerHTML = `
            <h3>${hero1.name}</h3>
            <h3>${hero2.name}</h3>
        `;
    } 

    const renderError = (error) => {
        element.innerHTML = `
        <h1>Error:</h1>
        <h3>${error}</h3>
        `
    }
     
     
    const id1 = '5d86371f9f80b591f499df32 ';
    const id2 = '5d86371f233c9f2425f16916';


Promise.all([
    findhero(id1),
    findhero(id2),
])
.then( ([hero1, hero2]) => renderTwoHeros (hero1, hero2 ))
.catch( renderError );


// ! Forma 2
    // findhero(id1)
    //     .then( hero => {
    //         hero1 = hero;
    //         return findhero(id2);
     //     }).then(hero2 => {
    //         renderTwoHeros(hero1, hero2);
    //     })
    //     .catch( renderError );


// ! Forma 1
    // findhero( id1 )
    //     .then( (hero) =>{
            
    //         findhero (id2)
    //             .then ( hero2 => {
    //                 renderTwoHeros(hero1,hero2) 
    //             })
    //             .catch( renderError );
    //     })
    //     .catch( renderError );
}

/**
 * 
 * @param {string} id 
 * @returns {Promise}
 */
const findhero = ( id ) =>  {

    return new Promise ( ( resolve , reject ) => {


        const hero = heroes.find( hero => hero.id === id);

        if ( hero ) {
            resolve( hero );
            return;
        }

            reject(`Hero with id ${id} not found`);
     });


    // const hero = heroes.find( hero => hero.id === id );
     
}