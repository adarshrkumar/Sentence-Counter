setTimeout(function() {
  document.querySelector('#replit-badge').href = `${location.href}?locked=${true}`
}, 1)
if (top.location.href === location.href) {
  setTimeout(function() {
    document.querySelector('#replit-badge').href = '/__repl?utm_medium=webview_badge'
  }, 1)
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const l = !!urlParams.get('locked')
if (!!l) {
  document.querySelector('textarea').setAttribute('disabled', '')
  setTimeout(function() {
    document.querySelector('script[src="https://replit.com/public/js/replit-badge.js"]').remove()
    document.querySelectorAll('style')[document.querySelectorAll('style').length - 1].remove()
    document.querySelector('a#replit-badge').remove()
  }, 1)
}

