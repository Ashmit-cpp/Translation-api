import React from "react";
import { Textarea } from "./ui/textarea";
import { ComboboxForm } from "./ui/langselect";

function Translator() {
  return (
    <div>
      <div className="p-4">
        <ComboboxForm />
      </div>

      <div className="flex p-2">
        <div className="w-1/2 p-2">
          <Textarea placeholder="Input" className="border p-2 w-full h-32" />
        </div>

        <div className="w-1/2 p-2">
          <Textarea
            placeholder="Output"
            className="border p-2 w-full h-32"
            readOnly
          />
        </div>
      </div>
    </div>
  );
}

export default Translator;
