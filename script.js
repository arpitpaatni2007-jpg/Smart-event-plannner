const title = document.getElementById('title')
const date = document.getElementById('date')
const category = document.getElementById('category')
const desc = document.getElementById('desc')
const add = document.getElementById('add')
const clear = document.getElementById('clear')
const sample = document.getElementById('sample')
const cards = document.getElementById('cards')

let events = []



render()

add.onclick = () => {
  if (!title.value || !date.value || !category.value) {
  alert("Please fill all required fields")
  return
}


  events.push({
    id: Date.now(),
    title: title.value.trim(),
    date: date.value,
    category: category.value,
    desc: desc.value.trim()
  })

  save()
  resetForm()
  render()
}

sample.onclick = () => {
  events.push({
    id: Date.now(),
    title: "Sample Workshop",
    date: "2026-02-10",
    category: "Workshop",
    desc: "This is a demo event added for preview."
  })

  save()
  render()
}


clear.onclick = () => {
  if (confirm("Are you sure you want to clear all events?")) {
    events = []
    save()
    render()
  }
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
     <p>${e.desc || "No description provided"}</p>
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

function save() {}
 

function resetForm() {
  title.value = ""
  date.value = ""
  category.value = ""
  desc.value = ""
}
