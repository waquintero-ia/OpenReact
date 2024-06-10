const Content = ({parts, index}) => {
    console.log('componente content exitoso') 
    return (
     <Part parts={parts} index={index}/>
    )
  }
  
  const Part = ({parts, index}) => {
    console.log('componente part exitoso')
    console.log(parts[index].parts)
    let partsName = parts[index].parts
    console.log(partsName);
    /*console.log('que sucede con parts...',parts.map(part[0] => part.parts));*/
    return (
      <>
        {partsName.map(partsName => 
          <p key={partsName.id}>{partsName.name} {partsName.exercises}</p>
        )}
      </>
    )
  }

  export default Content