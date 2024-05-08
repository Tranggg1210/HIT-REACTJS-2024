import React, { useContext } from 'react'
import { ThemeContext } from '../../App'

function Paragraph() {
  const {theme,handleToggleTheme} = useContext(ThemeContext);
  console.log(theme);
  return (
    <div className={theme ? "dark" : ""}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat culpa ex esse assumenda ad nisi. Dolor numquam soluta quasi corporis quam, unde mollitia culpa in totam ut, itaque, ea id?
        <button onClick={handleToggleTheme}>Toogle Theme</button>
    </div>
  )
}

export default Paragraph
