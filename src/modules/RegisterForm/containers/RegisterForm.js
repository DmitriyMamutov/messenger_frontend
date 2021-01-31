import RegisterForm from '../components/RegisterForm'
import {withFormik} from 'formik'
export default withFormik({
    //если map to vales есть
    // вытащи из компонента предыдущие пропсы
    // и пропыши email: ''
    mapPropsToValues: (props) => ({ email: '' }),
  
    // Custom sync validation
    validate: values => {

      let errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
          values.email
        )
      ) {
        errors.email = 'Invalid email address';
      }
      if(!values.password){
          errors.password = 'Введите пароль'
      }else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(values.password)){
        errors.password = 'слишко простой пароль'

      }

      return errors;
    },


  
    handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
    },
  
    displayName: 'RegisterForm'
  })(RegisterForm);