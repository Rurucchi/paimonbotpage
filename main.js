import './style.css'

function copyInviteLink() {
  navigator.clipboard.writeText('')
}

document.querySelector('#app').innerHTML = `
  <div class='main-container'>
    <nav>
      <ol>
        <li>Home</li>
        <li>About</li>
        <li>Documentation</li>
        <li>Contact</li>
      </ol>
    </nav>
    <div class='tag'>
      <img src='icon.png' alt='icon' width='256' height='256'>
      <p>Paimon#7373</p>
    </div>
    <p></p>
    <h1>Welcome Traveler !</h1>
      <p>This is an unofficial bot, feel free to use it !!!</p>
      <div class='selector'>
        <button onclick="window.location.href='https://discord.com/api/oauth2/authorize?client_id=958796250671640636&permissions=251256097856&scope=bot';">Invite!</button>
        <button href=''>Command list</button>
      </div>
      <p id='link'>https://discord.com/api/oauth2/authorize?client_id=958796250671640636&permissions=251256097856&scope=bot</p>
  </div>
  <footer>
    <p>Maintained by RuruDev</p>
  </footer>
`
