import ButtonStyle from './Button.module.scss';

function Button(props) {

  const {text, action, name='name'} = props;

  return (
    <button name={name} onClick={action}>
      {text}
    </button>
  );
}

export default Button;