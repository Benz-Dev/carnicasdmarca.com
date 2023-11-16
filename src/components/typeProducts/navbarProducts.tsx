import { cn } from "../../utils/cn";
import { useProductsSection } from "../../contexts/products.context";

function NavbarProducts({}) {
  const { section } = useProductsSection();

  return (
    <div className="w-full bg-red-400 sticky top-0">
      <div className="max-w-xl mx-auto my-0 h-32 flex items-center justify-center gap-8">
        <ButtonNavbar
          isActive={section === 1}
          src="/icons/meat.svg"
          alt="Icono Productos Frescos"
          title="Productos Frescos"
        />
        <ButtonNavbar
          isActive={section === 2}
          src="/icons/salami.svg"
          alt="Icono Productos Frescos"
          title="Productos Curados"
        />
        <ButtonNavbar
          isActive={section === 3}
          src="/icons/olla.svg"
          alt="Icono Productos Frescos"
          title="Productos Cocidos"
        />
      </div>
    </div>
  );
}

function ButtonNavbar(props: {
  src: string;
  title: string;
  alt: string;
  isActive?: boolean;
}) {
  return (
    <button
      className={cn(
        "flex flex-col items-center justify-center font-bold text-white",
        {
          "opacity-30": !props.isActive,
        }
      )}
    >
      <img className="w-11" src={props.src} alt={props.alt} />
      <span className="text-base">{props.title}</span>
    </button>
  );
}

export default NavbarProducts;
