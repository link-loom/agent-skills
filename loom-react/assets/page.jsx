import React from "react";
import { OnPageLoaded } from "@link-loom/react-sdk";
import { TemplateManagerComponent } from "./manager/TemplateManager.component";

/**
 * Page Component
 * ROLE: Orchestration ONLY. No business logic.
 */
function TemplatePage() {
  // Hooks
  const { setPageName } = useOutletContext();

  // Models
  // ...

  // UI states
  // ...

  // Configs
  // ...

  // Component Functions
  useEffect(() => {
    setPageName('Page Title');
  }, []);

  return (
    <>
      <TemplateManagerComponent />
      <OnPageLoaded />
    </>
  );
}

export default TemplatePage;
