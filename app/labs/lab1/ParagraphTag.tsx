export default function ParagraphTag() {
  return (
    <div id="wd-p-tag">
      <h4>Paragraph Tag</h4>
      <p id="wd-p-1">
        This is a paragraph. We often separate a long set of sentences with
        vertical spaces to make the text easier to read. Browsers ignore
        vertical white spaces and render all the text as one single set of
        sentences. To force the browser to add vertical spacing, wrap the
        paragraphs you want to separate with the paragraph tag
      </p>
      <p id="wd-p-2">
        This is the first paragraph. The paragraph tag is used to format
        vertical gaps between long pieces of text like this one.
      </p>
      <p id="wd-p-3">
        This is the second paragraph. Even though there is a deliberate white
        gap between the paragraph above and this paragraph, by default browsers
        render them as one contiguous piece of text as shown here on the right.
      </p>
      <p id="wd-p-4">
        This is the third paragraph. Wrap each paragraph with the paragraph tag
        to tell browsers to render the gaps.
      </p>
      <p id="wd-ai-p">
        The vertical spacing does not come from the blank lines in the source
        file, since browsers collapse those into a single space. It comes from
        the browser default stylesheet, which gives every paragraph element a
        top and bottom margin, so wrapping text in a paragraph tag is what
        actually reserves the empty space above and below it.
      </p>
      <p id="wd-p-your-1">
        I am from India Hyderabad and I am very excited to learn and participate
        in this course. I aim to learn more about web development and different
        technologies used in web development.
      </p>
      <p id="wd-p-your-2">
        I hope to participate in the project of the course and learn
        applications of these technologies in real world scenarios. Overall, I
        am very excited to learn more about this course web development.
      </p>
    </div>
  );
}
