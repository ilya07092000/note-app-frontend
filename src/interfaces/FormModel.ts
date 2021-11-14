export type ModelForm = IModelItem[];

export interface IModelItem {
  name: string;
  required?: boolean;
  rules?: Rule[];
  minLength?: number;
}

export type FormValidateResult = {
  values: Record<string, string>;
  errors: Record<string, string>
}

export type Rule = {
  pattern: RegExp
  msg: string;
};
