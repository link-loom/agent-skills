import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

/* Components */
import { TemplateEditComponent } from "./edit/TemplateEdit.component";
import { TemplatePreviewComponent } from "./preview/TemplatePreview.component";

export function TemplateManagerComponent(props) {
  const { isPopupContext = false } = props;
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentEntity, setCurrentEntity] = useState(null);

  const handleUpdate = (updatedEntity) => {
    setCurrentEntity(updatedEntity);
    setIsEditMode(false);
  };

  return (
    <>
      {isEditMode ? (
        <TemplateEditComponent
          entitySelected={currentEntity}
          onUpdatedEntity={handleUpdate}
          setIsOpen={setIsEditMode}
          isPopupContext={isPopupContext}
        />
      ) : (
        <TemplatePreviewComponent
          entitySelected={currentEntity}
          setIsOpen={setIsEditMode}
          isPopupContext={isPopupContext}
        />
      )}
    </>
  );
}
