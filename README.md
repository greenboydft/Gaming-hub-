# Gaming-hub-
Play games and enjoying your life with happiness 💕
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gaming Hub</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script>
</head>
<body>

    <header>
        <h1>Gaming Hub</h1>
        <nav>
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="contact.html">Contact</a>
            <button onclick="toggleVIP()">Go VIP (Remove Ads)</button>
        </nav>
    </header>

    <div class="game-container">
        <div class="game-card" onclick="openGame('game.html?game=game1')">
            <img src="images/game1-thumbnail.jpg" alt="Game 1">
            <h3>Game 1</h3>
        </div>
        <div class="game-card" onclick="openGame('game.html?game=game2')">
            <img src="images/game2-thumbnail.jpg" alt="Game 2">
            <h3>Game 2</h3>
        </div>
        <!-- Add more games -->
    </div>

    <div id="adsense-container">
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-XXXXXXXXXX"
             data-ad-slot="YYYYYYYYYY"
             data-ad-format="auto"></ins>
        <script>
             (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
    </div>

</body>
</html>
