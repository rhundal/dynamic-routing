export default function Blog() {
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-5">
        <header className="font-bold text-md flex justify-center">
          <h1>Rajdeep's Mini React Learning Blog</h1>
        </header>
        <main className="flex justify-center border-1 border-gray-200 rounded-xl w-[1000px] p-10">
          <h3 className="text-sm">
            Reflections on learning React, from fundamentals to advanced
            concepts at Per Scholas. This blog/assignment demonstrates my
            understanding of React Router DOM in React.
          </h3>
        </main>
      </div>
    </>
  );
}
