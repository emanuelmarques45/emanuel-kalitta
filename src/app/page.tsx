"use client";

import { EmblaCarousel } from "./EmblaCarousel";

export default function Home() {
  return (
    <>
      <main className='pt-4'>
        <h1 className='text-center text-4xl flex items-center justify-center gap-5'>
          <span>
            Emanuel
            <br />♥ <br />
            Kálitta
          </span>
          <span>6 meses</span>
        </h1>
        <EmblaCarousel />
      </main>
    </>
  );
}
