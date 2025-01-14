const langElement = document.querySelector('.langElement')
const screen = document.querySelector('.screen')
const keys = document.querySelectorAll('.key')

let valueScreen = ''
let casplkStatus = false
let lang = 'En'

langElement.addEventListener('click', () => {
    if (lang == 'En') {
        keys.forEach(key => {
            if (key.hasAttribute('data-fa')) {
                key.innerText = key.dataset.fa
            }
        })
        lang = 'Fa'
        langElement.innerText = 'Fa'
    } else {
        keys.forEach(key => {
            if (key.hasAttribute('data-en')) {
                key.innerText = key.dataset.en
            }
        })
        lang = 'En'
        langElement.innerText = 'En'
    }
})

keys.forEach(key => {
    key.addEventListener('mousedown', e => {
        e.target.classList.add('scale-85')
    })

    key.addEventListener('mouseup', e => {
        e.target.classList.remove('scale-85')
    })

    key.addEventListener('click', e => {
        let text = e.target.innerText

        switch (text) {
            case 'ESC':
                valueScreen = ''
                break
            case 'clear':
                valueScreen = valueScreen.slice(0, valueScreen.length - 1)
                break
            case 'tab':
            case '______':
            case 'enter':
                valueScreen += ' '
                break
            case 'capsLock':
                if (!casplkStatus) {
                    e.target.children[0].classList.remove('bg-yellow-400')
                    e.target.children[0].classList.add('bg-red-500')
                } else {
                    e.target.children[0].classList.add('bg-yellow-400')
                    e.target.children[0].classList.remove('bg-red-500')
                }
                casplkStatus = !casplkStatus
                break
            case 'shift':
            case 'alt':
            case 'ctrl':
            case 'start':
            case 'menu':
            case 'F1':
            case 'F2':
            case 'F3':
            case 'F4':
            case 'F5':
            case 'F6':
            case 'F7':
            case 'F8':
            case 'F9':
            case 'F10':
            case 'F11':
            case 'F12':
                valueScreen += ''
                break
            case 'q':
                if (casplkStatus) valueScreen += 'Q'
                else valueScreen += 'q'
                break
            case 'w':
                if (casplkStatus) valueScreen += 'W'
                else valueScreen += 'w'
                break
            case 'e':
                if (casplkStatus) valueScreen += 'E'
                else valueScreen += 'e'
                break
            case 'r':
                if (casplkStatus) valueScreen += 'R'
                else valueScreen += 'r'
                break
            case 't':
                if (casplkStatus) valueScreen += 'T'
                else valueScreen += 't'
                break
            case 'y':
                if (casplkStatus) valueScreen += 'Y'
                else valueScreen += 'y'
                break
            case 'u':
                if (casplkStatus) valueScreen += 'U'
                else valueScreen += 'u'
                break
            case 'i':
                if (casplkStatus) valueScreen += 'I'
                else valueScreen += 'i'
                break
            case 'o':
                if (casplkStatus) valueScreen += 'O'
                else valueScreen += 'o'
                break
            case 'p':
                if (casplkStatus) valueScreen += 'P'
                else valueScreen += 'p'
                break
            case 'a':
                if (casplkStatus) valueScreen += 'A'
                else valueScreen += 'a'
                break
            case 's':
                if (casplkStatus) valueScreen += 'S'
                else valueScreen += 's'
                break
            case 'd':
                if (casplkStatus) valueScreen += 'D'
                else valueScreen += 'd'
                break
            case 'f':
                if (casplkStatus) valueScreen += 'F'
                else valueScreen += 'f'
                break
            case 'g':
                if (casplkStatus) valueScreen += 'G'
                else valueScreen += 'g'
                break
            case 'h':
                if (casplkStatus) valueScreen += 'H'
                else valueScreen += 'h'
                break
            case 'j':
                if (casplkStatus) valueScreen += 'J'
                else valueScreen += 'j'
                break
            case 'k':
                if (casplkStatus) valueScreen += 'K'
                else valueScreen += 'k'
                break
            case 'l':
                if (casplkStatus) valueScreen += 'L'
                else valueScreen += 'l'
                break
            case 'z':
                if (casplkStatus) valueScreen += 'Z'
                else valueScreen += 'z'
                break
            case 'x':
                if (casplkStatus) valueScreen += 'X'
                else valueScreen += 'x'
                break
            case 'v':
                if (casplkStatus) valueScreen += 'V'
                else valueScreen += 'v'
                break
            case 'c':
                if (casplkStatus) valueScreen += 'C'
                else valueScreen += 'c'
                break
            case 'b':
                if (casplkStatus) valueScreen += 'B'
                else valueScreen += 'b'
                break
            case 'n':
                if (casplkStatus) valueScreen += 'N'
                else valueScreen += 'n'
                break
            case 'm':
                if (casplkStatus) valueScreen += 'M'
                else valueScreen += 'm'
                break
            default:
                valueScreen += text
                break
        }

        screen.innerText = valueScreen
    })
})