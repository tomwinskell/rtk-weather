'use client';
import { Weather } from './ui/Weather';
import { Form } from './ui/form/Form';

export default function Home() {
  return (
    <div className="w-full md:w-4xl md:rounded-2xl md:shadow-xl bg-white p-5 max-w-[400px] md:max-w-none">
      <Form />
      <Weather />
    </div>
  );
}
