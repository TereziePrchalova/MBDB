import { Formik } from "formik";
import ComponentA from "../components/buildingBlocks/ComponentA";
import ComponentB from "../components/buildingBlocks/ComponentB";
import MyProvider from "../components/buildingBlocks/MyProvider";

function Test( { name, values } ) {

  return (
    <>
        <MyProvider>
            <Formik
            initialValues={{
                "general_parameters": {
                  "schema_version": "0.9.18",
                  "technique": "Microscale thermophoresis/Temperature related intensity change (MST/TRIC)",
                  "record_information": {
                    "publisher": "MBDB",
                    "resource_type_general": "Dataset",
                    "resource_type": "MST",
                    "deposition_date": new Date(),
                    "date_available": new Date(),
                    "subject_category": "Biophysics",
                  },
                }
              }}
              onSubmit={values => 
                setTimeout(() => {
                  console.log(values)
                  alert(JSON.stringify(values, null, 2));
                }, 500)
              }
              >
              {( { values } ) => (
                <div className="mt-4">
                    <ComponentA />
                    <ComponentB />
                    <button className="fixed top-0 right-0 p-3 m-4 bg-primary rounded-lg" type="submit">Submit</button>
                </div>
                 )}
            </Formik>
        </MyProvider>
    </>
  );
}

export default Test;