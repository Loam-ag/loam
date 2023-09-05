import { Table } from '@tanstack/react-table';

export interface ToggleButtonProps {
  label: string;
  selected: boolean;
}

export interface NavbarSelectProps {
  label: string;
  options: string[];
  maxWidth?: string;
}

export interface MethodologyType {
  MethodologyID: string;
  MethodologyName: string;
  MethodologyVersion: string;
  MethodologyHostedURL: string;
  HasModules: boolean;
  HasTools: boolean;
}

export interface InnerTableProps {
  table: Table<MethodologyType>;
}

export interface TableProps {
  data: Array<MethodologyType>;
}

export interface HeaderCellProps {
  header: any;
  desc: boolean | undefined;
  style?: string;
}
export interface CellProps {
  data: string;
  fileIcon?: boolean;
  downloadIcon?: boolean;
  align?: string;
  link?: string;
}

export interface DownloadProps {
  link: string;
}

export type SortDirection = 'asc' | 'desc';
