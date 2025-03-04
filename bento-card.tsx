"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "./utils";

export interface BentoCardProps {
  name: string;
  description: string;
  Icon: React.ElementType;
  cta: string;
  className?: string;
  background?: React.ReactNode;
  content?: {
    intro: string;
    details: Array<{
      title: string;
      content: string;
    }>;
    metrics: string;
  };
}

export function BentoCard({
  name,
  description,
  Icon,
  cta,
  className,
  background,
  content = {
    intro: "This is a detailed view of this feature or component.",
    details: [
      {
        title: "Overview",
        content: "A more detailed explanation of this feature and how it works."
      },
      {
        title: "Benefits",
        content: "How this feature benefits users and adds value to their experience."
      }
    ],
    metrics: "Additional information and metrics about this feature."
  }
}: BentoCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className={cn(
          "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-[3rem]",
          "backdrop-blur-lg bg-muted/30 dark:bg-background/50",
          "border-border/10 shadow-[0_0_20px_rgba(0,0,0,0.1)]",
          "dark:border-white/10 dark:shadow-[0_0_30px_rgba(255,255,255,0.05)]",
          "hover:shadow-[0_0_30px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]",
          "transition-all duration-300 cursor-pointer min-h-[22rem]",
          className
        )}
      >
        <div>{background}</div>
        <div className="pointer-events-none z-10 flex transform-gpu flex-col items-center justify-center h-full p-8 transition-all duration-300 group-hover:-translate-y-10">
          <div className="flex flex-col items-center text-center gap-4">
            <Icon className="h-12 w-12 transform-gpu text-foreground transition-all duration-300 ease-in-out group-hover:scale-75" />
            <h3 className="text-xl font-semibold text-foreground">
              {name}
            </h3>
            <p className="max-w-lg text-muted-foreground dark:text-foreground/60 text-center">
              {description.split('\n').map((line, index) => (
                <span key={index} className="block mb-2">{line.trim().replace('• ', '')}</span>
              ))}
            </p>
          </div>
        </div>

        <div
          className={cn(
            "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center justify-center p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
          )}
        >
          <span className="pointer-events-auto rounded-3xl bg-muted/50 hover:bg-muted/70 dark:bg-white/10 dark:hover:bg-white/20 text-foreground px-4 py-2 text-sm font-medium shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all">
            {cta}
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4 inline-block">
              <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
            </svg>
          </span>
        </div>
        <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-muted/30 dark:group-hover:bg-white/[0.02]" />
      </div>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsOpen(false);
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="relative w-[420px] z-50"
            >
              <div className="mx-auto border-border/10 shadow-xl bg-background/95 backdrop-blur-xl rounded-2xl overflow-hidden">
                <div className="relative border-b border-border/10 p-6">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute right-4 top-4 rounded-full p-2 hover:bg-accent transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                  <div className="flex items-center gap-3">
                    <Icon className="h-8 w-8 text-foreground" />
                    <h2 className="text-2xl font-semibold">{name}</h2>
                  </div>
                </div>
                <div className="pt-6 p-6">
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="text-lg text-muted-foreground mb-6">
                      {content.intro}
                    </p>
                    {content.details.map((detail, index) => (
                      <div key={index} className="mb-6">
                        <h4 className="text-lg font-semibold mb-2">{detail.title}</h4>
                        <p className="text-muted-foreground">{detail.content}</p>
                      </div>
                    ))}
                    <div className="mt-6 pt-6 border-t border-border/10">
                      <p className="text-sm text-muted-foreground italic">
                        {content.metrics}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 