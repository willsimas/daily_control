document.addEventListener("DOMContentLoaded", function() {
    const ongoingContainer = document.getElementById("ongoing")
    const completedContainer = document.getElementById("completedContent")
    const formContent = document.getElementById("formContent")
    const addTask = document.getElementById("addTask")

    const btnDelete = document.getElementById("btn_delete")
    const btnFinish = document.getElementById("btn_finish")
    
    formContent.addEventListener("submit", function(event) {
        event.preventDefault()
        ongoingContainer.innerHTML += (
            `<li>${addTask.value} <button id="btn_delete">EXCLUIR</button><button id="btn_finish">FINALIZAR</button></li>`
        )
    })

    if(btnDelete) {
        
    }
})