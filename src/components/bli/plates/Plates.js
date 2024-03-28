import CustomField from "../../buildingBlocks/CustomField";
import OptionField from "../../buildingBlocks/OptionField";
import ArrayField from "../../buildingBlocks/ArrayField";
import Supplier from "../sharedComponents/Supplier";
import SurfaceModification from "./SurfaceModification";

function Plates( { name } ) {

    const wellsOptions = [
        { value: '96', label: '96' },
        { value: '384', label: '384' },
    ];

  return (
    <>
        <div className="mb-3">
            <CustomField
                name={name}
                fieldName='name'
                label='Name'
                tooltip='Name (id) of the plate which must be unique within a record'
                width='w-full'
            />
        </div>
        <div className="flex mb-3">
            <div className="mr-3">
                <OptionField
                    name={name}
                    label='Wells'
                    fieldName='wells'
                    options={wellsOptions}
                    tooltip='Number of wells in the plate'
                />
            </div>
            <div className="mr-3">
                <CustomField
                    name={name}
                    fieldName='type'
                    label='Type'
                    tooltip='The type of the plate'
                />
            </div>
            <div className="-mt-3">
                <ArrayField
                    name={name}
                    label='Sealing'
                    fieldName='sealing'
                    maxItems={1}
                    tooltip='The type of sealing used to seal the top of the plate'
                    renderChild={({ arrayName, index }) => (
                        <CustomField
                            name={`${arrayName}.${index}`}
                            label='Sealing'
                            tooltip='The type of sealing used to seal the top of the plate'
                        />
                    )}
                />
            </div>
        </div>
        <div>
            <Supplier
                name={`${name}.supplier`}
                colorSchema='light'
            />
        </div>
        <div>
            <ArrayField
                name={name}
                label='Surface modification'
                fieldName='surface_modification'
                tooltip='The type of sealing used to seal the top of the plate'
                renderChild={({ arrayName, index }) => (
                    <SurfaceModification
                        name={`${arrayName}.${index}`}
                        colorSchema='light'
                    />
                )}
            />
        </div>
    </>
  );
}

export default Plates;