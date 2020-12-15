const Form = ({id, type, caption, value, onChange, ...rest}) => {

  return(
  <form className= "form">
  <label>    
      <label>{caption}</label>
      <input type={type} name={id}  value={value} onChange={onChange} {...rest}></input>
  </label>
  </form>
  );
}

export default Form;
