import NavbarProducts from "./navbarProducts";
import ContentSection from "./contentSections";
import { useEffect, useId } from "react";
import { ProductsProvider, useProductsSection } from "../../contexts/products.context";

function TypeProducts({}) {
  const {setSection} = useProductsSection()

  const idContainerSection = useId()
  const idFreshSection = useId()
  const idCuredSection = useId()
  const idCookedSection = useId()

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const containerSection = document.getElementById(idContainerSection);
      const coordsFContainerSection = containerSection.getBoundingClientRect();
      const threshold = 128; // Ajusta esto según sea necesario
  
      if (coordsFContainerSection.top <= threshold) {
        setSection(1);
      } else {
        // Puedes agregar lógica adicional si es necesario
        // setSection(0); // Por ejemplo, si quieres desactivar la sección cuando no está en la parte superior
      }
    });
  
    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [idContainerSection, setSection]);

  return (
    <ProductsProvider>
      <div id={idContainerSection} className="h-[calc(100vh*3)] bg-slate-300">
        <NavbarProducts />

        <div className="h-[calc(100vh-128px)] sticky top-32">
          <ContentSection id={idFreshSection} title="Productos Frescos" />
          <ContentSection id={idCuredSection} title="Productos Curados" />
          <ContentSection id={idCookedSection} title="Productos Cocidos" />
        </div>
      </div>
    </ProductsProvider>
  );
}

export default TypeProducts;
