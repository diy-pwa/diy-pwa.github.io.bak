export default function(){
    let dFuture = new Date("2023-04-17T17:42:00.882Z");
    let dNow = new Date();
    let nDifference = (dFuture - dNow)/(1000 * 3600 * 24);

    return <span>{Math.round(nDifference)}</span>
}