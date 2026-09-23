export default function AnchorTag() {
  return (
    <>
      <h4>Anchor tag</h4>
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text
      <br />
      <a href="https://github.com/jannunzi" id="wd-github-link">
        GitHub
      </a>
      <br />
      <a
        href="https://mantis.csail.mit.edu/signin/?callbackUrl=%2Fnew-space%2F"
        id="wd-your-link"
      >
        Mantis
      </a>
      <br />
      <a
        href="https://github.com/sivasathvik"
        target="_blank"
        rel="noreferrer"
        id="wd-your-github"
      >
        My GitHub profile(new tab)
      </a>
      <br />
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
        id="wd-ai-link"
      >
        MDN: table element
      </a>
    </>
  );
}
