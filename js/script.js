// PROGRESS BAR
const progressBar = document.getElementById('progress-bar')
window.addEventListener('scroll', () => {
    const total = document.documentElement.scrollHeight - window.innerHeight
    progressBar.style.width = (window.scrollY / total * 100) + '%'
})

// MENU MOBILE
const menuToggle = document.getElementById('menuToggle')
const menuUl = document.querySelector('#menu ul')
menuToggle.addEventListener('click', () => menuUl.classList.toggle('aberto'))
document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', () => menuUl.classList.remove('aberto'))
})

// REVEAL
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visivel')
            observer.unobserve(entry.target)
        }
    })
}, { threshold: 0.1 })
document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

// FAQ
document.querySelectorAll('.faq-pergunta').forEach(pergunta => {
    pergunta.addEventListener('click', () => {
        const item = pergunta.parentElement
        const ativo = item.classList.contains('ativo')
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('ativo'))
        if (!ativo) item.classList.add('ativo')
    })
})