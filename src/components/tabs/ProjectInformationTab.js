import RecordInformation from "../projectInformation/RecordInformation";
import Depositors from "../projectInformation/Depositors";
import ArrayField from "../buildingBlocks/ArrayField";
import CustomField from "../buildingBlocks/CustomField";
import FormWrapper from "../buildingBlocks/FormWrapper";
import AssociatedPublication from "../projectInformation/AssociatedPublication";

function ProjectInformationTab( {name, values} ) {

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
                            tooltip='List of information about the grants that supported generation of the raw data annotated by this record. Note that this information is based on OpenAire Projects'
                        />
                    </FormWrapper>
                )}
            />
        </div>
        <div>
            <AssociatedPublication name={`${name}.associated_publication`} />
        </div>
      
    </>
  );
}

export default ProjectInformationTab;