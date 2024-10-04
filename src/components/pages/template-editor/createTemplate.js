import React, { useState } from "react";
import TemplateSidebar from "../../sidebar/templateSidebar";
import TemplateDesigner from "./TemplateDesigner";

const CreateTemplate = () => {
  return (
    <div className="template-creation-container">
      <TemplateSidebar />

      <TemplateDesigner />
    </div>
  );
};

export default CreateTemplate;
