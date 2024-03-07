import ArrayField from "../buildingBlocks/ArrayField";
import Modification from "./Modification";
import FormWrapper from "../buildingBlocks/FormWrapper";

function Modifications( { name, colorSchemaWrapper, colorSchemaProtocol, colorSchemaHeadline } ) {

  return (
    <>
        <FormWrapper
            headline='Modifications'
            colorSchema={colorSchemaHeadline}
            tooltipHeader='If the polymer contains modifications such as non-natural aminoacids, post translational modification, or chemically modifications like labeling, it can be specified here'
        >
            <div className="-mt-3">
                <ArrayField
                    name={name}
                    label='Synthesis'
                    fieldName='synthesis'
                    tooltip='Modifications (e.g. non-natural amino acids) of the polymer made during synthesis (e.g. translation) of the polymer'
                    renderChild={({ arrayName, index }) => (
                        <FormWrapper
                            colorSchema={colorSchemaWrapper}
                            headline={`Synthesis ${index + 1}`}
                            tooltipHeader='Modifications (e.g. non-natural amino acids) of the polymer made during synthesis (e.g. translation) of the polymer'
                        >
                            <Modification
                                name={`${arrayName}.${index}`}
                                colorSchema={colorSchemaProtocol}
                            />
                        </FormWrapper>
                    )}
                />
            </div>
            <div>
                <ArrayField
                    name={name}
                    label='Biological postprocessing'
                    fieldName='biological_postprocessing'
                    tooltip='Modifications of the polymer made after synthesis (e.g. posttranslational modifications, DNA methylation) by the organism where synthesis occurred (e.g. glycosylation)'
                    renderChild={({ arrayName, index }) => (
                        <FormWrapper
                            colorSchema={colorSchemaWrapper}
                            headline={`Biological postprocessing ${index + 1}`}
                            tooltipHeader='Modifications of the polymer made after synthesis (e.g. posttranslational modifications, DNA methylation) by the organism where synthesis occurred (e.g. glycosylation)'
                        >
                            <Modification
                                name={`${arrayName}.${index}`}
                                colorSchema={colorSchemaProtocol}
                            />
                        </FormWrapper>
                    )}
                />
            </div>
            <div>
                <ArrayField
                    name={name}
                    label='Chemical'
                    fieldName='chemical'
                    tooltip='Modifications of the polymer introduced by chemical, biochemical, or physical means in vitro (e.g. lysine methylation, cysteine iodoacetamide labeling, deglycosylation, covalent fluorescent labeling)'
                    renderChild={({ arrayName, index }) => (
                        <FormWrapper
                            colorSchema={colorSchemaWrapper}
                            headline={`Chemical ${index + 1}`}
                            tooltipHeader='Modifications of the polymer introduced by chemical, biochemical, or physical means in vitro (e.g. lysine methylation, cysteine iodoacetamide labeling, deglycosylation, covalent fluorescent labeling)'
                        >
                            <Modification
                                name={`${arrayName}.${index}`}
                                colorSchema={colorSchemaProtocol}
                            />
                        </FormWrapper>
                    )}
                />
            </div>
        </FormWrapper>
    </>
  );
}

export default Modifications;