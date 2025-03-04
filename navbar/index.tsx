import React, { useState, useEffect } from 'react';
import { cn } from '../utils';
import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

export interface TubelightNavbarProps {
  items: NavItem[];
  className?: string;
}

export function TubelightNavbar({ items, className }: TubelightNavbarProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({});
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Update the indicator position when activeIndex changes
    const activeItem = document.getElementById(`nav-item-${activeIndex}`);
    if (activeItem) {
      const { offsetLeft, offsetWidth } = activeItem;
      setIndicatorStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
      });
    }
  }, [activeIndex, isMobile]);

  // Get the active item and its icon component
  const activeItem = items[activeIndex];
  const ActiveIcon = activeItem?.icon;

  return (
    <nav className={cn("bg-card p-2 rounded-xl shadow-sm", className)}>
      <div className="relative flex items-center justify-center">
        {items.map((item, index) => {
          const ItemIcon = item.icon;
          return (
            <a
              key={item.url}
              id={`nav-item-${index}`}
              href={item.url}
              className={cn(
                "relative flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors",
                activeIndex === index ? "text-white" : "text-muted-foreground hover:text-foreground"
              )}
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(index);
              }}
            >
              <ItemIcon className="h-5 w-5" />
              {!isMobile && <span className="ml-2">{item.name}</span>}
            </a>
          );
        })}
        
        {/* Glowing indicator */}
        <div
          className="absolute bottom-0 h-full rounded-lg bg-primary transition-all duration-300 ease-in-out"
          style={indicatorStyle}
        >
          {/* Inner glow */}
          <div className="absolute inset-0 rounded-lg bg-primary opacity-70 blur-sm" />
          
          {/* Active item (shows on top of glow) */}
          <div className="relative flex h-full items-center justify-center">
            <div className="flex items-center">
              {ActiveIcon && (
                <ActiveIcon className="h-5 w-5 text-white" />
              )}
              {!isMobile && activeItem?.name && (
                <span className="ml-2 font-medium text-white">
                  {activeItem.name}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 