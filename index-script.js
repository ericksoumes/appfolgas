const confirmBtn = document.getElementById('btn')

confirmBtn.addEventListener("click", function(){
    const firstDayofWork = document.getElementById('start')
    const firstDayofWorkValue = firstDayofWork.value
    localStorage.setItem('firstDayofWork', firstDayofWorkValue)
    window.location.href='calendario.html'
})