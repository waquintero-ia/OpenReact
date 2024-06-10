const Header = ({course, index}) => {
    console.log('componente header exitoso')
    console.log(course[index].id)
    let titleCourse = course[index].name
    let idCourse = course[index].id 
    return (
      <>
        <h1 key={idCourse}>{titleCourse}</h1>
      </>
    )
  }

export default Header