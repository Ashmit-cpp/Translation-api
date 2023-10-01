import React from "react";

function Welcome() {
  return (
    <div className="p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          A Top-Tier Translator from LangBridge
        </h1>
        <h2 className="text-2xl font-semibold mb-4">
          What you can do with this online translator
        </h2>
      </div>
      <div className="mx-auto max-w-3xl">
        <div className="grid grid-cols-2 gap-4">
          {" "}
          {/* Adjust gap here */}
          <ul className="custom-list-bg p-4 list-disc">
            <li>Translate longer texts</li>
            <li>Use a translator without ads</li>
          </ul>
          <ul className="custom-list-bg p-4 list-disc">
            <li>Enjoy completely free translation</li>
            <li>Translate online without downloading an app</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
