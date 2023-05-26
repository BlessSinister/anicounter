const num = document.querySelectorAll('.numbers span')
const counter = document.querySelector('.counter')
const final = document.querySelector('.final')
const replay = document.querySelector('#replay')

startAnimation()
function reset() {
  counter.classList.remove('hide')
  final.classList.remove('show')
  num.forEach((item) => {
    item.classList.value = ''
  })
  num[0].classList.add('in')
}

function startAnimation() {
  num.forEach((item, i) => {
    const nextToLast = num.length - 1
    item.addEventListener('animationend', (e) => {
      if (e.animationName === 'goIn' && i !== nextToLast) {
        item.classList.remove('in')
        item.classList.add('out')
      } else if (e.animationName === 'goOut' && item.nextElementSibling) {
        item.nextElementSibling.classList.add('in')
      } else {
        counter.classList.add('hide')
        final.classList.add('show')
      }
    })
  })
}

replay.addEventListener('click', () => {
  reset()
  runAnimation()
})
