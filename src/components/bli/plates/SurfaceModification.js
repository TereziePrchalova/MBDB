import ArrayField from "../../buildingBlocks/ArrayField";
import CustomField from "../../buildingBlocks/CustomField";
import FormWrapper from "../../buildingBlocks/FormWrapper";
import Protocol from "../../buildingBlocks/Protocol";
import UseDefault from "../../buildingBlocks/UseDefault";

function SurfaceModification( { name, colorSchema } ) {

    const fieldName = 'protocol'

    UseDefault(`${name}.${fieldName}`, [{}] );

  return (
    <>
        <FormWrapper
            headline='Surface modification'
            colorSchema={colorSchema}
            tooltip='The type of sealing used to seal the top of the plate'
        >
            <div>
                <CustomField
                    name={name}
                    label='Type'
                    fieldName='type'
                    tooltip='The expected type of surface of the wells after the modification (e.g. BSA coated)'
                />
            </div>
            <div className="mr-3">
                <ArrayField
                    name={name}
                    required={true}
                    label='Protocol'
                    fieldName={fieldName}
                    tooltip='List of protocol steps used to modify the surface of the wells'
                    renderChild={({ arrayName, index }) => (
                        <FormWrapper
                            headline={`Protocol ${index + 1}`}
                            tooltip='List of protocol steps used to modify the surface of the wells'
                        >
                            <Protocol
                                name={`${arrayName}.${index}`}
                            />
                        </FormWrapper>
                    )}
                />
            </div>
        </FormWrapper>
    </>
  );
}

export default SurfaceModification;