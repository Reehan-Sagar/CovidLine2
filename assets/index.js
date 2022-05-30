function SearchHospital()
{
    let place = prompt("Enter Location", "");
    if((place !== null) && (place !== 'undefined') && (place !== ""))
    window.location.href=`https://twitter.com/search?q=${place}+%28+hospital+OR+hospitals+%29&f=live`;
}