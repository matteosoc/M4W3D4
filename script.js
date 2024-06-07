const url = "https://jsonplaceholder.typicode.com/users"
var arrayUsers = []

document.addEventListener("DOMContentLoaded", async () => {
    console.log("inizio caricamento pagina")

    const response = await fetch(url)
    const list = await response.json()

    arrayUsers = list
    showList()

    console.log("fine caricamento fetch")
})

function showList() {
    const tableContainer = document.createElement('table')
    tableContainer.setAttribute("class","table")

    const thead = document.createElement('thead')
    tableContainer.appendChild(thead)

    document.getElementById("divTable").appendChild(tableContainer)

    const tr = document.createElement('tr')
    thead.appendChild(tr)

    tr.innerHTML =  "<th scope='col'>ID</th><th scope='col'>NAME</th><th scope='col'>EMAIL</th><th scope='col'>USERNAME</th>"

    const tbody = document.createElement('tbody')
    tableContainer.appendChild(tbody)

    arrayUsers.forEach(element => {
        const trBody = document.createElement('tr')
        trBody.setAttribute("id", "" + element.id + "")
        tbody.appendChild(trBody)

        trBody.innerHTML = "<th scope='row'>"+ element.id + "</th>"

        const tdName = document.createElement('td')
        tdName.innerHTML = "<td>"+ element.name + "</td>"
        trBody.appendChild(tdName)

        const tdEmail = document.createElement('td')
        tdEmail.innerHTML = "<td>"+ element.email + "</td>"
        trBody.appendChild(tdEmail)

        const tdUsername = document.createElement('td')
        tdUsername.innerHTML = "<td>"+ element.username + "</td>"
        trBody.appendChild(tdUsername)
    })
}

function searchStart() {
    let searchValue = document.getElementById("searchBar").value
    console.log(searchValue)

    let selectValue = document.getElementById("searchFilter").value
    console.log(selectValue)

    let selectString = selectValue.toString()

    arrayUsers.forEach((element) => {
        let idNumber = element["id"].toString()
        console.log(idNumber)

        if (element[selectString].includes(searchValue)) {
            document.getElementById("" + idNumber + "").style.display = 'table-row'
            console.log("mostralo")
           // showDiv.style.display = "block"
        } else {
            document.getElementById("" + idNumber + "").style.display = 'none'
            console.log("non mostrarlo")
            //hideDiv.style.display = "none"
        }
    })

}