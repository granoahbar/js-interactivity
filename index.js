console.log('Hello World!')

// grab html element 

const inputField = document.querySelector('input')

//write function

const addMovie = (event) => {

    event.preventDefault()

    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movie.appendChild(movieTitle)
    movieTitle.addEventListener('click', crossOffMovie)

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)

    document.querySelector ('ul').appendChild(movie)
    inputField.value = ''
}


const crossOffMovie = (event) => {
    event.target.classlist.toggle('.checked')
}

const deleteMovie= (event) => {
    event.target.parentNode.remove()
}

document.querySelector('form').addEventListener('submit', addMovie)


