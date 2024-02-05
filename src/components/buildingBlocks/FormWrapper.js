function FormWrapper( { headline, children, colorSchema } ) {

return (
  <>                    
      <div className={`${colorSchema === 'light' ? 'bg-white' : 'bg-primary' } p-3 rounded-lg text-dark`}>
        {headline ?
          <div className='font-JostMedium text-18px mb-2'>{headline}</div>
          :
          ''
        }
          {children}
      </div>  
  </>
);
}

export default FormWrapper;