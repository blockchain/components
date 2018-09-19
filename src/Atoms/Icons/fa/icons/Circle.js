
  import React from 'react'
  import withStyle from '../../withStyle'

  const Circle = () => (
    <React.Fragment>
      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"/>
    </React.Fragment>
  )

  export default withStyle(Circle,512,512)
