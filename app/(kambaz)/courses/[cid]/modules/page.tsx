import Module from "./Module";
import Lesson from "./Lesson";

export default function Modules() {
  return (
    <div>
      <button>Collapse All</button> <button>View Progress</button>{" "}
      <select defaultValue="publish-all">
        <option value="publish-all">Publish All</option>
      </select>{" "}
      <button>+ Module</button>
      <ul id="wd-modules">
        <Module title="Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">Introduction to the course</li>
            <li className="wd-content-item">Learn what is Web Development</li>
          </Lesson>
          <Lesson title="READING">
            <li className="wd-content-item">
              Full Stack Developer - Chapter 1 - Introduction
            </li>
            <li className="wd-content-item">
              Full Stack Developer - Chapter 2 - Creating User Interfaces
            </li>
          </Lesson>
          <Lesson title="SLIDES">
            <li className="wd-content-item">Introduction to Web Development</li>
            <li className="wd-content-item">
              Creating an HTTP server with Node.js
            </li>
            <li className="wd-content-item">Creating a React Application</li>
          </Lesson>
        </Module>
        <Module title="Week 2, Lecture 2 - HTML and CSS Fundamentals">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">
              Learn how to structure content with HTML tags
            </li>
            <li className="wd-content-item">
              Style pages with CSS selectors and the box model
            </li>
          </Lesson>
          <Lesson title="READING">
            <li className="wd-content-item">
              Full Stack Developer - Chapter 3 - Formatting with CSS
            </li>
            <li className="wd-content-item">
              Full Stack Developer - Chapter 4 - Responsive Layouts
            </li>
          </Lesson>
          <Lesson title="SLIDES">
            <li className="wd-content-item">HTML Documents and Tags</li>
            <li className="wd-content-item">CSS Selectors and Specificity</li>
            <li className="wd-content-item">Bootstrap Grid System</li>
          </Lesson>
        </Module>
        <Module title="Week 3, Lecture 3 - JavaScript and React Components">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">
              Practice modern JavaScript syntax and array functions
            </li>
            <li className="wd-content-item">
              Build reusable React components that accept props
            </li>
          </Lesson>
          <Lesson title="READING">
            <li className="wd-content-item">
              Full Stack Developer - Chapter 5 - JavaScript Fundamentals
            </li>
            <li className="wd-content-item">
              Full Stack Developer - Chapter 6 - Working with React
            </li>
          </Lesson>
          <Lesson title="SLIDES">
            <li className="wd-content-item">Variables, Functions, and Scope</li>
            <li className="wd-content-item">Array Map, Filter, and Reduce</li>
            <li className="wd-content-item">Passing Props to Components</li>
          </Lesson>
        </Module>
      </ul>
    </div>
  );
}