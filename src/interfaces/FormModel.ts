export type ModelForm = IModelItem[];

export interface IModelItem {
  name: string;
  required?: boolean;
}

export type FormValidateResult = {
  values: Record<string, string>;
  errors: Record<string, string>
}
