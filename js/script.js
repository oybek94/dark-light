let theme = document.getElementById('theme-mode')
let n = 1;

function changeTheme() {
   if (n == 0) {
      theme.innerHTML = 'Dark Mode'
      document.documentElement.style.setProperty('--text-color', '#111517')
      document.documentElement.style.setProperty('--search-color', '#848484')
      document.documentElement.style.setProperty('--accent-color', '#ffffff')
      document.documentElement.style.setProperty('--background-color', '#F2F2F2')
      document.documentElement.style.setProperty('--navbar-shadow', '0px 2px 4px rgba(0, 0, 0, 0.0562443)')
      document.documentElement.style.setProperty('--input-shadow', '0px 2px 9px rgba(0, 0, 0, 0.0532439)')
      document.documentElement.style.setProperty('--card-shadow', '0px 0px 7px 2px rgba(0, 0, 0, 0.0294384)')
      n = 1
   } else {
      theme.innerHTML = 'Light Mode'
      document.documentElement.style.setProperty('--text-color', '#ffffff')
      document.documentElement.style.setProperty('--search-color', '#ffffff')
      document.documentElement.style.setProperty('--accent-color', '#2B3844')
      document.documentElement.style.setProperty('--background-color', '#202C36')
      document.documentElement.style.setProperty('--navbar-shadow', 'none')
      document.documentElement.style.setProperty('--input-shadow', 'none')
      document.documentElement.style.setProperty('--card-shadow', 'none')
      n = 0
   }
}
document.querySelector('.btn').addEventListener('click', () => {
   changeTheme()
})