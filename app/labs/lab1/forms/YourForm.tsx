"use client";

export default function YourForm() {
  return (
    <div id="wd-your-form-section">
      <h4>Student Profile Form</h4>
      <form
        id="wd-your-form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <h5>Text Fields</h5>
        <label htmlFor="wd-your-first-name">First name: </label>
        <input
          type="text"
          placeholder="Paturi"
          defaultValue="Paturi"
          id="wd-your-first-name"
        />
        <br />
        <label htmlFor="wd-your-last-name">Last name: </label>
        <input
          type="text"
          placeholder="Siva Sathvik"
          defaultValue="Siva Sathvik"
          id="wd-your-last-name"
        />
        <br />
        <label htmlFor="wd-your-student-id">Student ID: </label>
        <input
          type="text"
          placeholder="002032943"
          defaultValue="002032943"
          id="wd-your-student-id"
        />
        <br />
        <label htmlFor="wd-your-password">Portal password: </label>
        <input
          type="password"
          defaultValue="#Sathvik21"
          id="wd-your-password"
        />

        <h5>Text Area</h5>
        <label htmlFor="wd-your-bio">Why I am taking this course:</label>
        <br />
        <textarea
          id="wd-your-bio"
          cols={50}
          rows={6}
          defaultValue="I am a student in this program and I want to learn how to build a complete web application from front to back. I am comfortable writing code on the server, but I want to get much better at the browser side: HTML and CSS layout, React components, and talking to a real API. By the end of the term I want to have deployed a full stack project I am proud to show."
        />

        <h5>Radio Buttons</h5>
        <label>Class standing:</label>
        <br />
        <input
          type="radio"
          name="wd-class-standing"
          id="wd-standing-freshman"
        />
        <label htmlFor="wd-standing-freshman">Freshman</label>
        <br />
        <input
          type="radio"
          name="wd-class-standing"
          id="wd-standing-sophomore"
        />
        <label htmlFor="wd-standing-sophomore">Sophomore</label>
        <br />
        <input type="radio" name="wd-class-standing" id="wd-standing-junior" />
        <label htmlFor="wd-standing-junior">Junior</label>
        <br />
        <input type="radio" name="wd-class-standing" id="wd-standing-senior" />
        <label htmlFor="wd-standing-senior">Senior</label>
        <br />
        <input
          type="radio"
          name="wd-class-standing"
          id="wd-standing-graduate"
          defaultChecked
        />
        <label htmlFor="wd-standing-graduate">Graduate</label>
        <br />
        <label>Enrollment status:</label>
        <br />
        <input
          type="radio"
          name="wd-enrollment-status"
          id="wd-enrollment-full-time"
          defaultChecked
        />
        <label htmlFor="wd-enrollment-full-time">Full-time</label>
        <br />
        <input
          type="radio"
          name="wd-enrollment-status"
          id="wd-enrollment-part-time"
        />
        <label htmlFor="wd-enrollment-part-time">Part-time</label>
        <br />
        <label>Where I attend from:</label>
        <br />
        <input
          type="radio"
          name="wd-campus-presence"
          id="wd-presence-on-campus"
          defaultChecked
        />
        <label htmlFor="wd-presence-on-campus">On-campus</label>
        <br />
        <input
          type="radio"
          name="wd-campus-presence"
          id="wd-presence-commuter"
        />
        <label htmlFor="wd-presence-commuter">Commuter</label>

        <h5>Checkboxes</h5>
        <label>Interests I care about:</label>
        <br />
        <input
          type="checkbox"
          name="wd-interests"
          id="wd-interest-full-stack"
          defaultChecked
        />
        <label htmlFor="wd-interest-full-stack">
          Full stack web development
        </label>
        <br />
        <input
          type="checkbox"
          name="wd-interests"
          id="wd-interest-python"
          defaultChecked
        />
        <label htmlFor="wd-interest-python">Python and data engineering</label>
        <br />
        <input type="checkbox" name="wd-interests" id="wd-interest-ml" />
        <label htmlFor="wd-interest-ml">Machine learning</label>
        <br />
        <input
          type="checkbox"
          name="wd-interests"
          id="wd-interest-cloud"
          defaultChecked
        />
        <label htmlFor="wd-interest-cloud">Cloud and DevOps</label>
        <br />
        <input type="checkbox" name="wd-interests" id="wd-interest-security" />
        <label htmlFor="wd-interest-security">Application security</label>

        <h5>Dropdowns</h5>
        <label htmlFor="wd-your-major">My major: </label>
        <br />
        <select id="wd-your-major" defaultValue="CS">
          <option value="CS">Computer Science(MS)</option>
          <option value="DS">Data Science</option>
          <option value="CYBER">Cybersecurity</option>
          <option value="IS">Information Systems</option>
          <option value="ROBO">Robotics</option>
        </select>
        <br />
        <label htmlFor="wd-your-topics">
          Topics I want to go deeper on this term:{" "}
        </label>
        <br />
        <select
          multiple
          size={6}
          id="wd-your-topics"
          defaultValue={["REACT", "MONGO"]}
        >
          <option value="HTML">HTML and CSS layout</option>
          <option value="REACT">React and Next.js</option>
          <option value="REDUX">State management with Redux</option>
          <option value="NODE">Node.js and Express APIs</option>
          <option value="MONGO">MongoDB and Mongoose</option>
          <option value="DEPLOY">Deployment and CI/CD</option>
        </select>

        <h5>Other HTML field types</h5>
        <label htmlFor="wd-your-email">School email: </label>
        <input
          type="email"
          placeholder="paturi.si@northeastern.edu"
          defaultValue="paturi.si@northeastern.edu"
          id="wd-your-email"
        />
        <br />
        <label htmlFor="wd-your-graduation-year">
          Expected graduation year:{" "}
        </label>
        <input
          type="number"
          defaultValue="2027"
          min={2024}
          max={2032}
          id="wd-your-graduation-year"
        />
        <br />
        <label htmlFor="wd-your-start-date">Program start date: </label>
        <input
          type="date"
          defaultValue="2025-09-03"
          min="2020-01-01"
          max="2030-12-31"
          id="wd-your-start-date"
        />
        <br />
        <label htmlFor="wd-your-excitement">
          How excited I am about this course (0 to 10): 9
        </label>
        <br />
        <input
          type="range"
          defaultValue="9"
          min="0"
          max="10"
          step="1"
          id="wd-your-excitement"
        />

        <h5>Buttons</h5>
        <button id="wd-your-form-save" type="submit">
          Save
        </button>
        <button id="wd-your-form-cancel" type="button">
          Cancel
        </button>
      </form>
    </div>
  );
}
