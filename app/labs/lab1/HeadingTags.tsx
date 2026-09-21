export default function HeadingTags() {
  return (
    <>
    <div id="wd-h-tag">
      <h1> h1 Heading Tag</h1>
      <h2> h2 Heading Tag</h2>
      <h3> h3 Heading Tag</h3>
      <h4>Heading Tags</h4>
      Text documents are often broken up into several sections and subsections.
      Each section is usually prefaced with a short title or heading that
      attempts to summarize the topic of the section it precedes. For instance
      this paragraph is preceded by the heading Heading Tags. The font of the
      section headings are usually larger and bolder than their subsection
      headings. This document uses headings to introduce topics such as HTML
      Documents, HTML Tags, Heading Tags, etc. HTML heading tags can be used
      to format plain text so that it renders in a browser as large headings.
      There are 6 heading tags for different sizes: h1, h2, h3, h4, h5, and
      h6. Tag h1 is the largest heading and h6 is the smallest heading. A{" "}
      <span id="wd-inline-span">span</span> sits in this sentence without
      starting a new line.
      <h5> h5 Heading Tag</h5>
      <h6> h6 Heading Tag</h6>

    </div>

    <div id="wd-ai-headings">
        <h4>Lab notes</h4>
        This section is a second sample outline that shows how headings of
        different levels nest inside one another.
        <h5>What I built</h5>
        A small page with a few heading levels and a span, used to compare how
        block and inline elements lay themselves out.
        <h6>Next step</h6>
        Add more elements to this page and inspect each one in the browser
        developer tools.
    </div>

    <div id = "wd-your-heading">
        <h4>PATURI SIVA SATHVIK</h4>
        I am Paturi Siva Sathvik, I am a current northeastern university student, I am pursuing my masters in computer science.
        I am currently studying <span id="wd-your-span">web</span> development.
        I am very excited to learn more about this course web development. 

    </div>
    
    </>
  );
}