import OptionInput from "../buildingBlocks/OptionInput";
import FormWrapper from "../buildingBlocks/FormWrapper";
import ArrayFieldOneElement from "../buildingBlocks/ArrayFieldOneElement";
import DataFitting from "./DataFitting";
import FColdAndHot from "./FColdAndHot";
import ArrayField from "../buildingBlocks/ArrayFieldSave";
import DataProcessingStep from "./DataProcessingStep";

function DataAnalysis( { name, values } ) {

    const resultOptions = [
        { value: 'currently_out_of_service', label: 'Currently out of service' },
    ];

  return (
    <>
        <div className='flex mb-3'>
          <div className="mr-3">
            <OptionInput
                name={name}
                options={resultOptions}
                label='Result'
                fieldName='result'
                tooltip='Link to the result(s) that was obtained by the data analysis. The link is to the results defined in the general parameters'
            />
          </div>
          <div>
            <OptionInput
                name={name}
                options={resultOptions}
                label='Measurement'
                fieldName='measurement'
                tooltip='List of the measurements that was analyzed together for a specific parameter'
            />
          </div>
        </div>
        <div className="mb-3">
            <ArrayFieldOneElement
                name={name}
                values={values}
                label='F cold and hot'
                fieldName='f_cold_and_hot'
                renderChild={({ arrayName, index }) => (
                    <FormWrapper
                        colorSchema='light'
                        headline={`F cold and hot`}
                        tooltipHeader='If the data was analyzed with time windows corresponding to fluorescence before and after an IR laser was heating the sample the edges of the time windows can be specified here'
                    >
                        <FColdAndHot
                            name={`${arrayName}.${index}`}
                            values={values}
                        />
                    </FormWrapper>
                )}
            />
        </div>
        <div className="mb-3">
            <ArrayFieldOneElement
                name={name}
                values={values}
                label='Data fitting'
                fieldName='data_fitting'
                renderChild={({ arrayName, index }) => (
                    <FormWrapper
                        colorSchema='light'
                        headline={`Data fitting`}
                        tooltipHeader='If the data was analyzed with time windows corresponding to fluorescence before and after an IR laser was heating the sample the edges of the time windows can be specified here'
                    >
                        <DataFitting
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
                label='Data processing step'
                fieldName='data_processing_step'
                renderChild={({ arrayName, index }) => (
                    <FormWrapper
                        colorSchema='light'
                        headline={`Data processing step ${index + 1}`}
                        tooltipHeader='Describe the steps in the data analysis prior to fitting (removing outliers in the raw data, applying smoothing filters, etc.)'
                    >
                        <DataProcessingStep
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

export default DataAnalysis;