const title = document.getElementById('title')
const date = document.getElementById('date')
const category = document.getElementById('category')
const desc = document.getElementById('desc')
const add = document.getElementById('add')
const clear = document.getElementById('clear')
const sample = document.getElementById('sample')
const cards = document.getElementById('cards')

let events = JSON.parse(localStorage.getItem('events')) || []

render()

add.onclick = () => {
  if (!title.value || !date.value || !category.value) {
  alert("Please fill all required fields")
  return
}


  events.push({
    id: Date.now(),
    title: title.value,
    date: date.value,
    category: category.value,
    desc: desc.value
  })

  save()
  reset()
  render()
}

sample.onclick = () => {
  events.push({
    id: Date.now(),
    title: 'Sample Event',
    date: '2026-02-09',
    category: 'Workshop',
    desc: 'This is a sample event description.'
  })

  save()
  render()
}

clear.onclick = () => {
  events = []
  save()
  render()
}

function render() {
  cards.innerHTML = ''

  events.forEach(e => {
    const div = document.createElement('div')
    div.className = 'card'

    div.innerHTML = `
      <h3>${e.title}</h3>
      <div class="date">🗓️ ${e.date}</div>
      <div class="badge">${e.category}</div>
      <p>${e.desc}</p>
      <button class="remove">×</button>
    `

    div.querySelector('.remove').onclick = () => {
      events = events.filter(x => x.id !== e.id)
      save()
      render()
    }

    cards.appendChild(div)
  })
}

function save() {
  localStorage.setItem('events', JSON.stringify(events))
}

function resetForm() {
  title.value = ""
  date.value = ""
  category.value = ""
  desc.value = ""
}
