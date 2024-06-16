const Notification = ({ message, typeMessage }) => {

  const notificationSuccesfullStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }

    if (message === null) {
      return null
    }
  
      if(typeMessage === 'succesfull'){
        return (
          <div style={notificationSuccesfullStyle}>
            {message}
          </div>
        )
      }

      if(typeMessage === 'error'){
        return (
          <div className="error">
            {message}
          </div>
        )
      }
  }

  export default Notification