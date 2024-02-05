import RecordInformation from "../sectionComponents/RecordInformation";
import Depositors from "../sectionComponents/Depositors";
import ArrayField from "../buildingBlocks/ArrayField";
import CustomField from "../buildingBlocks/CustomField";
import FormWrapper from "../buildingBlocks/FormWrapper";
import AssociatedPublication from "../components/AssociatedPublication";

function ProjectInformation( {name, values} ) {

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
        <div>
            <AssociatedPublication name={`${name}.associated_publication`} />
        </div>
      
    </>
  );
}

export default ProjectInformation;