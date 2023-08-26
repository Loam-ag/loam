export interface ToggleButtonProps {
  label: string;
  selected: boolean;
}

export interface NavbarSelectProps {
  label: string;
  options: string[];
  maxWidth?: string;
}

export interface TableProps {
  data: any;
}

export interface MethodologyType {
  MethodologyID: string;
  MethodologyName: string;
  MethodologyVersion: string;
  MethodologyHostedURL: string;
  HasModules: boolean;
  HasTools: boolean;
}

export interface MethodologyTypeArray extends Array<MethodologyType> {}
