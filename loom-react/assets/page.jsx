import React from "react";
import { OnPageLoaded } from "@link-loom/react-sdk";
import { TemplateManagerComponent } from "./manager/TemplateManager.component";

/**
 * Page Component
 * ROLE: Orchestration ONLY. No business logic.
 */
function TemplatePage() {
  return (
    <>
      <TemplateManagerComponent />
      <OnPageLoaded />
    </>
  );
}

export default TemplatePage;
