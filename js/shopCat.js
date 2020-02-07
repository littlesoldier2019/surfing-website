catContainer = document.querySelector('.eshopCat__container')
gridWrapper = document.querySelector('.eshopCat__grid')
gridDisplay = document.querySelector('.grid__display')
// displayBlock = document.querySelector('.display__block')
// blockImage = document.querySelector('.block__image')
// blockText = document.querySelector('.block__text')
// className = document.setAttribute('class', 'name')


const buildBlocks = () => {
    for (let i = 0; i < 12; i++) {
        displayBlock = document.createElement('div')
        blockImage = document.createElement('IMG')
        blockText = document.createElement('div')
        blockTextUp = document.createElement('p')
        blockTextDown = document.createElement('p')
        displayBlock.className = 'display__block'
        blockImage.setAttribute('src', 'https://via.placeholder.com/250x250')
        blockText.className = 'block__text'
        blockTextUp.textContent = 'sleeve spring suite'
        blockTextDown.textContent = '€864.00'

        displayBlock.appendChild(blockImage)
        displayBlock.appendChild(blockText)
        blockText.appendChild(blockTextUp)
        blockText.appendChild(blockTextDown)
        gridDisplay.appendChild(displayBlock)
        gridWrapper.appendChild(gridDisplay)
        catContainer.append(gridWrapper)
    }

}
buildBlocks()