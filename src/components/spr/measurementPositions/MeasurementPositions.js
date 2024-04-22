import CustomField from "../../buildingBlocks/CustomField";
import ArrayField from "../../buildingBlocks/ArrayField";
import LigandInformation from "../../sharedComponents/LigandInformation";

function MeasurementPositions( { name } ) {

  return (
    <>
        <div className="mb-3">
            <CustomField
                name={name}
                fieldName='name'
                label='Name'
                tooltip='Name of the measurement spot'
                width='w-full'
            />
        </div>
        <div className="flex mb-3">
            <div className="mr-3">
                <CustomField
                    name={name}
                    fieldName='flow_cell'
                    label='Flow cell'
                    tooltip='The flow cell where the measurement spot is located'
                />
            </div>
            <div className="-mt-3 mr-5">
                <ArrayField
                    name={name}
                    fieldName='position'
                    label='Position'
                    maxItems={1}
                    tooltip='Position of the measurement spot within the flow cell'
                    renderChild={({ arrayName, index }) => (
                        <CustomField
                            name={`${arrayName}.${index}`}
                            label='Position'
                            tooltip='Position of the measurement spot within the flow cell'
                        />
                    )}
                />
            </div>
        </div>
        <div>
            <ArrayField
                name={name}
                label='Ligand information'
                fieldName='ligand_information'
                maxItems={1}
                tooltip='Information about the ligand and how it was immobilized'
                renderChild={({ arrayName, index }) => (
                    <LigandInformation
                        name={`${arrayName}.${index}`}
                        colorSchema='light'
                    />
                )}
            />
        </div>
    </>
  );
}

export default MeasurementPositions;