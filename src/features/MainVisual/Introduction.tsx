import { memo } from 'react';

export const Introduction = memo(() => {
  return (
    <div className="flex items-center">
      <img
        src="/images/profile-image.jpg"
        alt="プロフィール画像"
        className="w-[64px] h-[64px] rounded-full mr-4 md:mr-8 md:w-[96px] md:h-[96px] lg:w-[120px] lg:h-[120px] object-cover"
        loading="lazy"
      />
      <div>
        <span
          className="font-rokkitt font-bold text-black dark:text-white text-3xl md:text-5xl lg:text-6xl"
          alia-label={`I'm りょーた`}
        >
          I'm <span className="bg-clip-text text-transparent bg-gradation-clip bg-cover">RyoTa.</span>
        </span>
        <div className="font-rokkitt text-zinc-500 dark:text-zinc-400 font-bold text-md md:text-xl lg:text-2xl">
          = Design Engineer + Illustrator
        </div>
      </div>
    </div>
  );
});
