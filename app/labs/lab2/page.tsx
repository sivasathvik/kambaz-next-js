import "./index.css";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Padding from "./Padding";
import Margins from "./Margins";
import BoxModel from "./BoxModel";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Display from "./Display";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import MediaQueriesDemo from "./MediaQueriesDemo";
import ReactIconsSampler from "./ReactIconsSampler";

export default function Lab2() {
  return (
    <>
      <div id="wd-lab2">
        <h2>Lab 2 - Cascading Style Sheets</h2>
        <h3>Styling with the STYLE attribute</h3>
        <p>
          Style attribute allows configuring look and feel right on the element.
          Although it&apos;s very convenient it is considered bad practice and
          you should avoid using the style attribute
        </p>
        <ForegroundColors />
        <BackgroundColors />
        <Borders />
        <Padding />

        <Margins />

        <BoxModel />

        <Corners />

        <Dimensions />

        <Display />

        <Positions />

        <Zindex />

        <Float />

        <GridLayout />

        <br />
        <br />
        <br />

        

        <Flex />
        <br />
        <br />
        <br />

        <MediaQueriesDemo />
        
        <br />
        <br />
        <br />

        <ReactIconsSampler />
      </div>

      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the elements of the same
          name, e.g., P, we can refer to a specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here&apos;s another paragraph using a different ID and a different
          look and feel
        </p>
        <p id="wd-ai-id-selector">
          This sample paragraph is styled by its own ID selector with a dark
          slate background and light yellow text
        </p>
        <p id="wd-id-selector-3">
          And a third paragraph with its own ID and its own look and feel
        </p>
      </div>

      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an
          element&apos;s CLASS attribute
        </p>
        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>
        <p className="wd-ai-class-selector">
          This sample paragraph is styled by the wd-ai-class-selector class
        </p>
        <h4 className="wd-ai-class-selector">
          This sample heading uses the same class as the paragraph above
        </h4>
        <p className="wd-your-class">
          This paragraph uses a second class I made up
        </p>
        <h4 className="wd-your-class">
          This heading shares the same class, so it looks the same
        </h4>
      </div>

      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular places in
            the document
            <p className="wd-selector-3">
              This paragraph&apos;s red background is referenced as
              <br />
              .selector-2 .selector3
              <br />
              meaning the descendant of some ancestor.
              <br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
              </span>
              <br />
              You can combine these relationships to create specific styles
              depending on the document structure
              <br />
              <span className="wd-ai-selector-5">
                This sample span is a descendant of .wd-selector-1, matched by
                .wd-selector-1 .wd-ai-selector-5
              </span>
            </p>
            <div id="my-personal-wd-selector-5" className="wd-selector-5">
              This div is a direct child of .wd-selector-2, so it matches
              .wd-selector-2 &gt; .wd-selector-5
            </div>
          </div>
        </div>
      </div>

      <div id="wd-css-selection-rules">
        <h3>CSS selection rule mechanism</h3>
        <blockquote
          id="wd-cascade-demo"
          className="wd-cascade-class wd-cascade-class-2"
        >
          A tag, a class, and an id rule all set this element&apos;s color. The
          id rule wins (green) even though it is declared first.
          <br />
          <span>
            This span has no rule of its own, so it inherits the green color
            from its parent.
          </span>
        </blockquote>
        <div id="wd-css-cascade-sample">
          <p id="wd-ai-cascade" className="wd-ai-cascade">
            A tag, a class, and an id rule all set this paragraph&apos;s
            background color. The id rule wins, so the background is red.
          </p>
        </div>
      </div>
    </>
  );
}
