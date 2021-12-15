
function getAll() {
    axios.get('/person?age=26')
        .then(result => {
            document.querySelector('#box')
                .innerHTML = JSON.stringify(result.data)
        })
}

document.querySelector('#getList')
    .onclick = () => {
        getAll()
    }

document.querySelector('#addPerson')
    .onclick = () => {
        const values = {
            "firstName": "vv",
            "lastName": "ouzan",
            "age": 26,
            "city": "Jerusalem",
            "eyeColor": "blue"
        }
        axios.post('/person', values)
            .then(result => {
                getAll()
            })
    }