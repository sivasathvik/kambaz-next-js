import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <div className="mb-4">
        <label htmlFor="wd-name" className="mb-1 block text-sm font-medium">
          Assignment Name
        </label>
        <input
          id="wd-name"
          defaultValue="A1 - ENV + HTML"
          className="w-full rounded border border-neutral-300 px-3 py-2 text-sm"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="wd-description"
          className="mb-1 block text-sm font-medium"
        >
          Description
        </label>
        <textarea
          id="wd-description"
          rows={5}
          defaultValue="The assignment is available online Submit a link to the landing page of"
          className="w-full rounded border border-neutral-300 px-3 py-2 text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="wd-points" className="mb-1 block text-sm font-medium">
          Points
        </label>
        <input
          id="wd-points"
          defaultValue={100}
          className="w-full rounded border border-neutral-300 px-3 py-2 text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="wd-group" className="mb-1 block text-sm font-medium">
          Assignment Group
        </label>
        <select
          id="wd-group"
          defaultValue="ASSIGNMENTS"
          className="w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm"
        >
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="wd-display-grade-as"
          className="mb-1 block text-sm font-medium"
        >
          Display Grade as
        </label>
        <select
          id="wd-display-grade-as"
          defaultValue="Percentage"
          className="w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm"
        >
          <option value="Percentage">Percentage</option>
          <option value="Points">Points</option>
          <option value="Letter Grade">Letter Grade</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="wd-submission-type"
          className="mb-1 block text-sm font-medium"
        >
          Submission Type
        </label>
        <div className="rounded border border-neutral-300 p-4">
          <select
            id="wd-submission-type"
            defaultValue="Online"
            className="mb-4 w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm"
          >
            <option value="Online">Online</option>
            <option value="On Paper">On Paper</option>
            <option value="No Submission">No Submission</option>
          </select>
          <div className="mb-2 text-sm font-medium">Online Entry Options</div>
          <div className="mb-2 flex items-center gap-2 text-sm">
            <input type="checkbox" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label>
          </div>
          <div className="mb-2 flex items-center gap-2 text-sm">
            <input type="checkbox" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label>
          </div>
          <div className="mb-2 flex items-center gap-2 text-sm">
            <input type="checkbox" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
          </div>
          <div className="mb-2 flex items-center gap-2 text-sm">
            <input type="checkbox" id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <input type="checkbox" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="mb-1 text-sm font-medium">Assign</div>
        <div className="rounded border border-neutral-300 p-4">
          <div className="mb-4">
            <label
              htmlFor="wd-assign-to"
              className="mb-1 block text-sm font-medium"
            >
              Assign to
            </label>
            <input
              id="wd-assign-to"
              defaultValue="Everyone"
              className="w-full rounded border border-neutral-300 px-3 py-2 text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="wd-due-date"
              className="mb-1 block text-sm font-medium"
            >
              Due
            </label>
            <input
              type="date"
              id="wd-due-date"
              defaultValue="2024-05-13"
              className="w-full rounded border border-neutral-300 px-3 py-2 text-sm"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="wd-available-from"
                className="mb-1 block text-sm font-medium"
              >
                Available from
              </label>
              <input
                type="date"
                id="wd-available-from"
                defaultValue="2024-05-06"
                className="w-full rounded border border-neutral-300 px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="wd-available-until"
                className="mb-1 block text-sm font-medium"
              >
                Until
              </label>
              <input
                type="date"
                id="wd-available-until"
                defaultValue="2024-05-20"
                className="w-full rounded border border-neutral-300 px-3 py-2 text-sm"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="wd-ai-editor-notes"
          className="mb-1 block text-sm font-medium"
        >
          Sample notes
        </label>
        <textarea
          id="wd-ai-editor-notes"
          rows={3}
          className="w-full rounded border border-neutral-300 px-3 py-2 text-sm"
        />
      </div>
      <hr className="my-4 border-neutral-300" />
      <div className="flex justify-end gap-2">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm text-neutral-900 no-underline"
        >
          Cancel
        </Link>
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded border border-red-600 bg-red-600 px-4 py-2 text-sm font-medium text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
