import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from "@mantine/core";
import { HiMenuAlt2 } from "react-icons/hi";

const MainDrawer = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        offset={8}
        radius="md"
        opened={opened}
        onClose={close}
        title="Authentication"
        classNames={{
          drawer: "custom-drawer-class",
        }}
        styles={{
          drawer: {
            backgroundColor: "rgb(63, 63, 70)",
          },
        }}
      >
        {/* Drawer content */}
      </Drawer>

      <Button
        variant="gradient"
        gradient={{ from: "red", to: "pink", deg: 90 }}
        onClick={open}
      >
        <HiMenuAlt2 />
      </Button>
    </>
  );
};

export default MainDrawer;
