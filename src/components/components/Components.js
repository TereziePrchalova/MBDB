import FormWrapper from "../buildingBlocks/FormWrapper";
import UseDefault from "../buildingBlocks/UseDefault";
import ComponentsPolymer from "./ComponentsPolymer";
import ComponentsChemical from "./ComponentsChemical";
import { getIn, useFormikContext } from "formik";
import ArrayField from "../buildingBlocks/ArrayField";
import OptionField from "../buildingBlocks/OptionField";

function Components( { name, colorSchema, molecularWeightColorSchema, colorSchemaWrapper, colorSchemaProtocol, tooltip } ) {

    const { values } = useFormikContext()

    const componentName = `${name}.components[0].type`
   
    UseDefault(values, componentName, 'Polymer')

    const componentOptions = [
        { value: 'Polymer', label: 'Polymer' },
        { value: 'Chemical', label: 'Chemical' },
    ];

    return (
      <>
        <div>
            <ArrayField
                name={name}
                label="Component"
                fieldName='components'
                required={true}
                initialValue={{type: 'Polymer'}}
                renderChild={({ arrayName, index }) => {
                    const actualValue = getIn(values, `${arrayName}.${index}`)
                    if (!actualValue) {return null}
                    return (
                    <FormWrapper headline={`Component ${index + 1}`} tooltipHeader={tooltip} colorSchema={colorSchema}>
                        <div className="mb-3">
                            <OptionField
                                name={`${arrayName}.${index}`}
                                options={componentOptions}
                                label='type'
                                fieldName='type'
                                width='w-full'
                            />
                        </div>
                        <div>
                            {actualValue.type === 'Polymer' && (
                                <div>
                                    <ComponentsPolymer
                                        name={`${arrayName}.${index}`}
                                        molecularWeightColorSchema={molecularWeightColorSchema}
                                        colorSchemaWrapper={colorSchemaWrapper}
                                        colorSchemaProtocol={colorSchemaProtocol}
                                    />
                                </div>
                            )}
                            {actualValue.type === 'Chemical' && (
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