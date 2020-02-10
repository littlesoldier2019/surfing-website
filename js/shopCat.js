catContainer = document.querySelector('.eshopCat__container')
gridWrapper = document.querySelector('.eshopCat__grid')
gridDisplay = document.querySelector('.grid__display')
// displayBlock = document.querySelector('.display__block')
// blockImage = document.querySelector('.block__image')
// blockText = document.querySelector('.block__text')
// className = document.setAttribute('class', 'name')
let blocks = ''

const buildBlocks = (blocks) => {
    let i = blocks
    console.log(blocks)
    for (i = 0; i < 12; i++) {
        displayBlock = document.createElement('div')
        blockImage = document.createElement('IMG')
        blockText = document.createElement('div')
        blockTextUp = document.createElement('p')
        blockTextDown = document.createElement('p')
        displayBlock.className = 'display__block'
        blockImage.setAttribute('src', 'https://via.placeholder.com/200x200')
        blockText.className = 'block__text'
        blockTextUp.textContent = 'sleeve spring suite'
        blockTextDown.textContent = '€864.00'

        displayBlock.appendChild(blockImage)
        displayBlock.appendChild(blockText)
        blockText.appendChild(blockTextUp)
        blockText.appendChild(blockTextDown)
        gridDisplay.appendChild(displayBlock)
        console.log(blocks[2])
        for (j = 0; j < 2; j++) {
            blockTextDown.style.color = 'red'
        }
    }


}
buildBlocks(blocks)
console.log(buildBlocks(blocks))



// innerHTML version
/* 
let blocks = ''

const buildBlocks = () => {
    for (let i = 0; i < 12; i++) {
        blocks += `<div class = "display__block">
                        <div class="block__image">
                            <a href="https://placeholder.com"><img
                            src="https://via.placeholder.com/200" alt="square" class="image__inner"></a>
                        </div>
                        <div class="block__text">
                            <div class="text__desc">
                            <P>sleeve spring suite</P>
                            </div>
                            <div class="text__price">
                                <p>€864.00</p>
                            </div>
                        </div>

                    </div>`

    }
    gridDisplay.innerHTML = blocks
    console.log(div[1])
}
buildBlocks()
*/