export default function(){
    let dFuture = new Date("2023-06-08T23:56:10.634Z");
    let dNow = new Date();
    let nDifference = (dFuture - dNow)/(1000 * 3600 * 24);

    return <span>{Math.round(nDifference)}</span>
}