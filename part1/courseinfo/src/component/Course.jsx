import Header from "./Header"
import Content from "./Content"
import Total from "./Total"  
  
const Course = ({courses}) => {

    return(
    <>
        <Header course={courses} index={0}/>
        <Content parts={courses} index={0}/>
        <Total total={courses} index={0}/>
        <Header course={courses} index={1}/>
        <Content parts={courses} index={1}/>
        <Total total={courses} index={1}/>
    </> 
    )

}

export default Course