function FormWrapperRequired( { headline, children, colorSchema } ) {

  return (
    <>                    
        <div className={`${colorSchema === 'light' ? 'bg-white' : 'bg-primary' } p-4 rounded-2xl text-dark`}>
            <div className='font-JostMedium text-18px mb-2'>{headline}</div>
            {children}
        </div>
    </>
  );
}

export default FormWrapperRequired;