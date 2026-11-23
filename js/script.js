// BARRA DE PROGRESSO + HEADER
const progressBar = document.getElementById('progress-bar')
const header = document.getElementById('header')

function onScroll() {
    const total = document.documentElement.scrollHeight - window.innerHeight
    if (total > 0) progressBar.style.width = (window.scrollY / total * 100) + '%'
    header.classList.toggle('scrolled', window.scrollY > 10)
}
window.addEventListener('scroll', onScroll, { passive: true })
onScroll()

// MENU MOBILE
const menuToggle = document.getElementById('menuToggle')
const menuUl = document.querySelector('#menu ul')

function setMenu(aberto) {
    menuUl.classList.toggle('aberto', aberto)
    menuToggle.setAttribute('aria-expanded', aberto)
    menuToggle.querySelector('i').className = aberto ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}
menuToggle.addEventListener('click', () => setMenu(!menuUl.classList.contains('aberto')))
document.querySelectorAll('#menu a').forEach(link => link.addEventListener('click', () => setMenu(false)))
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false) })

// REVEAL
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visivel')
            observer.unobserve(entry.target)
        }
    })
}, { threshold: 0.08 })
document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

// FAQ
document.querySelectorAll('.faq-pergunta').forEach(pergunta => {
    pergunta.addEventListener('click', () => {
        const item = pergunta.parentElement
        const ativo = item.classList.contains('ativo')
        document.querySelectorAll('.faq-item').forEach(i => {
            i.classList.remove('ativo')
            i.querySelector('.faq-pergunta').setAttribute('aria-expanded', 'false')
        })
        if (!ativo) {
            item.classList.add('ativo')
            pergunta.setAttribute('aria-expanded', 'true')
        }
    })
})