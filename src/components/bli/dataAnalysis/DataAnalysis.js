import ArrayField from "../../buildingBlocks/ArrayField";
import OptionField from "../../buildingBlocks/OptionField";
import { getIn, useFormikContext } from "formik";
import DataFitting from "../../sharedComponents/DataFitting";
import FormWrapper from "../../buildingBlocks/FormWrapper";
import DataProcessingStep from "../../sharedComponents/DataProcessingStep";

function DataAnalysis( { name } ) {

    const { values } = useFormikContext();

    const resultValue = getIn(values, `metadata.general_parameters.results`);

    let resultOptions = [];

    if (resultValue && resultValue.length > 0) {
        resultOptions = resultValue.map(result => ({
            value: result.name,
            label: result.name
        }))
    } else {
        resultOptions = [{ label: 'Select Result, if applicable' }]
    }

    const measurementValue = getIn(values, `metadata.method_specific_parameters.measurements`)

    let measurementOptions = [];

    if (measurementValue && measurementValue.length > 0) {
        measurementOptions = measurementValue.map(measurement => ({
            value: measurement.name,
            label: measurement.name,
        }));
    } else {
        measurementOptions = [{ label: 'Select Measurement, if applicable' }];
    }

  return (
    <>
        <div className="flex">
            <div className="mr-3 -mt-3">
                <ArrayField
                    name={name}
                    label='Measurement'
                    fieldName='measurements'
                    tooltip='List of measurement links that was analyzed together'
                    renderChild={({ arrayName, index }) => (
                        <div className="-mr-6">
                            <OptionField
                                name={`${arrayName}.${index}`}
                                label={`Measurement ${index + 1}`}
                                options={measurementOptions}
                            />
                        </div>
                    )}
                />
            </div>
            <div className="-mt-3">
                <ArrayField
                    name={name}
                    label='Result'
                    fieldName='result'
                    maxItems={1}
                    renderChild={({ arrayName, index }) => (
                        <div className="-mr-6">
                            <OptionField
                                name={`${arrayName}.${index}`}
                                label='Result'
                                options={resultOptions}
                            />
                        </div>
                    )}
                />
            </div>
        </div>
        <div className="">
            <ArrayField
                name={name}
                label='Data fitting'
                fieldName='data_fitting'
                maxItems={1}
                tooltip='The details of how data fitting of the data to obtain the result was performed'
                renderChild={({ arrayName, index }) => (
                    <FormWrapper
                        colorSchema='light'
                        headline='Data fitting'
                        tooltipHeader='The details of how data fitting of the data to obtain the result was performed'
                    >
                        <DataFitting
                            name={`${arrayName}.${index}`}
                        />
                    </FormWrapper>
                )}
            />
        </div>
        <div>
            <ArrayField
                name={name}
                label='Data processing step'
                fieldName='data_processing_step'
                tooltip='Describe the steps in the data analysis prior to fitting (removing outliers in the raw data, applying data filter, placing data at same start time etc. )'
                renderChild={({ arrayName, index }) => (
                    <FormWrapper
                        colorSchema='light'
                        headline={`Data processing step ${index + 1}`}
                        tooltipHeader='Describe the steps in the data analysis prior to fitting (removing outliers in the raw data, applying data filter, placing data at same start time etc. )'
                    >
                        <DataProcessingStep
                            name={`${arrayName}.${index}`}
                        />
                    </FormWrapper>
                )}
            />
        </div>
    </>
  );
}

export default DataAnalysis;