import React from 'react';

export interface IHtmlComponentProps {
  dataLoaded: boolean;
  children: React.ReactNode;
}

export const HtmlComponent: React.FC<IHtmlComponentProps> = (props) => {
  const { dataLoaded, children } = props;

  if (!dataLoaded) {
    return null;
  }

  return <>{children}</>;
};
