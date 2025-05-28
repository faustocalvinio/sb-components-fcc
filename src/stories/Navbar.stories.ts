import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";

// import { Navbar, type NavbarProps } from './Navbar';

const meta: Meta = {
   title: "Example/Navbar",
   component: Navbar,
   parameters: {
      layout: "centered",
      
   },
   tags: ["autodocs"],
   
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
   args: {
      // Add default props for the Navbar here
      title: "My Navbar",
      onTitleClick: () => {
         console.log("Navbar title clicked");
      },
   },
};

export const WithLogo: Story = {
   args: {
      // Add props for a Navbar with a logo here
   },
};

export const WithLinks: Story = {
   args: {
      // Add props for a Navbar with navigation links here
   },
};
