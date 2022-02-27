const loadData=()=>{
    document.getElementById('display-player').innerHTML=''
    const searchField=document.getElementById('search-field')
    const searchFieldvalue=searchField.value 
    const url=`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchFieldvalue}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayData(data.player))
    searchField.value=''
}
const displayData=(players)=>{
    players.forEach(player => {
        const displayPlayer=document.getElementById('display-player')
        const div=document.createElement('div')
        div.classList.add('player-class');
        div.innerHTML=`
        <img src="${player.strThumb}" alt="">
        <h2>${player.strPlayer}</h2>
        <p>Country: ${player.strNationality}</p>
        <button class="btn btn-danger">Delete</button>
        <button onclick="detailsShow('${player.idPlayer}')" class="btn btn-primary">Details</button>
        `
        displayPlayer.appendChild(div);
    });
}
const detailsShow=(id)=>{
    document.getElementById('details-player').innerHTML=''
    const detailsPlayer=document.getElementById('details-player');
    const url=`https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>playerDetails(data.players[0]))
}
const playerDetails=(playerInfo)=>{
    const detailsPlayers=document.getElementById('details-player')
    const div=document.createElement('div')
    div.classList.add('player-details')
    div.innerHTML=`
    <img id="bannerImg" src="${playerInfo.strBanner}" alt="">
    <img src="${playerInfo.strThumb}" alt="">
    <h2>${playerInfo.strPlayer}</h2>
    <h5>Country: ${playerInfo.strNationality}</h5>
    <p>Position: ${playerInfo.strPosition}</p>
    <p>Side: ${playerInfo.strSide}</p>
    <p>Date of birth: ${playerInfo.dateBorn}</p>
    <p>Gender: ${playerInfo.strGender}</p>
    <p>Height: ${playerInfo.strHeight}</p>
    <p>Weight: ${playerInfo.strWeight}</p>
    
    `
    detailsPlayers.appendChild(div)
}