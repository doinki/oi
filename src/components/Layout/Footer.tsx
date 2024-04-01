import { twJoin } from 'tailwind-merge';

import { ArrowUpward } from '../icons/ArrowUpward';
import { GitHub } from '../icons/GitHub';

export function Footer() {
  return (
    <footer className="space-y-12 overflow-hidden px-16 pb-16 text-center">
      <a
        aria-label="doinki94@gmail.com으로 메일 보내기"
        className={twJoin(
          '-mx-16 block space-x-12 whitespace-nowrap border-y pb-6 pt-4 text-8xl font-black uppercase tracking-tighter transition-colors duration-100',
          'hover:bg-accent hover:text-white',
        )}
        href="mailto:doinki94@gmail.com"
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <p key={index} className="inline-block" aria-hidden>
            <span className="italic">doinki94</span>
            <span>@gmail.com</span>
          </p>
        ))}
      </a>

      <button
        aria-label="페이지 상단으로 이동"
        className="inline-grid size-16 place-content-center rounded-full border"
        type="button"
        onClick={() => {
          window.scrollTo({ behavior: 'smooth', top: 0 });
        }}
      >
        <ArrowUpward />
      </button>

      <nav>
        <a
          aria-label="GitHub에서 프로젝트 보기"
          className="inline-block rounded-full"
          href="https://github.com/doinki/oi"
          rel="noopener noreferrer"
          target="_blank"
          title="GitHub"
        >
          <GitHub height={32} width={32} />
        </a>
      </nav>
    </footer>
  );
}
