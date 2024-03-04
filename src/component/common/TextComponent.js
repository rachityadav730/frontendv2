import React from 'react'

const TextComponent = ({heading,paragraph1,paragraph2}) => {
  return (
    <div>
        <h3>
            {heading}
        </h3>
         <p>
            {paragraph1}
        </p>
        <p>
            {paragraph2}
        </p>
    </div>
  )
}

export default TextComponent