import React, { useCallback } from "react";

import { Button, EnumButtonStyle } from "@amplication/design-system";

import { useTracking, Event as TrackEvent } from "../util/analytics";
import OverviewSecondaryTile from "./OverviewSecondaryTile";
import { useHistory } from "react-router-dom";

const EVENT_DATA: TrackEvent = {
  eventName: "viewCodeViewTileClick",
};

type Props = {
  resourceId: string;
};
function ViewCodeViewTile({ resourceId }: Props) {
  const { trackEvent } = useTracking();
  const history = useHistory();

  const handleClick = useCallback(
    (event) => {
      trackEvent(EVENT_DATA);
      history.push(`/${resourceId}/code-view`);
    },
    [history, trackEvent, resourceId]
  );

  return (
    <OverviewSecondaryTile
      icon="code"
      title="Code View"
      message="Amplication generates the code automatically, but if you want to check out what’s under the hood, view the generated code from the Amplication console."
      footer={
        <Button
          buttonStyle={EnumButtonStyle.Secondary}
          type="button"
          onClick={handleClick}
        >
          View code
        </Button>
      }
    />
  );
}

export default ViewCodeViewTile;
