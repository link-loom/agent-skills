import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

/* Components */
import { TemplateEditComponent } from "./edit/TemplateEdit.component";
import { TemplatePreviewComponent } from "./preview/TemplatePreview.component";

export function TemplateManagerComponent({ isPopupContext = false }) {
  // Hooks
  // ...

  // Models
  // ...
  const [currentEntity, setCurrentEntity] = useState(null);

  // UI states
  // ...
  const [isEditMode, setIsEditMode] = useState(false);

  // Configs
  // ...

  // Component Functions

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
