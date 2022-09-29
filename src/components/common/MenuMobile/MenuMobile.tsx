import SlideOver from 'src/components/ui/SlideOver'
import { ButtonIcon } from "src/components/ui/Button";
import IconClose from "src/components/ui/Icons/IconClose";
import NavLinks from "src/components/common/NavLinks";
import { useFadeEffect } from 'src/sdk/ui/useFadeEffect'
import MenuUser from "./MenuUser";
import "./menu-mobile.scss";
import { useUI } from 'src/sdk/ui/Provider'

const MenuMobile = () => {
  const { closeNavbar } = useUI()
  const { fade, fadeOut } = useFadeEffect()

  return (
    <SlideOver
      isOpen
      fade={fade}
      onDismiss={fadeOut}
      size="partial"
      direction="leftSide"
      className="header__navbar-sidebar"
      onTransitionEnd={() => fade === 'out' && closeNavbar()}
    >
      <header data-testid="menu-mobile">
        <ButtonIcon
          data-testid="header__navbar-button-close"
          aria-label="Fechar Menu"
          icon={<IconClose />}
          onClick={fadeOut}
        />
        <MenuUser />
      </header>

      <div className="header__navbar-sectionMenu">
        <h3>
          Departamentos <a href="/s/">Ver todos</a>
        </h3>

        <NavLinks />
      </div>
    </SlideOver>
  );
};

export default MenuMobile;
