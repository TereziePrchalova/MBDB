import { Formik, Form } from "formik";
import Atmosphere from "../components/subSectionComponents/Atmosphere"

function MstMy() {

  return (
    <>
      <Formik
        initialValues={{}}
        onSubmit={async (values) => {
          console.log(values)
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {() => (
          <div className="flex justify-center">
            <Form className="m-4">
                <Atmosphere name='atmosphere' />
                <button className="p-3 mt-2 w-full bg-primary rounded-xl" type="submit">Submit</button>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
}

export default MstMy;
