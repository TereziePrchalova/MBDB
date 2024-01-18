import { Field } from "formik";

function FormWrapper( { headline, children, colorSchema } ) {

  return (
    <>                    
        <div className={`${colorSchema === 'light' ? 'bg-white' : ' bg-primary' } p-3 rounded-2xl text-dark`}>
            <div className="flex mb-2">
                <div className='mr-2 font-JostMedium text-18px'>{headline}</div>
                <label className="mt-[0.1rem]">
                    <Field className='mr-1' type="checkbox" name="data_not_provided" />
                    Not available
                </label>
            </div>
            {children}
        </div>
    </>
  );
}

export default FormWrapper;