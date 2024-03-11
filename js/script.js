document.addEventListener("DOMContentLoaded", function() {
    const ongoingContainer = document.getElementById("ongoing")
    const completedContainer = document.getElementById("completedContent")
    const formContent = document.getElementById("formContent")
    const addTask = document.getElementById("addTask")
    

    formContent.addEventListener("submit", function(event) {
        event.preventDefault()
        completedContainer.innerHTML += (
            `<li>${addTask.value}</li>`
        )
    })
})