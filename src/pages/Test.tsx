import IllustrationHeadWithChat from "../assets/IllustrationHeadWithChat";

export default function Test() {
  return (
    <>
      <div id="hs" className="headWithCaption">
        <IllustrationHeadWithChat />

        <header  className="headWithCaptionText mediumHeader">
          i'm a <span className="typedSeries"></span> <br /> software engineer
        </header>
      </div>
    </>
  );
}
