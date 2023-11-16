
function ContentSection(props: { title: string; id: string }) {
  return (
    <div id={props.id} className="absolute top-0 left-0 h-full bg-neutral-800 ">
      <h3>{props.title}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae
        augue efficitur, posuere metus sit amet, ullamcorper diam. Nulla mauris
        velit, bibendum non turpis a, tristique vulputate magna. Phasellus mi
        enim, faucibus nec condimentum a, condimentum vel augue. Quisque at
        sapien ut elit feugiat vehicula.
      </p>
    </div>
  );
}

export default ContentSection;
