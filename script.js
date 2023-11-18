const wrapper = document.querySelector('.wrapper')
const signUpLink = document.querySelector('.signUp-link')
const signInLink = document.querySelector('.signIn-link')
const toggleLink = document.querySelector('.toggle-link')
const passwordRecover = document.querySelector('.passwordRecover-link')
const close = document.querySelector('.close')

signInLink.addEventListener('click', ()=>{
    wrapper.classList.toggle('show-sign')
})

signUpLink.addEventListener('click', ()=>{
    wrapper.classList.toggle('show-sign')
})

toggleLink.addEventListener('click', ()=>{
    toggleLink.classList.toggle('active')
})

passwordRecover.addEventListener('click', ()=>{
    wrapper.classList.toggle('active')
})