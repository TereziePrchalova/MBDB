import FormWrapper from "../buildingBlocks/FormWrapper";
import OptionInput from "../buildingBlocks/OptionInput";
import UseDefault from "../buildingBlocks/UseDefault";
import ComponentsPolymer from "./ComponentsPolymer";
import ComponentsChemical from "./ComponentsChemical";
import { getIn, useFormikContext } from "formik";
import ArrayField from "../buildingBlocks/ArrayField";

function Components( { name, colorSchema, molecularWeightColorSchema, colorSchemaWrapper, colorSchemaProtocol, tooltip } ) {

    const { values } = useFormikContext()

    const componentName = `${name}.components[0].type`
   
    UseDefault(values, componentName, 'polymer')

    const componentOptions = [
        { value: 'polymer', label: 'Polymer' },
        { value: 'chemical', label: 'Chemical' },
    ];

    return (
      <>
        <div>
            <ArrayField
                name={name}
                label="Component"
                fieldName='components'
                required={true}
                initialValue={{type: 'polymer'}}
                renderChild={({ arrayName, index }) => {
                    const actualValue = getIn(values, `${arrayName}.${index}`)
                    if (!actualValue) {return null}
                    return (
                    <FormWrapper headline={`Component ${index + 1}`} tooltipHeader={tooltip} colorSchema={colorSchema}>
                        <div className="mb-3">
                            <OptionInput
                                name={`${arrayName}.${index}`}
                                options={componentOptions}
                                label='type'
                                fieldName='type'
                                width='w-full'
                            />
                        </div>
                        <div>
                            {actualValue.type === 'polymer' && (
                                <div>
                                    <ComponentsPolymer
                                        name={`${arrayName}.${index}`}
                                        molecularWeightColorSchema={molecularWeightColorSchema}
                                        colorSchemaWrapper={colorSchemaWrapper}
                                        colorSchemaProtocol={colorSchemaProtocol}
                                    />
                                </div>
                            )}
                            {actualValue.type === 'chemical' && (
                                <div>
                                    <ComponentsChemical
                                        name={`${arrayName}.${index}`}
                                        molecularWeightColorSchema={molecularWeightColorSchema}
                                    />
                                </div>
                            )}
                        </div>
                    </FormWrapper>
                )}}
            />
        </div>
      </>
    );
  }
  
  export default Components;