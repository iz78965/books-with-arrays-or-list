export const books = [
    {
        title: "this is the thet title of the book",
        aurthur: "Naseem",
        img: "./logo192.png",
        id: 1,
    },
    {
        title: "this is the thet title of the second book",
        aurthur: "Ibrahim",
        img: "./logo192.png",
        id: 2,
        
    }
]
const Book = (props) => {

    const {title,img,aurthur} = props.book;
    console.log(props)
    return(
    <article className='book'>
        <img src={img} alt={title} />
        <h3>{title}</h3>
        <h3>{aurthur}</h3>
    </article>



)
}


export default Book;