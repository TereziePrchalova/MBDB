import ArrayField from "../buildingBlocks/ArrayField";
import Modification from "./Modification";
import FormWrapper from "../buildingBlocks/FormWrapper";

function Modifications( { name, values } ) {

  return (
    <>
        <div>
            <ArrayField
                name={name}
                values={values}
                label='Synthesis'
                fieldName='synthesis'
                renderChild={({ arrayName, index }) => (
                    <FormWrapper
                        colorSchema='light'
                        headline={`Synthesis ${index + 1}`}
                        tooltipHeader='Modifications (e.g. non-natural amino acids) of the polymer made during synthesis (e.g. translation) of the polymer'
                    >
                        <Modification
                            name={`${arrayName}.${index}`}
                            values={values}
                        />
                    </FormWrapper>
                )}
            />
        </div>
        <div>
            <ArrayField
                name={name}
                values={values}
                label='Biological postprocessing'
                fieldName='biological_postprocessing'
                renderChild={({ arrayName, index }) => (
                    <FormWrapper
                        colorSchema='light'
                        headline={`Biological postprocessing ${index + 1}`}
                        tooltipHeader='Modifications of the polymer made after synthesis (e.g. posttranslational modifications, DNA methylation) by the organism where synthesis occurred (e.g. glycosylation)'
                    >
                        <Modification
                            name={`${arrayName}.${index}`}
                            values={values}
                        />
                    </FormWrapper>
                )}
            />
        </div>
        <div>
            <ArrayField
                name={name}
                values={values}
                label='Chemical'
                fieldName='chemical'
                renderChild={({ arrayName, index }) => (
                    <FormWrapper
                        colorSchema='light'
                        headline={`Chemical ${index + 1}`}
                        tooltipHeader='Modifications of the polymer introduced by chemical, biochemical, or physical means in vitro (e.g. lysine methylation, cysteine iodoacetamide labeling, deglycosylation, covalent fluorescent labeling)'
                    >
                        <Modification
                            name={`${arrayName}.${index}`}
                            values={values}
                        />
                    </FormWrapper>
                )}
            />
        </div>
    </>
  );
}

export default Modifications;