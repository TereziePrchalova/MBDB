import FormWrapper from "../buildingBlocks/FormWrapper";
import ComponentsPolymer from "./ComponentsPolymer";
import ComponentsChemical from "./ComponentsChemical";
import { getIn, useFormikContext } from "formik";
import ArrayField from "../buildingBlocks/ArrayField";
import OptionField from "../buildingBlocks/OptionField";

function Components( { name, colorSchema, molecularWeightColorSchema, colorSchemaWrapper, colorSchemaProtocol, colorSchemaHeadline, tooltip } ) {

    const { values } = useFormikContext()

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
                                        colorSchemaHeadline={colorSchemaHeadline}
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