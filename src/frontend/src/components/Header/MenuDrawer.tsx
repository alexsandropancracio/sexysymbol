import {
  Overlay,
  Drawer,
  DrawerItem,
  CloseButton,
} from "./styles";

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MenuDrawer({ isOpen, onClose }: MenuDrawerProps) {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <Drawer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>

        <DrawerItem>Painel</DrawerItem>
        <DrawerItem>Perfil</DrawerItem>
        <DrawerItem>Acompanhantes</DrawerItem>
        <DrawerItem>Central de Atendimento</DrawerItem>
        <DrawerItem>Sair</DrawerItem>
      </Drawer>
    </Overlay>
  );
}
