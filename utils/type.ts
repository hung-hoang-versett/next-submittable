export interface DropdownListOption {
  customAutoLabel: string;
  formOptionId: string;
  isEligible: boolean;
  label: string;
}
export interface Field {
  additionalInstructions?: string;
  fieldType: string;
  formFieldId: string;
  isRequired: boolean;
  label: string;
  countLimit?: number;
  countType?: string;
  specialValidation?: number;
  options?: any[];
  textBlock?: string;
}
