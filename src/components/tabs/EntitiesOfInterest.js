import EntitiesOfInterest from "../sectionComponents/EntitiesOfInterest";
import FormWrapper from "../buildingBlocks/FormWrapper";
import Chemical from "../components/Chemical";
import Polymer from "../components/Polymer";

function EntitiesOfInterestTab( { name, values} ) {

    return (
      <>
        <div>
            <div>
                <EntitiesOfInterest 
                    name={name}
                    values={values}
                    label="Entity of interest"
                    fieldName='entities_of_interest'
                    renderChild={({ arrayName, index }) => (
                        <FormWrapper headline={`Entity of interest ${index + 1}`}>
                            <Polymer
                                name={`${arrayName}.${index}`}
                                values={values}
                                fieldName='entities_of_interest'
                            />
                        </FormWrapper>
                    )}
                />
            </div>
        </div>
      </>
    );
  }
  
  export default EntitiesOfInterestTab;