import Instrument from "./components/Instrument";
import EntitiesOfInterest from "./sectionComponents/EntitiesOfInterest";
import RecordInformation from "./sectionComponents/RecordInformation";
import Depositors from "./sectionComponents/Depositors";
import ArrayField from "./buildingBlocks/ArrayField";
import FormWrapper from "./buildingBlocks/FormWrapper";
import CustomField from "./buildingBlocks/CustomField";
import Chemical from "./components/Chemical";

function GeneralParameters( { name, values } ) {


  return (
    <>
      <div className="mb-2">
        <RecordInformation name={`${name}.record_information`} />
      </div>
      <div className="mb-2">
        <Depositors name={`${name}.depositors`} values={values} />
      </div>
      <div className="mb-2">
        <ArrayField
              name={name}
              values={values}
              label='Funding reference'
              fieldName='funding_reference'
              renderChild={({ name, index }) => (
                  <FormWrapper headline={`Funding reference ${index + 1}`}>
                      <CustomField
                          name={name}
                          index={index}
                          label='funding reference'
                          fieldName='funding_reference'
                      />
                  </FormWrapper>
              )}
          />
      </div>
      <div className="mb-2">
        <EntitiesOfInterest 
          name={name}
          values={values}
          label="Entity of interest"
          fieldName='entities_of_interest'
          renderChild={({ arrayName, index }) => (
            <FormWrapper headline={`Entity of interest ${index + 1}`}>
                <Chemical 
                  name={`${arrayName}.${index}`}
                  values={values}
                  fieldName='entities_of_interest'
                />
            </FormWrapper>
        )}
        />
      </div>
      <div className="mb-2">
        <Instrument name={`${name}.instrument`}/>
      </div>
    </>
  );
}

export default GeneralParameters;
