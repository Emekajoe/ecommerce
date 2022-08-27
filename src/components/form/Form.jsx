import './Form.scss'
import {RiSearchLine} from 'react-icons/ri'
import {FiChevronDown} from 'react-icons/fi'

const Form = () => {
  return (
    <form action="" className="form">
      <div className="form__group">
        <RiSearchLine className="form__icon"/>
        <input value="fojj sneakers" type="text" className="form__input" />
        <div className="form__selection"><h4>category</h4> <FiChevronDown className="form__icon form__icon--down"/></div>
      </div>
    </form>
  );
};

export default Form;
