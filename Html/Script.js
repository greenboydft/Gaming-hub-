function openGame(gamePage) {
    window.location.href = gamePage;
}

function toggleVIP() {
    let ads = document.getElementById('adsense-container');
    if (ads.style.display === "none") {
        ads.style.display = "block";
        localStorage.removeItem("VIP");
        alert("Normal Mode: Ads are visible.");
    } else {
        ads.style.display = "none";
        localStorage.setItem("VIP", "true");
        alert("VIP Mode: Ads are hidden.");
    }
}
        // 🔍 Search Games
        function searchGames() {
            let input = document.getElementById("searchBar").value.toLowerCase();
            let filteredGames = games.filter(game => game.title.toLowerCase().includes(input));
            showGames(filteredGames);
        }
      


// Hide ads for VIP users on page load
window.onload = function () {
    if (localStorage.getItem("VIP") === "true") {
        document.getElementById("adsense-container").style.display = "none";
    }
};