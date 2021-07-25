// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

function Box({className='', ...otherProps}) {
  return (
    <div className={`box ${className}`} style={{fontStyle: 'italic'}} {...otherProps}>
      
    </div>
  )
}


// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
const smallBox = <Box style={{backgroundColor: 'lightblue'}} className="box box--small">small lightblue box</Box>
const mediumBox = <Box style={{backgroundColor: 'pink'}} className="box box--medium">medium pink box</Box>
const largeBox = <Box style={{backgroundColor: 'orange'}} className="box box--large">large orange box</Box>
/**
 * wKode
 */
function App() {
  return (
    <div>
      {smallBox  }
      {mediumBox }
      {largeBox }
    </div>
  )
}
/**
 * wKode
 */

export default App
