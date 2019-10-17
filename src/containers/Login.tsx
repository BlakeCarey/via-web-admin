import React from 'react';
import { withFormik, FormikProps, FormikErrors } from 'formik';
import * as yup from 'yup';

// components
import FormWrapper from 'components/Shared/Wrappers/FormWrapper';
import Text from 'components/Shared/Text';
import Button from 'components/Shared/Button';
import Input from 'components/Shared/Input';
import Form from 'components/Shared/Wrappers/Form';

// types
type LoginForm = {
    username: string;
    password: string;
};

type LoginProps = {
    submit: (values: LoginForm) => Promise<FormikErrors<LoginForm>> | null;
};

class Login extends React.PureComponent<FormikProps<LoginForm> & LoginProps> {
    render() {
        const { values, handleSubmit, handleChange, handleBlur, errors, touched } = this.props;

        return (
            <FormWrapper>
                <Form onSubmit={handleSubmit}>
                    <Text variant='h3'>
                        Sign In
                        <br />
                        <hr />
                    </Text>

                    <Input
                        variant='text'
                        name='username'
                        label='Email Address'
                        placeholder='example@domain.com'
                        onChange={handleChange}
                        valid={touched.username && !errors.username}
                        onBlur={handleBlur}
                        error={errors.username}
                        value={values.username}
                    />

                    <Input
                        name='password'
                        variant='password'
                        label='Password'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        valid={touched.password && !errors.password}
                        error={errors.password}
                        placeholder='Password'
                    />

                    <Button type='submit'>Login</Button>
                </Form>
            </FormWrapper>
        );
    }
}

// form validation schema
const validationSchema = yup.object().shape({
    username: yup
        .string()
        .min(3)
        .email('Not a valid email address')
        .required(),

    password: yup
        .string()
        .min(6)
        .required()
        .uppercase()
});

export default withFormik<LoginProps, LoginForm>({
    validationSchema,
    mapPropsToValues: () => ({ username: '', password: '' }),
    handleSubmit: async (values, { props, setErrors }) => {
        const errors = await props.submit(values);
        if (errors) {
            setErrors(errors);
        }
    }
})(Login);
