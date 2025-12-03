const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-zinc-50/70 px-4 py-16 text-zinc-900 backdrop-blur dark:bg-zinc-950/70 dark:text-zinc-100 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center sm:text-left">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Contact
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">
            데이터 분석/머신러닝 포지션, 혹은 협업 제안이 있으시다면 아래
            채널로 편하게 연락 주세요.
          </p>
        </div>

        <div className="grid gap-6 rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-zinc-200/80 dark:bg-zinc-900/80 dark:ring-zinc-700 sm:grid-cols-3">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Email
            </h3>
            <a
              href="mailto:jongmpark7991@gmail.com"
              className="mt-2 inline-flex text-sm font-medium text-blue-600 underline-offset-4 hover:underline dark:text-blue-300"
            >
              jongmpark7991@gmail.com
            </a>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              LinkedIn
            </h3>
            <a
              href="https://www.linkedin.com/in/jongmin-park-269426179/"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex text-sm font-medium text-blue-600 underline-offset-4 hover:underline dark:text-blue-300"
            >
              linkedin.com/in/jongmin-park-269426179
            </a>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              GitHub
            </h3>
            <a
              href="https://github.com/JongmPark"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex text-sm font-medium text-blue-600 underline-offset-4 hover:underline dark:text-blue-300"
            >
              github.com/JongmPark
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


