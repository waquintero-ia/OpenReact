const Total = ({total, index}) => {
    console.log('componente total exitoso')
    let partsExercises = total[index].parts
    console.log(partsExercises);
    let sum = partsExercises.map(partsExercises => partsExercises.exercises)
    console.log('la suma es...',sum);
    const totales = sum.reduce((s,p) => {
      console.log('what is happening...', s, p);
      return s + p
    })
   return ( 
      <>
        total of {totales} exercises
      </>
    )
  }

export default Total