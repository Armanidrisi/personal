import {
  RiEarthLine,
  RiGithubLine,
  RiToolsLine,
  RiTwitterLine,
  RiYoutubeLine,
  RiTelegramLine,
} from "react-icons/ri";

const Buttons = [
  {
    icon: RiGithubLine,
    link: "https://github.com/Armanidrisi",
  },

  {
    icon: RiTwitterLine,
    link: "https://twitter.com/Armanidrisi01",
  },
  {
    icon: RiYoutubeLine,
    link: "https://youtube.com/c/Armanidrisi1",
  },
  {
    icon: RiTelegramLine,
    link: "https://telegram.me/Mohd_arman_idrisi01",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gradient-to-r from-slate-900 to-slate-950 text-center">
      <div className="flex justify-center flex-col items-center sm:items-start">
        <p className="text-blue-300 mb-2 flex items-center gap-1">
          <RiToolsLine />
          Programmer
        </p>
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600">
          Arman Idrisi
        </h1>
      </div>

      <div className="flex text gap-4 text-slate-400">
        {Buttons.map((button, idx) => (
          <a href={button.link} target="_blank" key={idx}>
            <button.icon
              size={32}
              className="hover:text-green-300 hover:cursor-pointer"
            />
          </a>
        ))}
      </div>
    </main>
  );
}
