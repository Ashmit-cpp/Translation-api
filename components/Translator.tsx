import React from "react";
import { Textarea } from "./ui/textarea";
import { ComboboxForm } from "./ui/langselect";
import { Button } from "@/components/ui/button"



function Translator() {
  return (
    <div>
      <div className="p-4">
        <ComboboxForm />
      </div>

      <div className="flex p-2">
        <div className="w-1/2 p-2">
          <Textarea placeholder="Input" className="border p-2 w-full h-32" />
          <Button className="p-4 mt-4" >Translate Text</Button>
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
