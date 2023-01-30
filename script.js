const date = document.querySelector('.date')
const days = document.querySelector('.days')
const navegation = document.querySelectorAll('.navegation span')
const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
const workScale = localStorage.getItem('workScale')

const discoverfirstDay = () => {
    let firstDay = new Date()
    if (workScale === '1') {
        firstDay = new Date('2023-01-01 ')
    } else if (workScale === '2') {
        firstDay = new Date('2023-01-03 ')
    } else if (workScale === '3') {
        firstDay = new Date('2023-01-05 ')
    } else if (workScale === '4') {
        firstDay = new Date('2023-01-07 ')
    }
    return firstDay
}
let firstDayofWork = discoverfirstDay()
console.log(firstDayofWork)


const workCicle = () => {
    let inicio = new Date(firstDayofWork)
    let endOfLoop = new Date('2023-12-31 ')
    console.log(inicio)
    let dayOff = []
    console.log(endOfLoop)
    while(inicio < endOfLoop){
        for (let i = 1; i <= 5; i++) {
            inicio.setDate(inicio.getDate()+1)
        }
        inicio.setDate(inicio.getDate()+1)
        dayOff.push(new Date(inicio))
        inicio.setDate(inicio.getDate()+1)
        dayOff.push(new Date(inicio))
        inicio.setDate(inicio.getDate()+1)
    }
    return dayOff
}
const dayOff = workCicle()
let actualDate = new Date()
actualMonth = actualDate.getMonth()
actualYear = actualDate.getFullYear()

const renderCalendar = () => {
    let previousMonth = []
    for (let i = 0; i < dayOff.length; i++) {
        dayOff[i].getMonth() === actualMonth-1 && dayOff[i].getFullYear() === actualYear ? previousMonth.push(dayOff[i].getDate()) : ''
    }
    console.log(previousMonth)
    let thisMonth = []
    for (let i = 0; i < dayOff.length; i++) {
        dayOff[i].getMonth() === actualMonth && dayOff[i].getFullYear() === actualYear ? thisMonth.push(dayOff[i].getDate()) : ''
    }
    console.log(thisMonth)
    let nextMonth = []
    for (let i = 0; i < dayOff.length; i++) {
        dayOff[i].getMonth() === actualMonth+1 && dayOff[i].getFullYear() === actualYear? nextMonth.push(dayOff[i].getDate()) : ''
    }
    console.log(nextMonth)
    let fistDayofMonth = new Date(actualYear, actualMonth, 1).getDay()
    let lastDayofMonth = new Date(actualYear, actualMonth+1, 0).getDate()
    let lastDayofLastMonth = new Date(actualYear, actualMonth, 0).getDate()
    let lastDateofMonth = new Date(actualYear, actualMonth, lastDayofMonth+1).getDay()
    let liDays = ''
    for (let i = fistDayofMonth; i > 0; i--) {
        let lastMonthDayOff = previousMonth.includes(lastDayofLastMonth - i +1) ? `inactivate-next-month${workScale}` : ''
        liDays += `<li class='inactivate ${lastMonthDayOff}'>${lastDayofLastMonth - i +1}</li>`
    }
    for (let i = 1; i <= lastDayofMonth; i++) {
        let isDayOff = thisMonth.includes(i) ? `activate${workScale}` : ''
        liDays += `<li class='${isDayOff}'>${i}</li>`
    }
    for (let i = lastDateofMonth; i < 7; i++) {
        let nextMonthDayOff = nextMonth.includes(i - lastDateofMonth +1) ? `inactivate-next-month${workScale}` : ''
        liDays += `<li class='inactivate ${nextMonthDayOff}'>${i - lastDateofMonth +1}</li>`
        
    }
    date.innerHTML = `${months[actualMonth]} ${actualYear}`
    days.innerHTML = `${liDays}`
    
}

renderCalendar()

navegation.forEach(icon=>{
    icon.addEventListener('click', () => {
        actualMonth = icon.id === 'before' ? actualMonth -1 : actualMonth +1

        if(actualMonth < 0 || actualYear > 11){
            actualDate = new Date(actualYear, actualMonth)
            actualYear = actualDate.getFullYear()
            actualMonth = actualDate.getMonth()
        } else {
            actualDate = new Date()
        }
        renderCalendar()
    })
})


