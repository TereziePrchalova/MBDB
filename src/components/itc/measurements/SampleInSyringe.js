import ArrayField from "../../buildingBlocks/ArrayField";
import FormWrapper from "../../buildingBlocks/FormWrapper";
import { useFormikContext } from "formik";
import OptionField from "../../buildingBlocks/OptionField";
import { getIn } from "formik";
import CreateOptions from "../../buildingBlocks/CreateOptions";
import UseDefault from "../../buildingBlocks/UseDefault";
import Protocol from "../../sharedComponents/Protocol";
import EntityAndConcentration from "../../sharedComponents/EntityAndConcentration";

function SampleInSyringe( { name, colorSchema } ) {

    const { values } = useFormikContext();
    UseDefault(`${name}.targets`, [{}]);

    const chemicalEnvironmentsValue = getIn(values, `metadata.general_parameters.chemical_environments`);
    const chemicalEnvironmentsOptions = CreateOptions(chemicalEnvironmentsValue, 'Select Chemical environment, if applicable');

  return (
    <>
        <FormWrapper
            headline='Sample in syringe'
            colorSchema={colorSchema}
            tooltip='Composition of the solution in the syringe including targets and chemical environment'
        >
            <div className="flex">
                <div>
                    <OptionField
                        name={name}
                        label='Chemical environment'
                        fieldName='chemical_environment'
                        options={chemicalEnvironmentsOptions}
                        tooltip='Name (id) of the chemical environment of the sample (from the chemical environments defined in the general parameters'
                    />
                </div>
            </div>
            <div>
                <ArrayField
                    name={name}
                    label='Preparational protocol'
                    fieldName='preparational_protocol'
                    tooltip='List of steps taken to prepare the sample, ending at the point where it was placed in the measurement container. Information include operations like filtration and which filter material and pore-size was used should be added'
                    renderChild={({ arrayName, index }) => (
                        <FormWrapper
                            headline={`Preparational protocol ${index + 1}`}
                            tooltip='List of steps taken to prepare the sample, ending at the point where it was placed in the measurement container. Information include operations like filtration and which filter material and pore-size was used should be added'
                        >
                            <Protocol
                                name={`${arrayName}.${index}`}
                            />
                        </FormWrapper>
                    )}
                />
            </div>
            <div>
                <ArrayField
                    name={name}
                    label='Target'
                    fieldName='targets'
                    required={true}
                    tooltip='List of names (ids), from the entities of interest defined in the general parameters, of directly measured entities'
                    renderChild={({ arrayName, index }) => (
                        <FormWrapper
                            headline={`Target ${index + 1}`}
                            tooltip='List of names (ids), from the entities of interest defined in the general parameters, of directly measured entities'
                        >
                            <EntityAndConcentration
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

export default SampleInSyringe;