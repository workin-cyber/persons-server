let arr = []

function getAll() {
    axios.get('/person')
        .then(result => {
            arr = result.data
            render()
        })
}
getAll()

function render() {
    document.querySelector('#list').innerHTML =
        arr.map(p => `<li>
        <strong>${p.firstName} ${p.lastName}</strong>
        <div class="details">
            <div>
                <span>${p.age}</span>
                <span>${p.city}</span>
            </div>
            <div>
                <div class="car-color" style="background-color: ${p.eyeColor};"></div>
            </div>
        </div>
    </li>`).join('')
}

document.querySelector('form')
    .onsubmit = (event) => {
        event.preventDefault()

    }