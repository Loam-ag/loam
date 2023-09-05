import FileIcon from '../icons/FileIcon';
import { DownloadIcon } from './icons/DownloadIcon';
import { CellProps as Props } from './types';
import React, { FC } from 'react';

export const Cell: FC<Props> = ({
  data,
  fileIcon,
  downloadIcon,
  align,
  link
}) => {
  let display: string | JSX.Element = data;
  const url = link ? link : '';
  if (fileIcon) {
    display = <FileIcon />;
  } else if (downloadIcon) {
    display = <DownloadIcon link={url} />;
  }
  return <div className={`my-2 py-1 ${align}`}>{display}</div>;
};
