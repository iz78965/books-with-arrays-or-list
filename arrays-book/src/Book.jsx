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
// first approach accessing directly in the component at the props place with the onjects properties with javascript
const Book = ({book:{title, aurthur, img}}) => {
// =========================starts==================
// const Book = (props) => {
// accessing all the properties that we want to render on the screen in online after the function approach
    // const {title,img,aurthur} = props.book;
    // =========================Ends==================
  
    // =========================starts==================
    // spread operator approach, we remove the referance of the array of the object
    // const {title,img,aurthur} = props;
    // console.log(props)
    return(
    <article className='book'>
        <img src={img} alt={title} />
        <h3>{title}</h3>
        <h3>{aurthur}</h3>
    </article>



)
}


export default Book;