/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiceRaceComponent = ( element ) =>{

    element.innerHTML = 'Loading....';

 const renderValue = ( value ) => {
    element.innerHTML = value;
 }

 Promise.race([
    slowPromise(),
    mediumPromise(),
    fastPromise(),
    mediumPromise(),
    slowPromise(),
    slowPromise(),
    fastPromise(),

 ]).then( renderValue );

}

const slowPromise = () => new Promise ( resolve => {
    setTimeout (() => {
        resolve('Slow promise')
    }, 2000);
});

const mediumPromise = () => new Promise ( resolve => {
    setTimeout (() => {
        resolve('medium promise')
    }, 1500);
});

const fastPromise = () => new Promise ( resolve => {
    setTimeout (() => {
        resolve('Fast promise')
    }, 1000);
});