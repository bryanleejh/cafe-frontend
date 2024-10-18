import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/employee")({
  component: EmployeeComponent,
});

function EmployeeComponent() {
  return (
    <div className="p-2">
      <h3>Employee</h3>
    </div>
  );
}
