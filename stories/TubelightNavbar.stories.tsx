import type { Meta, StoryObj } from '@storybook/react';
import { TubelightNavbar } from '../navbar';
import { Home, Settings, User, Bell, Search } from 'lucide-react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Components/Navigation/TubelightNavbar',
  component: TubelightNavbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TubelightNavbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Simple navigation bar example
export const Default: Story = {
  args: {
    items: [
      { name: "Home", url: "/", icon: Home },
      { name: "Profile", url: "/profile", icon: User },
      { name: "Notifications", url: "/notifications", icon: Bell },
      { name: "Search", url: "/search", icon: Search },
      { name: "Settings", url: "/settings", icon: Settings },
    ],
  },
};

// Simple example with fewer items
export const Minimal: Story = {
  args: {
    items: [
      { name: "Home", url: "/", icon: Home },
      { name: "Profile", url: "/profile", icon: User },
      { name: "Settings", url: "/settings", icon: Settings },
    ],
  },
};

// Custom styles example
export const CustomStyles: Story = {
  args: {
    items: [
      { name: "Home", url: "/", icon: Home },
      { name: "Profile", url: "/profile", icon: User },
      { name: "Settings", url: "/settings", icon: Settings },
    ],
    className: "bottom-6 fixed bg-opacity-30",
  },
}; 