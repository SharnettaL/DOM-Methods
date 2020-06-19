const bodyElement = document.querySelector('body')
const buttonElement = document.createElement('button')

bodyElement.append(buttonElement)
buttonElement.append('Remove Content!')

const mainElement = document.createElement('main')
bodyElement.append(mainElement)
  
const imageElement = document.createElement('img')
imageElement.className = 'image'
imageElement.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fwww.middleeastmonitor.com%2Fwp-content%2Fuploads%2Fimages%2Farticle_images%2Fnews%2Fdiamonds-2.jpg%3Fresize%3D1200%252C800%26quality%3D75%26strip%3Dall%26ssl%3D1&f=1&nofb=1'
mainElement.append(imageElement)

const linkElement = document.createElement('a')
linkElement.className = 'link'
linkElement.href = 'https://www.diamonds.pro/education/how-diamonds-are-formed/'
mainElement.append(linkElement)
linkElement.append('How to form DIAMONDS')


buttonElement.addEventListener('click', function(){
    mainElement.remove(imageElement)
    
})


