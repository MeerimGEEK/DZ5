const numbers = [2,3,4,5,44,44,34,2,3,4,5,6,7,7,6,5,4,3,8,7,8,7,5,6,4,5]
const sortNum = numbers.filter((number, index) =>{
    return numbers.indexOf(number) === index
})

console.log(sortNum)

//book

function filterBookU(books) {
    const booksWithLetterU = books.filter(book => book.toLowerCase().includes('у'))
    const booksWithoutLetterU = books.filter(book => !book.toLowerCase().includes('у'))
    const booksWithText = booksWithLetterU.map(book => `${book} - книга с буквой 'y'`)

    console.log("книга с буквой 'у':")
    booksWithText.forEach(book => console.log(book))

    console.log("\n остальные книги ")
    booksWithoutLetterU.forEach(book => console.log(book))
}

const booksArray = [
    'Гарри Потер',
    'Думай и богатей' ,
    'Гордость и предубеждение',
    '48 законов власти',
    'Дневник будущего',
    'Война и мир'

]

filterBookU(booksArray)


