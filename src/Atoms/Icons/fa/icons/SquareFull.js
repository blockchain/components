
  import React from 'react'
  import withStyle from '../../withStyle'

  const SquareFull = () => (
    <React.Fragment>
      <path d="M512 512H0V0h512v512z"/>
    </React.Fragment>
  )

  export default withStyle(SquareFull,512,512)
