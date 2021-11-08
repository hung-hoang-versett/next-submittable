import { DropdownListOption, Field } from "./type";
export const convertFormJsonSubmittableToReactForm = (fields: Field[]) => {
  const formatted = fields
    .filter((field) => {
      const { fieldType } = field;
      const validFields = [
        "title",
        "email",
        "dropdown_list",
        "divider",
        "short_answer",
        "date",
        "number",
        "multiple_response",
        "name",
        "text_only",
        "single_checkbox",
      ];
      if (validFields.includes(fieldType)) return true;
      console.log("fieldType", fieldType);
      return validFields.includes(fieldType);
    })
    .map((field) => {
      const { fieldType } = field;
      switch (fieldType) {
        case "name":
          return formatName(field);
        case "title":
          return formatTitle(field);
        case "email":
          return formatEmail(field);
        case "dropdown_list":
          return formatDropdown(field);
        case "divider":
          return formatDivider(field);
        case "short_answer":
          return formatSortAnswer(field);
        case "date":
          return formatDate(field);
        case "number":
          return formatNumber(field);
        case "multiple_response":
          return formatMultipleResponse(field);
        case "text_only":
          return formatTextOnly(field);
        case "single_checkbox":
          return formatSingleCheckbox(field);
        default:
          break;
      }
    });
  return formatted;
};

function formatTitle(field: Field) {
  return {
    // canHaveAlternateForm: true,
    // canHaveAnswer: true,
    // canHaveDisplayHorizontal: true,
    // canHaveOptionCorrect: true,
    // canHaveOptionValue: true,
    // canHavePageBreakBefore: true,
    // canPopulateFromApi: true,
    element: "TextInput",
    field_name: `text_input_${field.formFieldId}`,
    id: field.formFieldId,
    label: field.label,
    required: field.isRequired,
    text: "Text Input",
  };
}
function formatName(field: Field) {
  return {
    // canHaveAlternateForm: true,
    // canHaveAnswer: true,
    // canHaveDisplayHorizontal: true,
    // canHaveOptionCorrect: true,
    // canHaveOptionValue: true,
    // canHavePageBreakBefore: true,
    // canPopulateFromApi: true,
    element: "TextInput",
    field_name: `text_input_${field.formFieldId}`,
    id: field.formFieldId,
    label: field.label,
    required: field.isRequired,
    text: "Text Input",
  };
}
function formatEmail(field: Field) {
  return {
    // canHaveAlternateForm: true,
    // canHaveAnswer: true,
    // canHaveDisplayHorizontal: true,
    // canHaveOptionCorrect: true,
    // canHaveOptionValue: true,
    // canHavePageBreakBefore: true,
    // canPopulateFromApi: true,
    element: "TextInput",
    field_name: `text_input_${field.formFieldId}`,
    id: field.formFieldId,
    label: field.label,
    required: field.isRequired,
    text: "Text Input",
  };
}

function formatSortAnswer(field: Field) {
  return {
    // canHaveAlternateForm: true,
    // canHaveAnswer: true,
    // canHaveDisplayHorizontal: true,
    // canHaveOptionCorrect: true,
    // canHaveOptionValue: true,
    // canHavePageBreakBefore: true,
    // canPopulateFromApi: true,
    element: "TextInput",
    field_name: `text_input_${field.formFieldId}`,
    id: field.formFieldId,
    label: field.label,
    required: field.isRequired,
    text: "Text Input",
  };
}

function formatDropdown(field: Field) {
  const options = field.options
    ? field.options.map((option: DropdownListOption) => ({
        key: `dropdown_option_${option.formOptionId}`,
        text: option.label,
        value: option.label,
      }))
    : [];
  return {
    // canHaveAlternateForm: true,
    // canHaveAnswer: true,
    // canHaveDisplayHorizontal: true,
    // canHaveOptionCorrect: true,
    // canHaveOptionValue: true,
    // canHavePageBreakBefore: true,
    // canPopulateFromApi: true,
    element: "Dropdown",
    field_name: `dropdown_${field.formFieldId}`,
    id: field.formFieldId,
    label: field.label,
    options: options,
    required: field.isRequired,
    text: "Dropdown",
  };
}

function formatDivider(field: Field) {
  return {
    // bold: false,
    // canHaveAlternateForm: true,
    // canHaveDisplayHorizontal: true,
    // canHaveOptionCorrect: true,
    // canHaveOptionValue: true,
    // canHavePageBreakBefore: true,
    // canPopulateFromApi: true,
    element: "LineBreak",
    id: field.formFieldId,
    // italic: false,
    // required: false,
    // static: true,
    text: "Line Break",
  };
}

function formatDate(field: Field) {
  return {
    // canHaveAlternateForm: true,
    // canHaveDisplayHorizontal: true,
    // canHaveOptionCorrect: true,
    // canHaveOptionValue: true,
    // canHavePageBreakBefore: true,
    // canPopulateFromApi: true,
    dateFormat: "MM/dd/yyyy",
    defaultToday: false,
    element: "DatePicker",
    field_name: `date_picker_${field.formFieldId}`,
    id: field.formFieldId,
    label: field.label,
    readOnly: false,
    required: field.isRequired,
    showTimeSelect: false,
    showTimeSelectOnly: false,
    text: "Date",
    timeFormat: "hh:mm aa",
  };
}
function formatNumber(field: Field) {
  return {
    // canHaveAlternateForm: true,
    // canHaveAnswer: true,
    // canHaveDisplayHorizontal: true,
    // canHaveOptionCorrect: true,
    // canHaveOptionValue: true,
    // canHavePageBreakBefore: true,
    // canPopulateFromApi: true,
    element: "NumberInput",
    field_name: `number_input_${field.formFieldId}`,
    id: field.formFieldId,
    label: field.label,
    required: field.isRequired,
    text: "Number Input",
  };
}

function formatMultipleResponse(field: Field) {
  const options = field.options
    ? field.options.map((option: DropdownListOption) => ({
        key: `dropdown_option_${option.formOptionId}`,
        text: option.label,
        value: option.label,
      }))
    : [];
  return {
    // canHaveAlternateForm: true,
    // canHaveAnswer: true,
    // canHaveDisplayHorizontal: true,
    // canHaveOptionCorrect: true,
    // canHaveOptionValue: true,
    // canHavePageBreakBefore: true,
    // canPopulateFromApi: true,
    // dirty: false,
    element: "Checkboxes",
    field_name: `checkboxes_${field.formFieldId}`,
    id: field.formFieldId,
    label: field.label,
    options,
    required: field.isRequired,
    text: "Checkboxes",
  };
}
function formatTextOnly(field: Field) {
  return {
    bold: false,
    // canHaveAlternateForm: true,
    // canHaveDisplayHorizontal: true,
    // canHaveOptionCorrect: true,
    // canHaveOptionValue: true,
    // canHavePageBreakBefore: true,
    // canPopulateFromApi: true,
    custom: true,
    custom_options: [],
    element: "CustomElement",
    field_name: `text_only_${field.formFieldId}`,
    id: field.formFieldId,
    italic: false,
    key: "TextOnly",
    label: field.label,
    required: field.isRequired,
    static: true,
    text: "Text Only",
    textBlock: field.textBlock ? JSON.parse(field.textBlock) : {},
  };
}
function formatSingleCheckbox(field: Field) {
  return {
    bold: false,
    // canHaveAlternateForm: true,
    // canHaveDisplayHorizontal: true,
    // canHaveOptionCorrect: true,
    // canHaveOptionValue: true,
    // canHavePageBreakBefore: true,
    // canPopulateFromApi: true,
    element: "CustomElement",
    field_name: `single_checkbox_${field.formFieldId}`,
    id: field.formFieldId,
    key: "SingleCheckbox",
    label: field.label,
    required: field.isRequired,
    text: "Single checkbox",
    bare: true,
  };
}
