const confirmBtn = document.getElementById('btn')

confirmBtn.addEventListener("click", function(){
    const workScaleElement = document.getElementById('folgas-lista')
    const workScale = workScaleElement.value
    localStorage.setItem('workScale', workScale)
    window.location.href='calendario.html'
})