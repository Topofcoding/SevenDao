export const prettyDate = ( timestamp : number) => {
    let date = new Date(timestamp * 1000);
    return (date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear())
}