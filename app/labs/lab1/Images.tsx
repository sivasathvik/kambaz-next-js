export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />
      Another image from the internet:
      <br />
      <img
        id="wd-ai-image"
        width="200px"
        alt="NASA Blue Marble view of Earth from space"
        src="https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001386/GSFC_20171208_Archive_e001386~medium.jpg"
      />
      <br />
      An image that matters to me:
      <br />
      <img
        id="wd-your-image"
        width="400px"
        alt="Waving Indian flag in saffron, white, and green with the Ashoka Chakra"
        src="https://as2.ftcdn.net/v2/jpg/20/96/42/77/500_F_2096427731_ZqC7RGgm8tECWELufXNzQ0qanzZ94ETC.jpg"
      />
    </div>
  );
}