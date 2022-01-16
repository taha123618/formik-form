import { useFormik } from 'formik'
import * as Yup from 'yup'

const Form = () => {
    const formik = useFormik({
        //  user Schemea 
        initialValues: {
            username: "",
            email: "",
            password: "",
            satus: "",
            singlur: ""
        },
        validationSchema: Yup.object({
            username: Yup.string().max(20,
                "Dont use large")
                .required('this required field'),
            email: Yup.string()
                .email("Plz provide validte Email"),
            password: Yup.string()
                .min(10, "Password should minimum contained 8 digits")
                .required('this required field')
        }),
        onSubmit: (values) => {
            console.log("form submitted", values);
        }

    })

    //  console.log(formik.touched);

    return (
        <>
            <div className="container mt-5">
                <form onSubmit={formik.handleSubmit}>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="name"
                            name="username"
                            onChange={formik.handleChange}
                            value={formik.values.username}
                            // bhar-click na kre 
                            onBlur={formik.handleBlur}
                            class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    {/* error show  */}
                    {
                        formik.touched.username &&
                        formik.errors.username &&
                        <p style={{ color: 'red' }}>{formik.errors.username}</p>
                    }

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email"
                            name="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                            class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    {
                        formik.touched.email &&
                        formik.errors.email &&
                        <p style={{ color: 'red' }}>{formik.errors.email}</p>
                    }

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password"
                            name="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            onBlur={formik.handleBlur}
                            class="form-control" id="exampleInputPassword1" />
                    </div>
                    {
                        formik.touched.password &&
                        formik.errors.password &&
                        <p style={{ color: 'red' }}>{formik.errors.password}</p>
                    }

                    <div class="mb-3 form-check">
                        <input type="checkbox"
                            onChange={formik.handleChange}
                            value={formik.values.satus}
                            onBlur={formik.handleBlur}
                            class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Single</label>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox"
                            onChange={formik.handleChange}
                            value={formik.values.singlur}
                            onBlur={formik.handleBlur}
                            class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Maried</label>
                    </div>
                    <br />
                    <button type="submit" class="btn-primary mt-4">
                        Submit</button>
                </form>
            </div>
        </>
    )
}

export default Form
