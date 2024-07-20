"use client";

import React from "react";
import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/react";
import type { Selection } from "@nextui-org/react";

export default function AboutPage() {
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set(["1"])
  );
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <>
      <section className="flex items-end justify-center gap-4 h-svh pb-10">
        <div className="grid lg:grid-cols-2 mb-10 items-start">
          <div className=" max-w-lg justify-center flex-1">
            <h1 className={title({ size: "md" })}>Contact Us</h1>
          </div>

          <div className="flex flex-col gap-3 flex-1">
            <div>
              <p>
                Tell us about your project, We'd love to learn more about you
                and what we can design and build together.
              </p>
            </div>

            <Button className="w-fit rounded-none bg-[#DBFB8E] text-black">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
      <section className="flex flex-col  items-center justify-start pb-10">
        <div className="flex flex-col w-full lg:w-2/3 gap-4 ">
          <h2 className="font-bold">Contact Us</h2>
          <Input radius="none" type="text" label="Full name" />
          <Input radius="none" type="email" label="Email" />
          <Input radius="none" type="number" label="Phone Number" />
          <Input radius="none" type="text" label="Company name" />
          <Textarea placeholder="Type in your message" />
          <Button className="rounded-none bg-[#DBFB8E] text-default-50">Send Message</Button>
        </div>
      </section>
    </>
  );
}
