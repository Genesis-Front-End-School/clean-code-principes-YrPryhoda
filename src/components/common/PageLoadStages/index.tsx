import React from "react";

import { ErrorHandler } from "../ErrorHandler";
import { PageLayout } from "../PageLayout";
import { Spinner } from "../Spinner";

interface IProps {
  loading: boolean;
  error: string | null;
}

export const PageLoadStages = ({ loading, error }: IProps) => {
  if (loading) {
    return (
      <PageLayout>
        <Spinner />
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout>
        <ErrorHandler errMessage={error} />
      </PageLayout>
    );
  }
	
  return (
    <PageLayout>
      <h6>There is nothing found here</h6>
    </PageLayout>
  );
};
