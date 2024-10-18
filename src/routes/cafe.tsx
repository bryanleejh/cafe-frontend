import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cafe")({
  component: CafeComponent,
});

function CafeComponent() {
  return (
    <div className="p-2">
      <h3>Cafe</h3>
    </div>
  );
}
