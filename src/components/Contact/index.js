import { reduxForm, Field } from 'redux-form';

const validate = values => {
    const errors = {}
    console.log(values,'values')
   
    if (!values.username) {
        errors.username = 'Required'
      } else if (values.username.length < 5) {
        errors.username = 'Must be 15 characters or less'
      }
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if (!values.age) {
      errors.age = 'Required'
    } else if (isNaN(Number(values.age))) {
      errors.age = 'Must be a number'
    } else if (Number(values.age) < 18) {
      errors.age = 'Sorry, you must be at least 18 years old'
    }
    console.log(errors,'error')
    return errors
  }

  const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

function ContactForm(props) {
//   const { handleSubmit } = props;
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      {/* <div>
        <label htmlFor="name">Name</label>
        <Field name="name" component="input" type="text" />
      </div> */}
      <div>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
      />
      </div>
      <div>
      <Field name="email" type="email" component={renderField} label="Email" />
      </div>
      <div>
      <Field name="age" type="number" component={renderField} label="Age" />
      </div>
      {/* <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div> */}
      <button type="submit">Submit</button>
    </form>
  );
}

ContactForm = reduxForm({
  form: 'contact',
  validate
})(ContactForm);

export default ContactForm;