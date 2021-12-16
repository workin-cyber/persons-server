function getAll() {
    axios.get('/person')
        .then(result => render(result.data))
}
getAll()

function render(arr) {
    document.querySelector('#list').innerHTML =
        arr.map(p => `<li>
        <strong>${p.firstName} ${p.lastName}</strong>
        <div class="details">
            <div>
                <span>${p.age}</span>
                <span>${p.city}</span>
            </div>
            <div>
            <div class='eyes'>
                <i class="far fa-eye" style="color: ${p.eyeColor};"></i>
                <i class="far fa-eye" style="color: ${p.eyeColor};"></i>
            </div>
            </div>
        </div>
    </li>`).join('')
}

document.querySelector('form')
    .onsubmit = (event) => {
        event.preventDefault()
        addPerson(getAllValues(event.target))
        form.reset()
    }

function getAllValues(form) {
    return Object.values(form)
        .reduce((acc, curr) => {
            let { value, name } = curr
            return name ? { ...acc, [name]: value } : acc
        }, {})
}

function addPerson(values) {
    axios.post('/person', values)
        .then(() => getAll())
}




/*document.querySelector('form')
    .onsubmit = (event) => {
        event.preventDefault()
        const form = event.target

        const valuesArr = Object.values(form)

        const valuesObj = {}

        valuesArr.forEach(inp => {
            const { value, name } = inp
            if (name) valuesObj[name] = value
        })
        console.log(valuesObj)
    }*/
