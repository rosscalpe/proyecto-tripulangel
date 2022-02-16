const $headerMenu = document.querySelector('.burguer-menu')
const $navBar = document.querySelector('.nav-bar > ul');
const $tituloTripu = document.querySelector('.titulo-tripu')

$headerMenu.addEventListener('click', () => {
    $navBar.style.opacity = 1
    $tituloTripu.style.opacity = 0
})
$headerMenu.addEventListener('mouseout', () => {
    $navBar.style.opacity = 0
    $tituloTripu.style.opacity = 1
})
