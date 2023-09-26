const date = document.querySelector('.date')
const days = document.querySelector('.days')
const navegation = document.querySelectorAll('.navegation span')
const cc = document.querySelector('.cc')
const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
const workScale = localStorage.getItem('workScale')

let actualDate = new Date()
actualMonth = actualDate.getMonth()
actualYear = actualDate.getFullYear()

let firstDayofWork1 = new Date('2022-12-24 ')
let firstDayofWork2 = new Date('2022-12-26 ')
let firstDayofWork3 = new Date('2022-12-28 ')
let firstDayofWork4 = new Date('2022-12-30 ')

const workCicle = (firstDayofWork) => {
    let inicio = new Date(firstDayofWork)
    let endOfLoop = new Date('2025-12-31 ')
    let dayOff = []
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
const dayOff1 = workCicle(firstDayofWork1)
const dayOff2 = workCicle(firstDayofWork2)
const dayOff3 = workCicle(firstDayofWork3)
const dayOff4 = workCicle(firstDayofWork4)


const renderCalendar = (dayOff) => {
    let previousMonth = []
    for (let i = 0; i < dayOff.length; i++) {
        dayOff[i].getMonth() === actualMonth-1 && dayOff[i].getFullYear() === actualYear ? previousMonth.push(dayOff[i].getDate()) : ''
    }
    let thisMonth = []
    for (let i = 0; i < dayOff.length; i++) {
        dayOff[i].getMonth() === actualMonth && dayOff[i].getFullYear() === actualYear ? thisMonth.push(dayOff[i].getDate()) : ''
    }
    let nextMonth = []
    for (let i = 0; i < dayOff.length; i++) {
        dayOff[i].getMonth() === actualMonth+1 && dayOff[i].getFullYear() === actualYear? nextMonth.push(dayOff[i].getDate()) : ''
    }
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

const renderCalendar2 = () => {
    const getDaysPreviousMonth = (dayOff) => {
        let previousMonth = []
        for (let i = 0; i < dayOff.length; i++) {
            dayOff[i].getMonth() === actualMonth-1 && dayOff[i].getFullYear() === actualYear ? previousMonth.push(dayOff[i].getDate()) : ''
        }
        return previousMonth
    }
    const previousMonth1 = getDaysPreviousMonth(dayOff1)
    const previousMonth2 = getDaysPreviousMonth(dayOff2)
    const previousMonth3 = getDaysPreviousMonth(dayOff3)
    const previousMonth4 = getDaysPreviousMonth(dayOff4)
    
    const getThisMonthDays = (dayOff) => {
        let thisMonth = []
        for (let i = 0; i < dayOff.length; i++) {
            dayOff[i].getMonth() === actualMonth && dayOff[i].getFullYear() === actualYear ? thisMonth.push(dayOff[i].getDate()) : ''
        }
        return thisMonth
    }
    const thisMonth1 = getThisMonthDays(dayOff1)
    const thisMonth2 = getThisMonthDays(dayOff2)
    const thisMonth3 = getThisMonthDays(dayOff3)
    const thisMonth4 = getThisMonthDays(dayOff4)
    
    const getNextMonth = (dayOff) => {
        let nextMonth = []
        for (let i = 0; i < dayOff.length; i++) {
            dayOff[i].getMonth() === actualMonth+1 && dayOff[i].getFullYear() === actualYear? nextMonth.push(dayOff[i].getDate()) : ''
        }
        return nextMonth
    }
    const nextMonth1 = getNextMonth(dayOff1)
    const nextMonth2 = getNextMonth(dayOff2)
    const nextMonth3 = getNextMonth(dayOff3)
    const nextMonth4 = getNextMonth(dayOff4)

    let fistDayofMonth = new Date(actualYear, actualMonth, 1).getDay()
    let lastDayofMonth = new Date(actualYear, actualMonth+1, 0).getDate()
    let lastDayofLastMonth = new Date(actualYear, actualMonth, 0).getDate()
    let lastDateofMonth = new Date(actualYear, actualMonth, lastDayofMonth+1).getDay()
    let liDays = ''
    
    for (let i = fistDayofMonth; i > 0; i--) {
        let lastMonthDayOff = ''
        if (previousMonth1.includes(lastDayofLastMonth - i +1)) {
            lastMonthDayOff = `inactivate-next-month1`
        } else if(previousMonth2.includes(lastDayofLastMonth - i +1)) {
            lastMonthDayOff = `inactivate-next-month2`
        } else if(previousMonth3.includes(lastDayofLastMonth - i +1)) {
            lastMonthDayOff = `inactivate-next-month3`
        } else if(previousMonth4.includes(lastDayofLastMonth - i +1)) {
            lastMonthDayOff = `inactivate-next-month4`
        }
        liDays += `<li class='inactivate ${lastMonthDayOff}'>${lastDayofLastMonth - i +1}</li>`
        
    }

    
    for (let i = 1; i <= lastDayofMonth; i++) {
        let isDayOff = ''
        if (thisMonth1.includes(i)) {
            isDayOff =  `activate1`
        } else if(thisMonth2.includes(i)){
            isDayOff =  `activate2`
        } else if(thisMonth3.includes(i)){
            isDayOff =  `activate3`
        } else if(thisMonth4.includes(i)){
            isDayOff =  `activate4`
        }
        liDays += `<li class='${isDayOff}'>${i}</li>`
    }
        
    
    for (let i = lastDateofMonth; i < 7; i++) {
        let nextMonthDayOff = ''
        if (nextMonth1.includes(i - lastDateofMonth +1)) {
            nextMonthDayOff = `inactivate-next-month1`
        } else if(nextMonth2.includes(i - lastDateofMonth +1)) {
            nextMonthDayOff = `inactivate-next-month2`
        } else if(nextMonth3.includes(i - lastDateofMonth +1)) {
            nextMonthDayOff = `inactivate-next-month3`
        } else if(nextMonth4.includes(i - lastDateofMonth +1)) {
            nextMonthDayOff = `inactivate-next-month4`
        }
        liDays += `<li class='inactivate ${nextMonthDayOff}'>${i - lastDateofMonth +1}</li>`   
    }
    date.innerHTML = `${months[actualMonth]} ${actualYear}`
    days.innerHTML = `${liDays}`
    cc.innerHTML = `<div class="folga">
        <div class="square-folga1"></div>
        <p>Folga 1</p>
        </div>
        <div class="folga">
        <div class="square-folga2"></div>
        <p>Folga 2</p>
        </div>
        <div class="folga">
            <div class="square-folga3"></div>
            <p>Folga 3</p>
        </div>
        <div class="folga">
     <div class="square-folga4"></div>
     <p>Folga 4</p>
        </div>`
    
}

const getWorkScale = () => {
    if (workScale === '1') {
        renderCalendar(dayOff1)
    } else if (workScale === '2') {
        renderCalendar(dayOff2)
    } else if (workScale === '3') {
        renderCalendar(dayOff3)
    } else if (workScale === '4') {
        renderCalendar(dayOff4)
    } else {
        renderCalendar2()
    }
}
getWorkScale()

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
        getWorkScale()
    })
})


