let title = document.querySelector('title').innerText
let input = document.querySelector('textarea').value
document.querySelector('textarea').value = localStorage.getItem('text')
let didDo = false
function go(event) {
//  var x = event.keyCode;
  localStorage.setItem('text', document.querySelector('textarea').value)
  input = document.querySelector('textarea').value
  if (input.endsWith(' ') || input.endsWith('\n') || input.endsWith('\r') || input.endsWith('\t')) {
    input.slice(0, -1)
  } 
  var out = input.split('.')
  var arr = []
  out.forEach(function(o) {
    if (!o.includes('?') && !o.includes('!')) {
      arr.push(o)
    }
    if (o.includes('?') || o.includes('!')) {
      if (o.includes('?')) {
        o = o.split('?')
        o.forEach(function(o2) {
          if (!o2.includes('!')) {
            arr.push(o2)
          }
          if (o2.includes('!')) {
            o2 = o2.split('!')
            o2.forEach(function(o3) {
              arr.push(o3)
            })
          }
        })
      }
      if (o.includes('!')) {
        o = o.split('!')
        o.forEach(function(o2) {
          if (!o2.includes('?')) {
            arr.push(o2)
          }
          if (o2.includes('?')) {
            o2 = o2.split('?')
            o2.forEach(function(o3) {
              arr.push(o3)
            })
          }
        })
      }
    }
  })
  output = arr.length
  if (arr[arr.length-1] === '') {
    output--
  }
  if (input === 'clear()') {
    reset()
  }
  else if (input === 'reset()') {
    reset()
  }
  else if (input.startsWith('goToSite(') === true && input.endsWith(')') === true) {
    // let url = input.split('goToSite(')[1]
    if (Boolean(input.split("'")[1]) === true) {
      let url = input.split("'")[1]
      window.open(url)
      reset()
    }
    else if (Boolean(input.split('"')[1]) === true) {
      let url = input.split('"')[1]
      window.open(url)
      reset()
    }
    else if (Boolean(input.split('`')[1]) === true) {
      let url = input.split('`')[1]
      window.open(url)
      reset()
    }
  }
  var word
  if (output === 1) {
    if (input === '') {
      output = 0
    }
    else {
      word = ''
    }
  }
  else {
    word = 's'
  }
  if (didDo === true) {
    if (output === 0) {
      document.title = title
      didDo = false
    }
    else {
      document.title = title.split(' | ')[0] + ' | ' + output + ' Sentence' + word
    }
  }
  else if (didDo === false) {
    if (output !== 0) {
      document.title = title.split(' | ')[0] + ' | ' + output + ' Sentence' + word
      didDo = true
    }
  }
}

function reset() {
  localStorage.removeItem('text')
  document.querySelector('textarea').setAttribute('onkeydown','')
    document.querySelector('textarea').value = ''
}

go()