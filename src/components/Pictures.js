import React, { useState, useEffect } from 'react'
import updateContentful from '../updateContentful.js'

const Pictures = () => {
  const { upload } = updateContentful()
  return <button onClick={() => upload()}>upload</button>
}
export default Pictures
