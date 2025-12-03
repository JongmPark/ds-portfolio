"use client";

const Footer = () => {
  return (
    <footer className="mt-16 bg-gray-100 px-4 py-8 text-xs text-gray-600 dark:bg-gray-900 dark:text-gray-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        {/* Left: copyright */}
        <div className="text-center sm:text-left">
          © 2025 Jongmin Park. All rights reserved.
        </div>

        {/* Center: short intro (optional) */}
        <div className="text-center text-[11px] text-gray-500 dark:text-gray-500">
          데이터로 문제를 정의하고 가설을 검증하는 주니어 데이터사이언티스트를
          목표로 하고 있습니다.
        </div>

        {/* Right: back to top */}
        <div className="text-center sm:text-right">
          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="inline-flex items-center gap-1 rounded-full border border-gray-300 px-3 py-1 text-[11px] font-medium text-gray-700 transition hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 dark:border-gray-600 dark:text-gray-200 dark:hover:border-blue-500 dark:hover:bg-blue-950 dark:hover:text-blue-200"
          >
            맨 위로
            <span aria-hidden>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


