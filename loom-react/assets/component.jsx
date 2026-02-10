import React, { useEffect, useState } from "react";
import {
  fetchEntityCollection,
  fetchMultipleEntities,
} from "@services/utils/entityServiceAdapter";

export function TemplateListComponent({ prop1 }) {
  // Hooks
  // ...

  // Models
  // ...
  const [entities, setEntities] = useState([]);

  // UI states
  // ...
  const [loading, setLoading] = useState(true);

  // Configs
  // ...

  // Component Functions

  // 1. Entry Point
  const initializeComponent = async () => {
    setLoading(true);
    // Use adapter for data fetching
    const [response] = await fetchMultipleEntities([
      {
        service: MyService,
        payload: { queryselector: "all", page: 1, pageSize: 10 },
      },
    ]);

    if (response?.success) {
      setEntities(response.result?.items || []);
    }
    setLoading(false);
  };

  // 2. Event Handler / Communication Contract
  const itemOnAction = (action, entity) => {
    switch (action) {
      case "edit":
        // Handle edit logic
        break;
      case "delete":
        // Handle delete logic
        break;
      default:
        console.warn("Unknown action:", action);
        break;
    }
  };

  useEffect(() => {
    initializeComponent();
  }, []);

  return (
    <section className="container-fluid my-4 px-4">
      <div className="row">
        <div className="col-12">
          {/* Render List */}
          {entities.map((entity) => (
            <div key={entity.id} onClick={() => itemOnAction("edit", entity)}>
              {entity.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
