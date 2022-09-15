import EmptyPlaceholderStyle from '../EmptyPlaceholder/EmptyPlaceholder.module.scss'

function EmptyPlaceholder({text}) {
  return (
    <div className={EmptyPlaceholderStyle.text}> 
      {text}
    </div>
  );
}

export default EmptyPlaceholder;