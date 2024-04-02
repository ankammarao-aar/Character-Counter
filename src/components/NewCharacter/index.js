import {ListItem, Character} from './styledComponents'

const NewCharacter = props => {
  const {characterDetails} = props
  const {name, charLength} = characterDetails

  return (
    <ListItem>
      <Character>
        {name} : {charLength}
      </Character>
    </ListItem>
  )
}

export default NewCharacter
